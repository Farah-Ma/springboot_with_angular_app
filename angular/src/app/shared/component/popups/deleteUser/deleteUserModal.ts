import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../model/User';
import {UserService} from '../../../service/user.service';
import {NotificationService} from '../../../service/notification.service';


@Component({
             selector: 'delete-user-modal',
             templateUrl: './deleteUserModal.html'
           })
export class DeleteUserModal implements OnInit {
  @Input() user = new User();
  @Input()  users: User[];
  closeResult = '';
  title = 'users_manager';

  public editUser = new User();
  public deleteUser = new User();

  constructor(private modalService: NgbModal,
              private userService: UserService,
              private notificationService: NotificationService
  ) {
    this.users = [];
  }

  ngOnInit(): void {
    this.getUsers();
  }

  open(content: any, user: User) {
    this.deleteUser = user;
    this.modalService.open(content);
  }

  public onDeleteUser(userIdent: any): void {
    this.userService.deleteUserByUserIdent(userIdent)
      .subscribe(
        (response: void) => {
          console.log(response);
          this.notificationService.success('User deleted successfully');
          this.getUsers();
        },
        () => {
          this.notificationService.error('Error occured when deleting user');
        }
      );
    this.modalService.dismissAll();
  }

  public getUsers() {
    this.userService.getAllUsers()
      .subscribe(users => {
        this.users = users;
        console.log(this.users);
      })

  }


}
