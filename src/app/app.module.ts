import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Modulos
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Services
import { HttpClientModule } from '@angular/common/http';

//Environment
import { environment } from '../environments/environment';

//NgRx
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/efects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    UsuariosModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(effectsArr)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
