import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  logSomething(x:any){
    console.log(x);
  }

  onEnterPress($event:any){
    console.log($event)
  }

}
