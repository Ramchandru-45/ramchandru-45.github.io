import { Component } from '@angular/core';
import { GitService } from '../../services/git.service';
import { AsyncPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';
import { ResizeService } from '../../services/resize.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgForOf, NgIf, NgFor, AsyncPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{

  fcolor:string = "white";
  projects!: any[];
  ignoreProjects: string[] = [] // put the names iof repositary you want to ignore here
  Message: string = 'Please Wait... Loading Projects';
  private gitSubscription!: Subscription;

  constructor(private githubService: GitService, public resize: ResizeService) { }

  ngOnInit(): void {
    if(this.gitSubscription)
    {
      this.gitSubscription = this.githubService.getProjects("type your github username").subscribe( //replace "type your github username" with your github username
        (data) => {
          // Filter for public repositories that are not forks and not in ignore list
          this.projects = data.filter((repo: any) => !this.ignoreProjects.includes(repo.name));
        },
        (error) => {
          this.Message = 'Failed to fetch projects. Check console for details.';
          console.error(error);
        }
      );
    }
    
  }

  ngOnDestroy(): void {
    //console.log("unsubscribed")
    if(this.gitSubscription){
      this.gitSubscription.unsubscribe();
    }
  }
}
