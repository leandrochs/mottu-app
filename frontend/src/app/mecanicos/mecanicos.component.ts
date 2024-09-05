import { Component, OnInit, ViewChild } from '@angular/core';
import { MecanicoService } from '../services/mecanico.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.css']
})
export class MecanicosComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  mecanicos: any[] = [];
  mecanicosMaisEficientes: any[] = [];
  mecanicoSelecionado: any = null;

  // Radar Chart
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = ['Nível 1', 'Nível 2', 'Nível 3'];
  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: []
  };
  public radarChartType: ChartType = 'radar';

  // Line Chart para evolução da eficiência
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [],
    labels: []
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  public lineChartType: ChartType = 'line';

  constructor(private mecanicoService: MecanicoService) { }

  ngOnInit(): void {
    this.carregarMecanicos();
    this.carregarMecanicosMaisEficientes();
  }

  carregarMecanicos(): void {
    this.mecanicoService.getMecanicos().subscribe(
      data => {
        this.mecanicos = data;
        this.atualizarGraficoRadar();
      },
      error => console.error('Erro ao carregar mecânicos:', error)
    );
  }

  carregarMecanicosMaisEficientes(): void {
    this.mecanicoService.getMecanicosMaisEficientes().subscribe(
      data => {
        this.mecanicosMaisEficientes = data;
      },
      error => console.error('Erro ao carregar mecânicos mais eficientes:', error)
    );
  }

  editarMecanico(mecanico: any): void {
    this.mecanicoSelecionado = { ...mecanico };
    this.carregarEvolucaoEficiencia(mecanico.id);
  }

  salvarEdicao(): void {
    if (this.mecanicoSelecionado) {
      this.mecanicoService.updateMecanico(this.mecanicoSelecionado.id, this.mecanicoSelecionado).subscribe(
        () => {
          this.carregarMecanicos();
          this.mecanicoSelecionado = null;
        },
        error => console.error('Erro ao atualizar mecânico:', error)
      );
    }
  }

  cancelarEdicao(): void {
    this.mecanicoSelecionado = null;
  }

  promoverMecanico(id: number): void {
    this.mecanicoService.promoverMecanico(id).subscribe(
      () => {
        this.carregarMecanicos();
        this.carregarMecanicosMaisEficientes();
      },
      error => console.error('Erro ao promover mecânico:', error)
    );
  }

  atualizarGraficoRadar(): void {
    this.radarChartData.datasets = this.mecanicos.map(mecanico => ({
      data: [mecanico.eficienciaNivel1, mecanico.eficienciaNivel2, mecanico.eficienciaNivel3],
      label: mecanico.nome
    }));
    this.chart?.update();
  }

  carregarEvolucaoEficiencia(mecanicoId: number): void {
    this.mecanicoService.getEvolucaoEficiencia(mecanicoId).subscribe(
      data => {
        this.lineChartData.datasets = [
          { data: data.map(d => d.eficiencia), label: 'Eficiência' }
        ];
        this.lineChartData.labels = data.map(d => d.data);
        this.chart?.update();
      },
      error => console.error('Erro ao carregar evolução da eficiência:', error)
    );
  }
}
