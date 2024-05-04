import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj : any ={
    userName :"",
    password :""
  }
  constructor(private router : Router){

  }
  onLogin():void{
    if(this.loginObj.userName == "admin" && this.loginObj.password == "334455"){
      this.router.navigate(["/products"])
    }else{
      alert("Wrong Credentials")
    }
  }
}
