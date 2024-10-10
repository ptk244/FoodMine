import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  isLoading!:boolean;
  constructor(loadingService:LoadingService ) { 
    loadingService.isloading.subscribe((isLoading)=>{
      this.isLoading=isLoading;
    })
    // loadingService.showloading()
  }

  ngOnInit(): void {
  }

}
