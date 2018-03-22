import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {Response} from '@angular/http';

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  title = 'web';
  data:any=[]; 

  constructor(private dataService:DataService){}

  ngOnInit(){
  


    
    // var invocation = new XMLHttpRequest();
    // var url = 'http://localhost:48116/RecuruitmentService.asmx/';
        
    // function callOtherDomain(){
    //   if(invocation) {
    //     invocation.open('GET', url, true);
    //     invocation.withCredentials = true;
    //   //invocation.onreadystatechange = handler;
    //     invocation.send(); 
    //   }
    // } 

  this.dataService.getData().subscribe(
    (data:Response) =>console.log(data),
    error => console.error(error),
    
    //completed => console.log("Operation completed")
  );

  this.dataService.getData().subscribe(data => {
    console.log(data);
    this.data=data;
    console.log("The dataValue is"+this.data);
 
})

//console.log("The dataValue is"+this.data);
  

}
}
