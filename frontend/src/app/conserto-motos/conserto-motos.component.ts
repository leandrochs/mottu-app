import { Component, OnInit } from '@angular/core';
import { ConsertoMotoService } from '../services/conserto-moto.service';

@Component({
  selector: 'app-conserto-motos',
  templateUrl: './conserto-motos.component.html',
  styleUrls: ['./conserto-motos.component.css']
})
export class ConsertoMotosComponent implements OnInit {
  consertoMotos: any[] = [];
  consertosExcedidos: any[] = [];

  constructor(private consertoMotoService: ConsertoMotoService) { }

  ngOnInit(): void {
    this.loadConsertoMotos();
    this.loadConsertosExcedidos();
  }

  loadConsertoMotos(): void {
    this.consertoMotoService.getConsertoMotos().subscribe(
      (data) => {
        this.consertoMotos = data;
      },
      (error) => {
        console.error('Erro ao carregar consertos de motos:', error);
      }
    );
  }

  loadConsertosExcedidos(): void {
    this.consertoMotoService.getConsertosExcedidoTempo().subscribe(
      (data) => {
        this.consertosExcedidos = data;
      },
      (error) => {
        console.error('Erro ao carregar consertos excedidos:', error);
      }
    );
  }
}
