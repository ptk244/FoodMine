import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoadingSubject=new BehaviorSubject<boolean>(false);

  constructor() { }

  showloading(){
    this.isLoadingSubject.next(true);
  }

  hideLoading(){
    this.isLoadingSubject.next(false);
  }

  get isloading(){
    return this.isLoadingSubject.asObservable();
  }
}
