import { Component, Input } from '@angular/core';
import {IUser} from '../user';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input()
  user?: IUser;
// user: IUser ={
//   id: 1111,
//   name: "Sergii",
//   email: "test@ukr.net",
//   role: "Admin"
// }
}
