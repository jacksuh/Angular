import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'


/**Classe serve para conexão com a API java. HttpClient é utilizado para enviar informações via 
 * navegador. this.apiURL foi declarado no arquivo environment.ts, importando o environment
 */
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor( private http: HttpClient) {}

   salvar(cliente : Cliente) :  Observable<Cliente>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers ={
      'Authorization' : 'Bearer' + token.access_token
    }
      return this.http.post<Cliente>(`${this.apiURL}`,cliente, {headers});
   }

   atualizar(cliente : Cliente) :  Observable<any>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers ={
      'Authorization' : 'Bearer' + token.access_token
    }
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`,cliente, {headers});
 }

  /**Solicitar e consultar a lista de clientes na api JAVA */
   getClientes(): Observable<Cliente[]>{
     const tokenString = localStorage.getItem('access_token')
     const token = JSON.parse(tokenString)
     const headers ={
       'Authorization' : 'Bearer' + token.access_token
     }
    return this.http.get<Cliente[]>(this.apiURL, { headers });
   }
   
   getClienteById(id: number) :Observable<Cliente>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers ={
      'Authorization' : 'Bearer' + token.access_token
    }
    return this.http.get<any>(`${this.apiURL}/${id}`, {headers});
   }

   deletar(cliente : Cliente) :  Observable<any>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers ={
      'Authorization' : 'Bearer' + token.access_token
    }
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`, {headers});
 }

  }
