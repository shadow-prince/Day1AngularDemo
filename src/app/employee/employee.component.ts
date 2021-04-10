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
  cardTitle:string="Jaathiratnalu";
  cardDisp:string="";
  

 
  jid!:number;
  jName:string="";
  jAge!:number;
  flag!:boolean;
  success!:boolean;

 


  jaathiratnaalu=[
    {"jid":210,"jName":"Nikhila","jAge":21},
    {"jid":420,"jName":"Praharshini","jAge":3},
    {"jid":840,"jName":"Kishore","jAge":15}
  ];
addJaathiratnam():void{
  for(let e of this.jaathiratnaalu){
    if(e.jid==this.jid){
      this.flag=true;
      break;
    }
    else{
      this.flag=false;
    }
  }
  if(!this.flag){
    this.jaathiratnaalu.push(
      {
        "jid": this.jid,
        "jName":this.jName,
        "jAge":this.jAge,
      }
      );
      this.success=true;
  }


 
}


  onClick(){
    this.btnStyle="btn btn-outline-danger";
    this.btnText="Clicked";
    this.cardDisp=`Jathi Rathnalu is a mixed bag, but then again, life ​zindagi aipoindi, ​so go watch it for the comedy and the performances.`;
  }
  clickMe(){
    this.showStatus=!this.showStatus;
  }
  

}
