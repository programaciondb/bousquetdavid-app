import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatriculasComponent } from 'src/app/componentes/matriculas/matriculas.component';
import { TalleresComponent } from 'src/app/componentes/talleres/talleres.component';


const routes: Routes = [
  {path: "", redirectTo: "talleres", pathMatch: "full"},
  {path: "talleres", component: TalleresComponent},
  {path: "matriculas", component: MatriculasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
