import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from '../model/User';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root',
  })
export class UserService {
    private apiServerURL =environment.serverURL;
    readonly API_USERS_URL= this.apiServerURL+'/api/private/users/all';
    readonly API_ADD_USER_URL= this.apiServerURL+'/api/private/users/add';
    readonly API_UPDATE_USER_URL= this.apiServerURL+'/api/private/users/update';
    readonly API_DELETE_USER_URL= this.apiServerURL+'/api/private/users/delete';
  readonly API_DELETE_USER_BY_USERIDENT_URL= this.apiServerURL+'/api/private/users/deleteByUserIdent';
    constructor(private http :HttpClient){}

    /**
     *
     * @returns a list of users
     */
    getAllUsers(): Observable<Array<User>> {
        return this.http.get<Array<User>>(this.API_USERS_URL);
     }

     addUser(user:User): Observable<User> {
        return this.http.post<User>(this.API_ADD_USER_URL,user);
     }

     updateUser(user:User): Observable<User> {
        return this.http.put<User>(this.API_UPDATE_USER_URL,user);
     }
/**
 * delete user by id
 * @param userId id of user
 * @returns
 */
     deleteUser(userId:number): Observable<void> {
         return this.http.delete<void>(this.API_DELETE_USER_URL+ '/' + userId);
     }
  /**
   * delete user by userIdent
   * @param userIdent userIdent of user
   * @returns
   */
  deleteUserByUserIdent(userIdent:string): Observable<void> {
    return this.http.delete<void>(this.API_DELETE_USER_BY_USERIDENT_URL+ '/' + userIdent);
  }
}
