# springboot_with_angular_app
This is a  Spring Boot full stack with Angular application 

## Index :pushpin:
- [About the project](#about)
- [Show_me_the_code](#code)

## About the project <a name="about"></a> :link:
- Hub is a project in wich we have created a spring boot API and then exposing API Endpoints Over HTTP, it's a users manager api. 
- The frontend application is under 'angular' directory, this app use and consume the 'users manager' spring Boot API


### Follow the technologies present in this project below:
- Java 11
- Angular 10
- Spring Boot
- Database : maria DB version 10

## Show me the code <a name="code"></a> :computer:
This is a piece of TypeScript code that we use to open a ng-bootstrap modal and add a new user
```TypeScript

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
```
