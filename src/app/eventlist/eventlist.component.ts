import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent {

  remainders:any

  constructor(private ds:DataService){
    ds.getRemainders().subscribe((res:any)=>{
      console.log(res.data[0] +"from rem---client")
      this.remainders=res.data
    })
  }
  deleteButton(event:any){
    if(confirm("Are you sure to delete this event")){
      let remIndex=event.target.id
      let result=this.ds.deleteRemainder(remIndex)
      result.subscribe((res:any)=>{
        console.log(res)
      })

      }
    }
  }

