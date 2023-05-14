import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

const options={
  headers:new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUname:any=''
  currentUser:any=''



  constructor(private hc:HttpClient) { }

  

  login(uname:any,pswd:any){
    let data={
      uname,
      pswd
    }
    return this.hc.post("http://localhost:3000/log",data)
  }

  register(name:any,uname:any,pswd:any){
    let data={
      name,
      uname,
      pswd
    }
    return this.hc.post("http://localhost:3000/reg",data)
  }

  getOptions(){
    // const token=JSON.parse(localStorage.getItem("token")||'')
    const token = localStorage.getItem('token')
    console.log(token,+"from cliet-service")
    let header=new HttpHeaders()
    if(token){
      header=header.append("x-access-token",token)
      options.headers=header
    }
    console.log(options)
    return options
  }

  addRemainder(remevent:any,remdate:any){
    let data={
      remevent,
      remdate
    }
    return this.hc.post ("http://localhost:3000/addrem",data,this.getOptions())
  }

  getRemainders(){
    let data={
      uname:localStorage.getItem('currentUname')
    }
    return this.hc.post ("http://localhost:3000/getrem",data,this.getOptions())
  }

  deleteRemainder(index:any){
    let data={
      uname:localStorage.getItem('currentUname')
    }
    return this.hc.post ("http://localhost:3000/delrem",data,this.getOptions())
  }
}
