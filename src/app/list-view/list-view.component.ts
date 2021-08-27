import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { List } from '../interfaces/list';
import { ListItemService } from '../services/list-item.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  animations: [
    trigger('fadelist', [
      state(
        'void',
        style({
          backgroundColor: 'yellowgreen',
          opacity: 0,
          transform: 'translateX(-50%)',
        })
      ),
      transition('void=>*', animate('.43s ease-in')),
      transition(
        '*=>void',
        animate(
          '.43s ease-in',
          style({
            backgroundColor: 'rgba(200,10,10,0.2)',
            transform: 'translateX(-50%)',
          })
        )
      ),
    ]),
  ],
})
export class ListViewComponent implements OnInit {
  constructor(private service: ListItemService) {}

  lists: List[] = [];
  fadeMode = 'close';

  ngOnInit(): void {
    this.service.getItems().subscribe((res) => {
      this.lists = res;
    });
  }

  removeItem(id: number) {
    this.service.removedItem(id);
  }
}
