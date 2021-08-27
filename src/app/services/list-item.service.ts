import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { List } from '../interfaces/list';




@Injectable({
  providedIn: 'root',
})
export class ListItemService {

  private subject = new Subject<List[]>();
 


  itemList: List[] = [];
  



  addItem(item: List) {
    this.itemList.push(item);
    this.subject.next(this.itemList);
  }

  getItems(): Observable<List[]> {
    return this.subject.asObservable();
  }
  
  removedItem(id:number){
     this.itemList = this.itemList.filter((res,index)=> index!==id)
     this.subject.next(this.itemList);
  }
   
 

}
