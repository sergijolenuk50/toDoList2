import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IList } from '../list';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  @Input()
  list?: IList;
 @Output()
 onDelete = new EventEmitter<number>();
 remove(){
this.onDelete.emit(this.list?.id);
  }
}
