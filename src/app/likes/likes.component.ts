import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  courses=[
    {id:1,name:"Srithar",email:"sritharBoss@yahoo.com"},
    {id:2,name:"Two",email:"sritharBoss@.com"},
    {id:3,name:"THree",email:"srithar@yahoo.com"},
    {id:4,name:"Four",email:"Boss@yahoo.com"},
    {id:5,name:"Five",email:"sritharBoss@yahoo"},
    {id:6,name:"Srithar",email:"sritharBoss@yahoo.com"},
    {id:7,name:"Two",email:"sritharBoss@.com"},
    {id:8,name:"THree",email:"srithar@yahoo.com"},
    {id:9,name:"Four",email:"Boss@yahoo.com"},
    {id:10,name:"Five",email:"sritharBoss@yahoo"}
  ];

  len=this.courses.length;

  clickEvent(mode:string,ind:number){
    if(mode=='Delete'){
      console.log(this.courses.splice(ind,1));
    }else if(mode=='Edit'){
      console.log("You Clicked "+mode+" Event in the index of "+ind);
    }
    
  }

  addBack(){
    this.courses=[{id:1,name:"Srithar",email:"sritharBoss@yahoo.com"},
    {id:2,name:"Two",email:"sritharBoss@.com"},
    {id:3,name:"THree",email:"srithar@yahoo.com"},
    {id:4,name:"Four",email:"Boss@yahoo.com"},
    {id:5,name:"Five",email:"sritharBoss@yahoo"},
    {id:6,name:"Srithar",email:"sritharBoss@yahoo.com"},
    {id:7,name:"Two",email:"sritharBoss@.com"},
    {id:8,name:"THree",email:"srithar@yahoo.com"},
    {id:9,name:"Four",email:"Boss@yahoo.com"},
    {id:10,name:"Five",email:"sritharBoss@yahoo"}
  ];
  }
    
}
