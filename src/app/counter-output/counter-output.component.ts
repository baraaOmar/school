import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
counter:number=0;
counterSubscription:Subscription;
counter$:Observable<number>;
  constructor(private store:Store<{counter:{counter:number}}>) { }

  ngOnInit(): void {
   this.counterSubscription= this.store.select('counter').subscribe((data)=>{
      this.counter=data.counter;
    })
  }
ngOnDestroy()
{
  if(this.counterSubscription){
    this.counterSubscription.unsubscribe;
  }
}}
