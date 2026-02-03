import { AsyncPipe, NgClass } from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResizeService } from './services/resize.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, MenuComponent,NotFoundComponent, NgClass, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ramchandru';

  constructor(public resize:ResizeService) {}
  
  ngOnInit(): void{
  }

  ngOnDestroy() : void{
  }

}