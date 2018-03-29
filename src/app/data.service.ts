import { Injectable, OnInit } from '@angular/core';
import { Http,Headers,URLSearchParams, RequestOptions} from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import  'rxjs/add/operator/map';




@Injectable()
export class DataService  {
  body='';
  private serviceUrl=''
  
  constructor(private http:Http,private httpClient: HttpClient) { }

  getData(){
  
    // return this.http.get(this.serviceUrl).map((response:Response) => response.json());
    
  
   
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
      // return this.http.get('http://localhost:48116/RecuruitmentService.asmx/getRole2');
    return this.http.get('http://localhost:48116/RecuruitmentService.asmx/getRole2')
      .map((res:Response) => res.json());
  }

  // insertappFormData(user:any){
  //     const body=JSON.stringify(user);  
  //     const headers= new Headers();
  //     headers.append('Content-Type','application/json');
  //     return this.http.post('http://localhost:48116/RecuruitmentService.asmx/addRole',body,{
  
  //     }).map((data:Response)=>data.json());
    
  // }

    insertappFormData(){
      // passing parameter as String "3"=> int 
      const body=JSON.stringify(3);  
      console.log("body is"+body);
      // Assiging value to parameter 
      let paramData={i:3}
     
      //Defining the URL parameters 
      let myParams = new URLSearchParams();
      myParams.append('i',body);
  
      // if it necessary pass the headers
      const myheaders= new Headers();
      myheaders.append('Accept', 'text/plain');  
      myheaders.append('Content-Type','application/json');
      
      // if it necessary pass the headers and params as option
      let options = new RequestOptions({ headers: myheaders, params: myParams});
      
      /**
       * Passing as Post Request -- Failure 28-3-2018 
       */

       //type-1
      // return this.http.post('http://localhost:48116/RecuruitmentService.asmx/addRoleTest',3,{headers:myheaders
      // }).map((data:Response)=>data.json());

      //type-2
       // return this.http.post('http://localhost:48116/RecuruitmentService.asmx/addRoleTest',body,{headers:myheaders}).map(this.extractData);

      //type-3
      // return this.http.get('http://localhost:48116/RecuruitmentService.asmx/addRoleTest',options).map(this.extractData);


     //correcting working code passing parameters - get request
    //  return this.http.get('http://localhost:48116/RecuruitmentService.asmx/addRoleTest',{params: {i:"sss"}}).map(this.extractData);
      
    //correcting working code passing parameters - get request-2
     return this.http.get('http://localhost:48116/RecuruitmentService.asmx/addRoleTest',{params: paramData}).map(this.extractData);
      
    /**
     * Manualy added param value (int)
     */
    //return this.http.get('http://localhost:48116/RecuruitmentService.asmx/addRoleTest?i=4');    
    //return this.http.get('http://localhost:48116/RecuruitmentService.asmx/addRoleTest?i=3');

    // getting response  
    // correct code
    // get json response
    // return this.http.get('http://localhost:48116/RecuruitmentService.asmx/addRoleTest?i=3')
    //                   .map(this.extractData);
                      
    // return this.http.get('http://localhost:48116/RecuruitmentService.asmx/addRoleTest?i=3').map((data:Response)=>this.body=data.text() ); 
    // this.http.get('http://localhost:48116/RecuruitmentService.asmx/addRoleTest?i=3')
    // .subscribe((response) => this.body =  response.json());
    // console.log(this.body.toString());
  }

  private extractData(res: Response) {    
     return res.text() ? res.json() : {}; 
 }

}

 /**
 * Web method - BackEnd 
 */


/** 
 * 
 [WebMethod]
 [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
 public void addRoleTest(int  i)
 {
   if (i==3)
    {
        int k = 2;
        JavaScriptSerializer js = new JavaScriptSerializer();
        Context.Response.Clear();
        Context.Response.ContentType = "application/json";
     
     
        Context.Response.Write(js.Serialize(k));
        Debug.WriteLine("Post method Success");
       
    }

    else
    {
        Debug.WriteLine("Post mehod Failure");
    }

 * 
*/

//----------------WebConfigFile---------------------------------

/**
 * 
  <system.web>
<compilation debug="true" targetFramework="4.5.2" />
<httpRuntime targetFramework="4.5.2" />
<webServices>
  <protocols>
    <add name="HttpGet"/>
    <add name="HttpPost"/>
  </protocols>
</webServices>
</system.web>
 
//--------------------------------------------------------------------

    <httpProtocol>
      <customHeaders>
        <add name="Access-Control-Allow-Headers"  value="Origin, X-Requested-With, Content-Type, Accept,application/x-www-form-urlencoded" />
        <add name="Access-Control-Allow-Origin" value="http://localhost:4200"/>
        <add name="Access-Control-Allow-Methods" value="POST, GET, OPTIONS,PUT,DELETE" />
        <add name="Access-Control-Allow-Credentials" value="true" />
      </customHeaders>
    </httpProtocol>
 */


