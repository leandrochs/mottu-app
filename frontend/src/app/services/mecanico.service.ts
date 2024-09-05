import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {
  private apiUrl = 'http://localhost:5000/api/mecanico'; // Ajuste conforme necessário

  constructor(private http: HttpClient) { }

  getMecanicos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getMecanico(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateMecanico(id: number, mecanico: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, mecanico);
  }

  promoverMecanico(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/promover/${id}`, {});
  }

  getMecanicosMaisEficientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/maisEficientes`);
  }

  getEvolucaoEficiencia(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}/evolucaoEficiencia`);
  }
}
