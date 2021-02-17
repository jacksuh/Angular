import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import {AuthGuard} from './auth.guard'

/**configuração de rota de tela quando cricar no login por exemplo é enviado para a o caminho
 * /login por exemplo ta importando a login pai e as filhas children home importação acima.
 * no app.component.html fica apontado o caminho da rota.
 * exemplo <router-outlet></router-outlet>
*/
const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: '', component: LayoutComponent, children: [
    {path :'home', component : HomeComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
