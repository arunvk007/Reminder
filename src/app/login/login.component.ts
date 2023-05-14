import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder , Validators } from '@angular/forms';
import {DataService} from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hint:string="Enter your credentials"



  constructor(private r:Router, private fb:FormBuilder,private ds:DataService){}

  logform=this.fb.group({
    uname:'',
    pswd:''
    // uname:['',[Validators.required]],
    // pswd:['',[Validators.required]]
  })

  // ,Validators.pattern("[0-9a-z]{4,15}")
  // ,Validators.pattern("[0-9a-zA-Z@#$!%&]{4,15}")

  btnclick(){
    
    let uname:any=this.logform.value.uname
    let pswd:any=this.logform.value.pswd
    let res=this.ds.login(uname,pswd)
    console.log(uname,pswd)
    console.log(res +"from login-client")
    res.subscribe((res:any)=>{
      if(res){
        console.log(res)
       localStorage.setItem("currentUser",res.currentUser)
        localStorage.setItem("currentUname",res.currentUname)
        localStorage.setItem("token",res.token)
        this.r.navigateByUrl("dashb")
        alert(res.message) 
      }
    },
    (err)=>{
      alert(err.error.message)
    })

}
}
