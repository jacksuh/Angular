import { Component, OnInit } from '@angular/core';

import { Cliente} from '../cliente';
import { ClientesService } from '../../clientes.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  /**Importar a classe cliente e estanciar ela aqui
   * Configurar a tela cliente-form-component.html
   */
  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(private service: ClientesService,
    private router:Router,
    private activatedRoute : ActivatedRoute) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params : Observable<Params>= this.activatedRoute.params
    params.subscribe(urlParams =>{
      this.id = urlParams['id'];
      if(this.id){
      this.service
      .getClienteById(this.id)
      .subscribe(response => this.cliente = response,
        errorResponse => this.cliente = new Cliente()
        )
      }
    })
  }

  /**Router é declarado para navegação entre as telas atraves do botão. */
  voltarParaListage(){
    this.router.navigate(['clientes/lista'])
  }

  /**aqui ele recebe a resposta que é solicitado pela classe cliente.service.ts */
  onSubmit(){
    if(this.id){

      this.service
      .atualizar(this.cliente)
      .subscribe(response =>{
        this.success = true;
        this.errors = null;
      }, errorResponse =>{
        this.errors = ['Erro ao Atualizar o Cliente.']
      })

    }else{
    
    this.service.salvar(this.cliente)
    .subscribe( response => {
      this.success = true;
      this.errors = null;
      this.cliente = response;
    }, errorResponse =>{
      this.errors = errorResponse.error.errors;
    })
  }
    
}
}
