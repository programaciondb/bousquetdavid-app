import { Component, OnInit } from '@angular/core';
import { ApiserviciosService } from 'src/app/servicios/apiservicios.service';
import { TallerInterface } from 'src/app/modelos/taller';
import { MatriculaInterface } from 'src/app/modelos/matricula';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {
  public talleres: TallerInterface;
  public matriculas;
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
        this.matriculas = tallerObtenido;
      });
  }

}
