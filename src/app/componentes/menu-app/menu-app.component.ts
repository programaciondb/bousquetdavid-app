import { Component, OnInit } from '@angular/core';
import { TallerInterface } from 'src/app/modelos/taller';
import { ApiserviciosService } from 'src/app/servicios/apiservicios.service';


@Component({
  selector: 'app-menu-app',
  templateUrl: './menu-app.component.html',
  styleUrls: ['./menu-app.component.css']
})
export class MenuAppComponent implements OnInit {

  constructor(private apiServicios: ApiserviciosService) { }

  ngOnInit() {
  }

}
