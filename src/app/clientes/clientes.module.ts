import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'


import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { from } from 'rxjs';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

/**importar o clienteformcomponent no exports para que ele apareça para os outros modulos 
 * importar o clienteroutingmodulo no imports para reconhecer a rota assim vai abrir o cliente
 * formscomponent.html onde voce ira configurar o formulario
*/
@NgModule({
  declarations: [ClientesFormComponent, ClientesListaComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ], exports:[
    ClientesFormComponent,
    ClientesListaComponent
  ]
})
export class ClientesModule { }
