import { NgFor, NgClass} from '@angular/common';
import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

interface Pages{
  id : number;
  name : string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
  
  @Input() width! : number;
  @Input() height! : number;

  dynamic_width: string = (this.width-this.height).toString();
  
  showFiller = false;
  constructor(private router: Router) {}

  NavigationItems : Pages[]= [
    {id : 1 , name:'HOME'},
    {id : 2, name: 'WORK'}, 
    {id : 3, name: 'ABOUT'}, 
    {id : 4, name :'CONTACT'}];
 
  goto(item : number) {
    //console.log(item);
    switch(item){
      case 1:
        this.router.navigate(['/home']);
        break;
      case 2:
        this.router.navigate(['/work']);
        break;
      case 3:
        this.router.navigate(['/about']);
        break;
      case 4:
        this.router.navigate(['/contact']);
        break;
    }
  }
  
  currentPage(item : string){
    //console.log(item);
    if(this.router.url == '/'+item.toLocaleLowerCase()){
      return true;
    }
    return false;
  }

  showMenu() {
    this.showFiller = !this.showFiller;
  }

}