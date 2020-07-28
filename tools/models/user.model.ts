import { AuditModel } from "./audit.model";

export class UserModel{
id:string;
name:string;
surname:string;
image:string;
email:string;
password:string;
passwordHash:string;
audit:AuditModel;
}