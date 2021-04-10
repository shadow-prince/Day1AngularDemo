import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
  
  fName:string="";
  lName:string="kishore";
  gender:string="Male";
  age:string="5";

 

  showStatus:boolean=false;
  btnText:string="Click Here";
  btnStyle:string="btn btn-outline-primary";
  cardTitle:string="Employee";
  cardDisp:string="";
  

 
  empid!:number;
  empName:string="";
  empAge!:number;
  flag!:boolean;
  success!:boolean;

 


  employees=[
    {"empid":1001,"name":"Kishore","age":25},
    {"empid":1002,"name":"Sai Kishore","age":3},
    {"empid":1003,"name":"Reddy Sai Kishore","age":15},
    {"empid":1004,"name":"Pusapati Reddy Sai Kishore","age":10}
  ];
addEmployee():void{
  for(let e of this.employees){
    if(e.empid==this.empid){
      this.flag=true;
      break;
    }
    else{
      this.flag=false;
    }
  }
  if(!this.flag){
    this.employees.push(
      {
        "empid": this.empid,
        "name":this.empName,
        "age":this.empAge,
      }
      );
      this.success=true;
  }


 
}


  onClick(){
    this.btnStyle="btn btn-outline-danger";
    this.btnText="Clicked";
    this.cardDisp=`An employer is a person or institution that hires employees. Employers offer wages or a salary to the workers in exchange for the worker's work or labor. One speaks of wages if the employee is paid by the hour and of salary if he is paid a set rate per pay period.`;
  }
  clickMe(){
    this.showStatus=!this.showStatus;
  }

}
