import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CitaComponent } from './cita/cita.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from './share/services/servicios.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { VideoHomePipe } from './pipes/video-home.pipe';
import { LoadingModule } from './share/component/loading/loading.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './share/interceptors/loading.interceptor';
import { ConsejosPipe } from './pipes/consejos.pipe';
import { ConsejosComponent } from './consejos/consejos.component';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    AyudaComponent,
    NavbarComponent,
    CitaComponent,
    ConsultaComponent,
    EvaluacionComponent,
    LoginComponent,
    RegistroComponent,
    VideoHomePipe,
    ConsejosPipe,
    ConsejosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    LoadingModule,
    provideFirestore(() => getFirestore()),
    NgxQRCodeModule
  ],
  providers: [
    ServiciosService,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
