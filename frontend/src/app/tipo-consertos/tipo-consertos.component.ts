import { Component, OnInit } from '@angular/core';
import { TipoConsertoService } from '../services/tipo-conserto.service';

@Component({
  selector: 'app-tipo-consertos',
  templateUrl: './tipo-consertos.component.html',
  styleUrls: ['./tipo-consertos.component.css']
})
export class TipoConsertosComponent implements OnInit {
  tipoConsertos: any[] = [];

  constructor(private tipoConsertoService: TipoConsertoService) { }

  ngOnInit(): void {
    this.loadTipoConsertos();
  }

  loadTipoConsertos(): void {
    this.tipoConsertoService.getTipoConsertos().subscribe(
      (data) => {
        this.tipoConsertos = data;
      },
      (error) => {
        console.error('Erro ao carregar tipos de conserto:', error);
      }
    );
  }
}
