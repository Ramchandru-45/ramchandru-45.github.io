import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './social.acc.component.html',
  styleUrl: './social.acc.component.css'
})
export class SocialAccComponent {
  linkedInUrl: string = 'https://www.linkedin.com/in/chandru-ram';
  githubUrl: string = 'https://www.github.com/Ramchandru-45';
  constructor(){}

}
