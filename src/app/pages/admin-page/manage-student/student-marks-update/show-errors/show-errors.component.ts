import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'show-errors',
  templateUrl:'./show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent {

 private static readonly errorMessages = {
   'marks': (params) => params.message,
 };

 @Input() control: AbstractControlDirective | AbstractControl;

 shouldShowErrors(): boolean {
   return this.control &&
     this.control.errors &&
     (this.control.dirty || this.control.touched);
 }

 listOfErrors(): string[] {
   return Object.keys(this.control.errors)
     .map(field => this.getMessage(field, this.control.errors[field]));
 }

 private getMessage(type: string, params: any) {
   return ShowErrorsComponent.errorMessages[type](params);
 }

}