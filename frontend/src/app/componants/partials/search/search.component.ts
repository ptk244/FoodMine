import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  serchTerm='';
  constructor(private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe({
      next:(params)=>{
        if(params.serchTerm){
          this.serchTerm=params.serchTerm
        }

      }
    })
  }

  serch(term:string){
    if(term){
      this.router.navigateByUrl('/serch/'+term)
    }
    
  }

}
