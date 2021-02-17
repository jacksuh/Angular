import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientesFormComponent} from './clientes-form/clientes-form.component'
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import {AuthGuard} from '../auth.guard'
import { AuthService } from '../auth.service';

/**No app routing module configuramos a rota padrao por aqui vamos configurar o link 
 * ou seja o botao onde vai criar e direcionar para a pagina clientes.
 */
const routes: Routes = [
  {path: 'clientes', component: LayoutComponent, canActivate: [AuthGuard], children: [
    {path: 'form', component: ClientesFormComponent },
    {path: 'form/:id', component: ClientesFormComponent },
    {path: 'lista', component: ClientesListaComponent },
    {path: '', redirectTo: '/clientes/lista', pathMatch: 'full' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
