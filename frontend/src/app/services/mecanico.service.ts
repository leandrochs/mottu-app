import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {
  private apiUrl = 'http://localhost:5000/api/mecanico';
  constructor(private http: HttpClient) { }

  getMecanicos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getMecanico(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createMecanico(mecanico: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, mecanico);
  }

  updateMecanico(id: number, mecanico: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, mecanico);
  }

  deleteMecanico(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getMecanicoMaisEficiente(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/MaisEficiente`);
  }
}
