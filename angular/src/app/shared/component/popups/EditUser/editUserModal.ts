import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../model/User';
import {UserService} from '../../../service/user.service';
import {NotificationService} from '../../../service/notification.service';


@Component({
             selector: 'edit-user-modal',
             templateUrl: './editUserModal.html'
           })
export class EditUserModal implements OnInit{
  @Input() user = new User();
  closeResult = '';
  title = 'mathaliapp';
  users: User[];
  public editUser= new User();
  public deleteUser= new User();

  constructor(private modalService: NgbModal,
              private userService:UserService,
              private notificationService :NotificationService
             ) {
    this.users = [];
  }
  ngOnInit(): void {
    this.getUsers();
  }
  open(content:any, user:User) {
    this.editUser=user;
    this.modalService.open(content);
  }



  public onUpdateUser(user: User): void {

    this.userService.updateUser(user).subscribe(
      (response: User) => {
        console.log(response);
        this.notificationService.success('User edited successfully');
        this.getUsers();
      },
      () => {
        this.notificationService.error('Error occurred when editing user');
      }
    );
    this.modalService.dismissAll();
  }

  public getUsers() {
    this.userService.getAllUsers().subscribe(users =>{
      this.users = users;
      console.log(this.users);
    })

  }
}
