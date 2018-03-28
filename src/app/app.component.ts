import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {Response} from '@angular/http';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  id: '';
  name:'';
  title = 'web';
  data:any=[]; 
  sup:Subscription;
  body='';
  myvar:any;
  

  appForm:FormGroup;

  constructor(private dataService:DataService, private appfb:FormBuilder){

    this.appForm=this.appfb.group({

        'id':[''],
        'name':['']

    });

  }

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

onSubmit()
{
 
   console.log(this.appForm);
   this.id=this.appForm.controls['id'].value;
   this.name=this.appForm.controls['name'].value;

   console.log("Id value is"+"  "+this.id+"\n"+"Name value is"+"  "+this.name);

   console.log("Form Value is "+this.appForm.value);

   

  //  this.dataService.insertappFormData(this.appForm.value).subscribe(
  //    data => console.log(data)
  //  );

 
  // this.dataService.insertappFormData().subscribe( data => console.log(data.text()));



//  this.dataService.insertappFormData().subscribe(response => this.cc =  response);

this.dataService.insertappFormData().subscribe(response => this.myvar =  response);

// getting value from asynchrnous call "myvar"
this.dataService.insertappFormData()
  .subscribe(response => { 
    this.myvar =  response;
    console.log(this.myvar);
});





// this.dataService.insertappFormData().subscribe(data => console.log(data));
   console.log(this.myvar);
    
  

   //this.dataService.insertappFormData({id,name});
}
}
