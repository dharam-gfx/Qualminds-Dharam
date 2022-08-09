import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-tut1',
  templateUrl: './sample-tut1.component.html',
  styleUrls: ['./sample-tut1.component.css']
})
export class SampleTut1Component implements OnInit {

  title="interpolation, one way binding two way binding , event binding ";

  disabledValue=true;
  Name:string="";


  //tut 9

  bgColor='red';
  textColor='white';
  flag=true;


  designClass='box1 fontSize';
 

  constructor() { }
  ngOnInit(): void {
  }

  enableButton(){
    this.disabledValue= !this.disabledValue;
  }

  getvalue(value:string){
    this.Name=value;
  }

  //tut 9
  changeColor(){

    this.flag=!this.flag;
   if(this.flag){
    this.bgColor='green';
    this.textColor='yellow';    
   }
   else{
    this.bgColor='red';
    this.textColor='white';
   }

  }

  changeClass(){
    this.flag=!this.flag;
   if(this.flag){
    this.designClass="box2 ";    
   }
   else{
    this.designClass="box1 fontSize";    
   
   }
  }

}
