import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import  'rxjs/add/operator/map';




@Injectable()
export class DataService  {

  private serviceUrl=''
  
  constructor(private http:Http) { }

  getData(){

    // return this.http.get(this.serviceUrl).map((response:Response) => response.json());
    
  
   
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
      // return this.http.get('http://localhost:48116/RecuruitmentService.asmx/getRole2');
    return this.http.get('http://localhost:48116/RecuruitmentService.asmx/getRole2')
      .map((res:Response) => res.json());
  }

}
