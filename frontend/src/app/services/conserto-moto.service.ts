import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsertoMotoService {
  private apiUrl = 'http://localhost:5000/api/consertomoto'; // Ajuste a URL conforme necessário

  constructor(private http: HttpClient) { }

  getConsertoMotos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getConsertoMoto(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createConsertoMoto(consertoMoto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, consertoMoto);
  }

  updateConsertoMoto(id: number, consertoMoto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, consertoMoto);
  }

  deleteConsertoMoto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getConsertosExcedidoTempo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ExcedidoTempo`);
  }
}
