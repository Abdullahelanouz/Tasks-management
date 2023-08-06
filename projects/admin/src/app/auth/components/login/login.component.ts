import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from '../../context/DTOs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:LoginService) { }
  loginFrom!:FormGroup

  ngOnInit(): void {
    this.CreateForm()
  }
CreateForm(){
this.loginFrom=this.fb.group({
  email:["",[Validators.required,Validators.email]],
  password:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  role:['admin']
})
}
login() {
  this.service.login(this.loginFrom.value).subscribe(res=>{

  },error =>{
    
  })
    console.log(this.loginFrom.value);
}
}
