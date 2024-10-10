import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'tex-input',
  templateUrl: './tex-input.component.html',
  styleUrls: ['./tex-input.component.css']
})
export class TexInputComponent implements OnInit {

  @Input()
  control!:AbstractControl;

  @Input()
  showErrorWhen:boolean=true;

  @Input()
  label!:string;

  @Input()
  type:'text' | 'password' |'email'='text';


  get formControl(){
    return this.control  as FormControl;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
