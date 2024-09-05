import { Component, OnInit } from '@angular/core';
import { MecanicoService } from '../services/mecanico.service';
import { ConsertoMotoService } from '../services/conserto-moto.service';
import { TipoConsertoService } from '../services/tipo-conserto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalMecanicos: number = 0;
  mecanicosMaisEficientes: any[] = [];
  totalConsertos: number = 0;
  consertosExcedidos: any[] = [];
  tiposConserto: any[] = [];

  constructor(
    private mecanicoService: MecanicoService,
    private consertoMotoService: ConsertoMotoService,
    private tipoConsertoService: TipoConsertoService
  ) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.mecanicoService.getMecanicos().subscribe(
      (mecanicos) => {
        this.totalMecanicos = mecanicos.length;
      },
      (error) => console.error('Erro ao carregar mecânicos:', error)
    );

    this.mecanicoService.getMecanicosMaisEficientes().subscribe(
      (mecanicos) => {
        this.mecanicosMaisEficientes = mecanicos;
      },
      (error) => console.error('Erro ao carregar mecânicos mais eficientes:', error)
    );

    this.consertoMotoService.getConsertoMotos().subscribe(
      (consertos) => {
        this.totalConsertos = consertos.length;
      },
      (error) => console.error('Erro ao carregar consertos:', error)
    );

    this.consertoMotoService.getConsertosExcedidoTempo().subscribe(
      (consertos) => {
        this.consertosExcedidos = consertos;
      },
      (error) => console.error('Erro ao carregar consertos excedidos:', error)
    );

    this.tipoConsertoService.getTipoConsertos().subscribe(
      (tipos) => {
        this.tiposConserto = tipos;
      },
      (error) => console.error('Erro ao carregar tipos de conserto:', error)
    );
  }
}
