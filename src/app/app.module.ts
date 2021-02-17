import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TemplateModule} from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientesModule } from './clientes/clientes.module';
import {ClientesService} from './clientes.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule} from '@angular/forms'

import { ServicoPrestadoModule} from './servico-prestado/servico-prestado.module'
import { ServicoPrestadoService} from './servico-prestado.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';
/**Sempre declarar o novo component aqui por exemplo clientesmodule para que a aplicação possa entender
 * e funcionar
*/
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
