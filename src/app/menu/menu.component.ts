import { NgFor, NgClass, AsyncPipe} from '@angular/common';
import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ResizeService } from '../services/resize.service';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser';

interface Pages{
  id : number;
  name : string;
  url : string;
}

const MENU_ICON_SVG = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    `;
const CLOSE_ICON_SVG = `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    `;

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgClass, MatIconModule, AsyncPipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
  
  // Apply Animations 
  enabled:boolean = false;
  @ViewChild('dropdownContainer') dropdownContainer!: ElementRef;
  show:boolean = false;

  constructor(private router: Router, public resize:ResizeService) { 
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);

    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('menu-icon', sanitizer.bypassSecurityTrustHtml(MENU_ICON_SVG));
    iconRegistry.addSvgIconLiteral('close-icon', sanitizer.bypassSecurityTrustHtml(CLOSE_ICON_SVG));
  }

  ngOnInit(): void{
  }


  NavigationItems : Pages[]= [
    {id : 1 , name:'HOME', url:"/home"},
    {id : 2, name: 'PROJECTS', url:"/projects"}, 
    {id : 3, name: 'CONTACT', url:"/contact"}, 
  ];
 
  goto(item : number) {
    //console.log(item)
    switch(item){
      case 1:
        this.router.navigate(['/home']);
        break;
      case 2:
        this.router.navigate(['/projects']);
        break;
      case 3:
        this.router.navigate(['/contact']);
        break;
    }
    if(this.show)
      this.showMenu();
  }
  
  currentPage(nav_url : string){
    //console.log(item);
    if(this.router.url == '/' && nav_url == '/home'){
      return true;
    }
    if(this.router.url == nav_url){
      return true;
    }
    return false;
  }

  
  showMenu(){
    this.show = !this.show;
    if(this.show){
      this.dropdownContainer.nativeElement.focus();
    }
  }

  onFocusOut(event: FocusEvent) {
    // Use setTimeout to allow the browser to set the relatedTarget (the element receiving focus)
    setTimeout(() => {
      if (!this.dropdownContainer.nativeElement.contains(document.activeElement)) {
        this.show = false;
      }
    }, 0);
  }
}