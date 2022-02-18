import { StringUtils } from "../utils/string-utils";
import { Role } from "./Role";


export class User{
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone:string;
  imageUrl:string;
  userIdent: string;
  roles: Array<Role>;

  constructor() {
    this.id=0;
    this.firstname= StringUtils.EMPTY;
    this.lastname= StringUtils.EMPTY;
    this.email= StringUtils.EMPTY;
    this.phone=StringUtils.EMPTY;
    this.imageUrl=StringUtils.EMPTY;
    this.userIdent= StringUtils.EMPTY;
    this.roles= new Array<Role>();
  }


}
