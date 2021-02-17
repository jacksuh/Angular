import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiURLBase + "/api/servicos-prestados"

  constructor(private http: HttpClient) { }

  salvar(ServicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers ={
      'Authorization' : 'Bearer' + token.access_token
    }
    return this.http.post<ServicoPrestado>(this.apiURL, ServicoPrestado, {headers});
  }

  busca(nome: string, mes: number) : Observable<ServicoPrestadoBusca[]>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers ={
      'Authorization' : 'Bearer' + token.access_token
    }
    const httpParams = new HttpParams()
    .set("nome", nome)
    .set("mes", mes ? mes.toString() : '');
    const url = this.apiURL + "?" + httpParams.toString();
    // /api/servicos-pretados?nome
    console.log(url);
    return this.http.get<any>(url, {headers});
  }
}