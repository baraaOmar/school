import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { decrement, increment, reset } from './state/counter.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count:number=0;
  count$: Observable<number>
    constructor(private store:Store<{counter:number}>) { }

  
  ngOnInit(): void {
    this.count$ = this.store.select('counter');
  }
onIncrement(){
  this.store.dispatch(increment());
}
onDecrement(){
  this.store.dispatch(decrement());
}
onReset(){
  this.store.dispatch(reset());
}
}
