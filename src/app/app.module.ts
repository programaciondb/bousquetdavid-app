import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatriculasComponent } from './componentes/matriculas/matriculas.component';
import { TalleresComponent } from './componentes/talleres/talleres.component';
import { MenuAppComponent } from './componentes/menu-app/menu-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MatriculasComponent,
    TalleresComponent,
    MenuAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
