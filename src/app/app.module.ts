import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BolachaComponent } from './bolacha/bolacha.component';
import { CategoriabolachaComponent } from './categoriabolacha/categoriabolacha.component';

@NgModule({
  declarations: [
    AppComponent,
    BolachaComponent,
    CategoriabolachaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
