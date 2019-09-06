import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TallerInterface } from 'src/app/modelos/taller';
import { MatriculaInterface } from '../modelos/matricula';

@Injectable({
  providedIn: 'root'
})
export class ApiserviciosService {

  private rutaRestTalleres = "http://localhost:8089/talleres/";
  private rutaRestMatriculasGet = "http://localhost:8089/matriculas/taller/";
  private rutaRestMatriculas = "http://localhost:8089/matriculas/";
  httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

  constructor(private http: HttpClient) { }

  public getTalleres() {
    return this.http.get(this.rutaRestTalleres);
  }

  public getTaller(id: number): Observable<TallerInterface> {
    return this.http.get<TallerInterface>(this.rutaRestTalleres + id);
  }

  public postTaller(taller: TallerInterface):
    Observable<TallerInterface> {
    return this.http.post<TallerInterface>(
      this.rutaRestTalleres, taller, this.httpOptions
    );
  }

  public putTaller(id: number, taller: TallerInterface): Observable<TallerInterface> {
    return this.http.put<TallerInterface>(
      this.rutaRestTalleres + id, taller, this.httpOptions
    );
  }

  public deleteTaller(id: number): Observable<TallerInterface> {
    return this.http.delete<TallerInterface>(this.rutaRestTalleres + id);
  }

  public getMatriculas(id: number): Observable<MatriculaInterface> {
    return this.http.get<MatriculaInterface>(this.rutaRestMatriculasGet + id);
  }

  public deleteMatricula(id: number): Observable<MatriculaInterface> {
    return this.http.delete<MatriculaInterface>(this.rutaRestMatriculas + id);
  }
}
