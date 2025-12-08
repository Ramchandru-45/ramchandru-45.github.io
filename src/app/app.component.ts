import { NgClass } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, MenuComponent,NotFoundComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  width = signal(window.innerWidth);
  height = signal(window.innerHeight);

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.width.set(window.innerWidth);
    this.height.set(window.innerHeight);
  }

}