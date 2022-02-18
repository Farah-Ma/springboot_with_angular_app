import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DeleteUserModal} from './deleteUser/deleteUserModal';
import {EditUserModal} from './EditUser/editUserModal';
import {AddUserModal} from './addUser/addUserModal';
import {FormsModule} from '@angular/forms';



@NgModule({
            imports: [BrowserModule, NgbModule, FormsModule],
            declarations: [DeleteUserModal,EditUserModal,AddUserModal],
            exports: [DeleteUserModal,EditUserModal,AddUserModal],
            bootstrap: [DeleteUserModal,EditUserModal,AddUserModal]
          })
export class ModalModule {}
