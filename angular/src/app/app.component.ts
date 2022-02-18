import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from './shared/model/User';
import {UserService} from './shared/service/user.service';


@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.css']
           })
export class AppComponent implements OnInit {
  title = 'mathaliapp';
  users: User[];
  public editUser = new User();
  public deleteUser = new User();

  /**
   * Le constructeur
   * @param userService
   */
  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();

  }


  public getUsers() {
    this.userService.getAllUsers()
      .subscribe(users => {
        this.users = users;
        console.log(this.users);
      })

  }

  public searchUsers(key: string): void {
    console.log(key);
    const results: User[] = [];
    for (const user of this.users) {
      if (user.firstname.toLowerCase()
          .indexOf(key.toLowerCase()) !== -1
        || user.lastname.toLowerCase()
          .indexOf(key.toLowerCase()) !== -1
        || user.email.toLowerCase()
          .indexOf(key.toLowerCase()) !== -1
        || user.phone.toLowerCase()
          .indexOf(key.toLowerCase()) !== -1) {
        results.push(user);
      }
    }
    this.users = results;
    if (results.length === 0 || !key) {
      this.getUsers();
    }
  }


}
