import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   x:any=null;
   NUM:number=0;
  showInput(num:number){
    this.NUM=num;
    this.x=20;
  }

  name:string="";
  GetName(val:string){
    this.name=val;
    console.log(val);
    
  }

  fullname:string=""
  fullName(val1:string,val2:string){
    this.fullname=val1+" "+(val2);
  }
}
