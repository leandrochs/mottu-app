import { Component, OnInit } from '@angular/core';
import { MecanicoService } from '../services/mecanico.service';

@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.css']
})
export class MecanicosComponent implements OnInit {
  mecanicos: any[] = [];
  mecanicoMaisEficiente: any;

  constructor(private mecanicoService: MecanicoService) { }

  ngOnInit(): void {
    this.loadMecanicos();
    this.loadMecanicoMaisEficiente();
  }

  loadMecanicos(): void {
    this.mecanicoService.getMecanicos().subscribe(
      (data) => {
        this.mecanicos = data;
      },
      (error) => {
        console.error('Erro ao carregar mecânicos:', error);
      }
    );
  }

  loadMecanicoMaisEficiente(): void {
    this.mecanicoService.getMecanicoMaisEficiente().subscribe(
      (data) => {
        this.mecanicoMaisEficiente = data;
      },
      (error) => {
        console.error('Erro ao carregar mecânico mais eficiente:', error);
      }
    );
  }
}
