import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TallerInterface } from 'src/app/modelos/taller';

@Injectable({
  providedIn: 'root'
})
export class ApiserviciosService {

  private rutaRestTalleres = "http://localhost:8089/talleres/";
  httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

  constructor(private http: HttpClient) { }

  public getTalleres() {
    return this.http.get(this.rutaRestTalleres);
  }
}
