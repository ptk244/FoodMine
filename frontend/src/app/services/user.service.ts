import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import User from '../shared/models/user';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/url';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interfaces/iuserRegister';
import { error } from 'console';

const USER_KEY="  User"

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private userSubject=new BehaviorSubject<User>(this.getUserFromlocalStorge());

 public userObservable:Observable<User>
  constructor(private http:HttpClient, private tostrService:ToastrService) { 
    this.userObservable=this.userSubject.asObservable();
  }

  public get currentUser(){
    return this.userSubject.value;
  }

  login(userlogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL,userlogin).pipe(
      tap({
        next:(user)=>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.tostrService.success(
            `Welcome to Foodmine ${user.name}!`, 
            `Login Successfull`
          )
        },
        error:(errorRespnce)=>{
          this.tostrService.error(errorRespnce.error,'Login Failed');
        }
      })
    )
  }


  register(userRegister:IUserRegister):Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL,userRegister).pipe(
      tap({
        next:(user)=>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.tostrService.success(
            `welcome to foodmine ${user.name}`,
            'Register Successsfull'
          )
        },
        error:(errorResponce)=>{
          this.tostrService.error(
            errorResponce.error, 'Register Failed'
          )
        }
      })
    )
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY)
    window.location.reload();
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY,JSON.stringify(user));
  }

  private getUserFromlocalStorge(){
    const userJson=localStorage.getItem(USER_KEY);
    if(userJson){
      return JSON.parse(userJson) as User;
    }
    return new User();
  }
}
