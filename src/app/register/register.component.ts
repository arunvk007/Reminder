import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  hint: string = "Enter your credentials"

  constructor(private r: Router, private fb: FormBuilder, private ds: DataService) {

  }
  regform = this.fb.group({
    name: '',
    uname: '',
    pswd: ''
    // name:['',Validators.required],
    // uname:['',Validators.required],
    // pswd:['',Validators.required]
  })

  // ,Validators.pattern("[A-Za-z]{3,}")
  // ,Validators.pattern("[A-Za-z0-9]{6,15}")
  // ,Validators.pattern("[A-Za-z0-9!@#$%&]{5,15}")

  clicked() {
    console.log("clciked works")
    let name = this.regform.value.name
    let uname = this.regform.value.uname
    let pswd = this.regform.value.pswd
    console.log(name, uname, pswd + "from clicked register.ts")
    if (this.regform.valid) {
      let res = this.ds.register(name, uname, pswd)
      res.subscribe((res: any) => {
        alert(res.message)
        this.r.navigateByUrl("")
      },(err)=>{
        alert(err.error.message)
      })
    }

    // else{

    //   alert("Invalid data!...")
    // }
  }

}

