import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoConsertoService {
  private apiUrl = 'http://localhost:5000/api/tipoconserto'; // Ajuste a URL conforme necessário

  constructor(private http: HttpClient) { }

  getTipoConsertos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTipoConserto(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createTipoConserto(tipoConserto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tipoConserto);
  }

  updateTipoConserto(id: number, tipoConserto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, tipoConserto);
  }

  deleteTipoConserto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
