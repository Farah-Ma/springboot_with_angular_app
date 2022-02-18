import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {User} from '../../../model/User';
import {UserService} from '../../../service/user.service';
import {NotificationService} from '../../../service/notification.service';


@Component({
             selector: 'add-user-modal',
             templateUrl: './addUserModal.html'
           })
export class AddUserModal implements OnInit {
  closeResult = '';
  title = 'mathaliapp';
  users: User[];
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



  open(content: any) {
    this.modalService.open(content);
  }


  public onAddUser(addForm: NgForm): void {

    this.userService.addUser(addForm.value)
      .subscribe(
        (response: User) => {
          console.log(response);
          this.notificationService.success('User added successfully');
          this.getUsers();
          addForm.reset();
        },
        () => {
          this.notificationService.error('Error occured when adding user');
          addForm.reset();
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
