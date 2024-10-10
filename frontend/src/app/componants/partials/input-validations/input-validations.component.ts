import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGE:any={
  required:'should not be empty',
  email:'Email is not valid',
  minlength:'Feild is too short',
  notMatch:'Password and confirmPassword does not match'

}
@Component({
  selector: 'input-validations',
  templateUrl: './input-validations.component.html',
  styleUrls: ['./input-validations.component.css']
})
export class InputValidationsComponent implements OnInit, OnChanges {

  @Input()
  control!:AbstractControl;
  @Input()
  showErrorWhen:boolean=true;

  errormessages:string[]=[]

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(()=>{
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(()=>{
      this.checkValidation();
    })
  }

  checkValidation(){
    const errors=this.control.errors;
    if(!errors){
      this.errormessages=[];
      return;

    }

    const errorKeys=Object.keys(errors);
    this.errormessages=errorKeys.map((key)=> VALIDATORS_MESSAGE[key]);
 }

}
