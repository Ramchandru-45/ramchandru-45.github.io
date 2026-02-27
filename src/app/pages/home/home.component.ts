import { Component } from '@angular/core';
import { AsyncPipe, NgClass, NgStyle } from '@angular/common';
import { Subscription } from 'rxjs';
import { JsonService } from '../../services/json.service';
import { GitService } from '../../services/git.service';
import { MyData } from '../../types/my-data';
import {MatIconModule} from '@angular/material/icon';
import { SocialAccComponent } from '../../components/social.acc/social.acc.component';
import { ResizeService } from '../../services/resize.service';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass,MatIconModule, SocialAccComponent, AsyncPipe, ProjectsComponent, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  fcolor:string = "white";
  data!: MyData | undefined;
  private biosubscription!:Subscription;
  githubAvatarUrl: string = "assets/Profile_avatar_placeholder.png";
  private gitSubscription!: Subscription;
  
  age:  number = new Date().getFullYear() - 2004;


  constructor(private json:JsonService, private git:GitService, public resize:ResizeService){}

  ngOnInit() {
    //console.log('subscribed')
    if(this.biosubscription){ // update your data in assets/jsons/bio.json ; not(!) this expression
      this.biosubscription=this.json.getBio().subscribe((res)=>{
        this.data = res;
      })
    }
    
    if(this.gitSubscription) // After putting your github username, not(!) this expression
    {
      this.gitSubscription= this.git.getUserProfile("type your github username").subscribe(data => {
          this.githubAvatarUrl = data.avatar_url;
        });
    }

}

  ngOnDestroy(){
    //console.log('unsubscribed');
    if(this.biosubscription)
      this.biosubscription.unsubscribe();

    if(this.gitSubscription)
      this.gitSubscription.unsubscribe();
  }
}
