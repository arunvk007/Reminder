import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor (private fb:FormBuilder,private ds:DataService,private r:Router){}

  dashform=this.fb.group({
    remevent:'',
    remdate:''
    
  })

  eventClick(){
    let remevent=this.dashform.value.remevent
    let remdate=this.dashform.value.remdate
    let res=this.ds.addRemainder(remevent,remdate)
    console.log(remevent,remdate)
    console.log(res)
    if(res){
      res.subscribe((res:any)=>{
        alert(res.message)
        
      },
      (err)=>{
        alert(err.error.message)
    })}
    

    }




    
  }

