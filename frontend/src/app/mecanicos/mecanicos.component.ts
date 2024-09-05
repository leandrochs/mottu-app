import { Component, OnInit } from '@angular/core';
import { MecanicoService } from '../services/mecanico.service';

@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.css']
})
export class MecanicosComponent implements OnInit {
  mecanicos: any[] = [];
  mecanicosMaisEficientes: any[] = [];
  mecanicoSelecionado: any = null;

  constructor(private mecanicoService: MecanicoService) { }

  ngOnInit(): void {
    this.carregarMecanicos();
    this.carregarMecanicosMaisEficientes();
  }

  carregarMecanicos(): void {
    this.mecanicoService.getMecanicos().subscribe(
      data => {
        this.mecanicos = data;
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
}
