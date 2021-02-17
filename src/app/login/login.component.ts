import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: String[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { 
   
  }

  onSubmit(){
    this.authService
    .tentarLogar(this.username, this.password)
    .subscribe(response =>{
      const access_token = JSON.stringify(response);
      localStorage.setItem('access_token', access_token)
      this.router.navigate(['/home'])
      }, errorResponse =>{
        this.errors  = ['Usuario e/ou senha incorretos(s)']
      })
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
    .salvar(usuario)
    .subscribe(response => {
        this.mensagemSucesso = "Cadastro realizado com sucesso efetue o login";
        this.cadastrando = false;
        this.username= '';
        this.password = '';
        this.errors = [];
        this.errors = null;
     }, errorResponse =>{;
        this.mensagemSucesso = null;
        this.errors = errorResponse.error.errors;
     })
  }

}
