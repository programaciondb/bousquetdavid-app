import { Component, OnInit } from '@angular/core';
import { TallerInterface } from 'src/app/modelos/taller';
import { ApiserviciosService } from 'src/app/servicios/apiservicios.service';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {

  public talleres: TallerInterface;
  constructor(private apiServicios: ApiserviciosService) { }

  ngOnInit() {
    this.getTalleres();
  }

  public getTalleres() {
    this.apiServicios.getTalleres()
    .subscribe((talleres: TallerInterface) => (this.talleres = talleres));
  }

}
