import { Component, OnInit } from '@angular/core';
import {  animate, state, style, transition, trigger } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { ListItemService } from '../services/list-item.service';
import { List } from '../interfaces/list';


@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('more', [
      state(
        'open',
        style({
          color: 'red',
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'close',
        style({
          color: '#003',
          height: '*',
          opacity: 1,
        })
      ),
      transition('open<=>close', animate('.3s')),
    ]),
  ],
})
export class AnimationsComponent implements OnInit {
  constructor(private service: ListItemService) {}

  ngOnInit(): void {
   
  }

  flag = false;

  toggle() {
    this.flag = !this.flag;
  }

  inputBox(myInputData: NgForm) {
    let val = myInputData.value.name;
    let len =
      this.service.itemList.length === 0 ? 0 : this.service.itemList.length + 1;

    let obj: List = {
      id: len,
      name: val,
    };

    this.service.addItem(obj);
    myInputData.reset()
    myInputData.value.name="";
  }

  

 
}
