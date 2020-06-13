import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[] = [];
  @Output()
  userCount: EventEmitter<any> = new EventEmitter();
  constructor(private userService: UsersService) { }

  ngOnInit() {
     this.userService.getAll().subscribe(
       users=> {
        this.users = users;
        this.userCount.emit(users.length);
        /* $('#usersTable').DataTable({
          data: users,
          columns: [
              { title: "firstName" },
              { title: "lastName" },
              { title: "email" }
          ]
      } );
  }); */
       },
       error=> {
         console.log(error);
       }
     );
  }

}
