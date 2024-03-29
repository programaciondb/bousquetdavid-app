import { Component, OnInit } from '@angular/core';
import { ApiserviciosService } from 'src/app/servicios/apiservicios.service';
import { TallerInterface } from 'src/app/modelos/taller';
import { MatriculaInterface, MatriculaClase } from 'src/app/modelos/matricula';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {
  public talleres: TallerInterface;
  public matriculas;
  public nuevaMatricula: MatriculaClase;
  public matricularNuevo: boolean = false;
  constructor(private apiServicios: ApiserviciosService) { }

  ngOnInit() {
    this.getTalleres();
  }

  public getTalleres() {
    this.apiServicios.getTalleres()
      .subscribe((talleres: TallerInterface) => (this.talleres = talleres));
  }

  public getMatriculas(id: number) {
    var matriculaObservable = this.apiServicios.getMatriculas(id);
    matriculaObservable.subscribe(
      tallerObtenido => {
        this.matricularNuevo = false;
        this.matriculas = tallerObtenido;
      });
  }

  public deleteMatricula(id: number) {
    var confirmarDelete = confirm("¿Está seguro que desea eliminar al alumno del taller?");
    if (confirmarDelete) {
      var estado = this.apiServicios.deleteMatricula(id);
      estado.subscribe(
        estado => {
          window.location.reload();
        });
    }
  }
  public habilitarMatriculaNueva(ta: number){
    if(this.matricularNuevo){
      this.matricularNuevo = false;
    } else {
      this.matricularNuevo = true;
      var matriculaObservable= this.apiServicios.getMatricula(0);
      matriculaObservable.subscribe(
        matriculaObtenida => {
          matriculaObtenida.numtaller = ta;
          this.nuevaMatricula = matriculaObtenida;
        }
      )
    }
  }

  public postMatricula() {
    var matriculaObservable = this.apiServicios.postMatricula(this.nuevaMatricula);
    matriculaObservable.subscribe(
      matriculaObtenida => {
        this.nuevaMatricula = matriculaObtenida;
        window.location.reload();
      });
  }

}
