import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TallerInterface, TallerClase } from 'src/app/modelos/taller';
import { ApiserviciosService } from 'src/app/servicios/apiservicios.service';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {

  public talleres: TallerInterface;
  public mensaje: string = "Crear";
  nuevoTaller = new TallerClase();
  constructor(private apiServicios: ApiserviciosService, private router: Router) { }

  ngOnInit() {
    this.getTalleres();
    this.getTallerVacio(0);
  }

  public getTalleres() {
    this.apiServicios.getTalleres()
      .subscribe((talleres: TallerInterface) => (this.talleres = talleres));
  }

  public getTallerVacio(id: number) {
    var tallerObservable = this.apiServicios.getTaller(id);
    tallerObservable.subscribe(
      tallerObtenido => this.nuevoTaller = tallerObtenido
    );
  }
  public getTaller(id: number) {
    var tallerObservable = this.apiServicios.getTaller(id);
    tallerObservable.subscribe(
      tallerObtenido => {
        this.mensaje = "Editar/Borrar";
        this.nuevoTaller = tallerObtenido;
      });
  }

  public postTaller() {
    var tallerObservable = this.apiServicios.postTaller(this.nuevoTaller);
    tallerObservable.subscribe(
      tallerObtenido => {
        this.nuevoTaller = tallerObtenido;
        this.getTalleres();
        this.getTallerVacio(0);
      });
  }

  public putTaller(id: number) {
    var tallerObservable = this.apiServicios.putTaller(id, this.nuevoTaller);
    tallerObservable.subscribe(
      tallerObtenido => {
        this.nuevoTaller = tallerObtenido;
        this.getTalleres();
        this.getTallerVacio(0);
      }
    );
  }

}
