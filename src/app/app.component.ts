import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { IUser, USERS } from './user';
import { IList, LISTS } from './list';
import { TodolistComponent } from "./todolist/todolist.component";
import { ListFormComponent } from "./list-form/list-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, TodolistComponent, ListFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progect2';
// users: IUser[] = USERS;
lists: IList[] = LISTS;
  name ='Olenuk Sergii';
  chengeName (){
    this.name +='!';
  }
  clearAll(){
    this.lists = [];
  }
  deleteItem(id: number){
    let index = this.lists.findIndex(x=>x.id === id);
    if(index !== -1)
      this.lists.splice(index, 1);
  }
}
