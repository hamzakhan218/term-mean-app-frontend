import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent implements OnInit {
  signin: boolean;
  signUp: boolean;

  constructor() {
    this.signUp=true;
    this.signin=true;
   }

  ngOnInit(): void {
  }
  onClickSignin(){
    this.signin=true;
    this.signUp=false;
  
  }
  onClickSignup(){
    this.signin=false;
    this.signUp=true;
      
  }
}
