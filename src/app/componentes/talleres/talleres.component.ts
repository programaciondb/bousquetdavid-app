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
  public borrar: boolean = false;
  nuevoTaller = new TallerClase();
  constructor(private apiServicios: ApiserviciosService, private router: Router) { }

  ngOnInit() {
    this.getTalleres();
  }

  public getTalleres() {
    this.apiServicios.getTalleres()
      .subscribe((talleres: TallerInterface) => (this.talleres = talleres));
  }

  public getTallerVacio(id: number) {
    var tallerObservable = this.apiServicios.getTaller(id);
    tallerObservable.subscribe(
      tallerObtenido => {
        this.nuevoTaller = tallerObtenido;
        window.location.reload();
      });
  }
  public getTaller(id: number) {
    var tallerObservable = this.apiServicios.getTaller(id);
    tallerObservable.subscribe(
      tallerObtenido => {
        this.mensaje = "Editar";
        this.borrar = false;
        this.nuevoTaller = tallerObtenido;
      });
  }

  public getTallerBorrar(id: number) {
    var tallerObservable = this.apiServicios.getTaller(id);
    tallerObservable.subscribe(
      tallerObtenido => {
        this.mensaje = "Borrar";
        this.borrar = true;
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

  public deleteTaller(id: number) {
    var estado = this.apiServicios.deleteTaller(id);
    estado.subscribe(
      estado => {
        this.getTalleres();
      });

  }

}
