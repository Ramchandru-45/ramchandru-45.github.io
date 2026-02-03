// git.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  constructor(private http: HttpClient) { }

  getUserProfile(username: string): Observable<any> {
    //console.log("going")
    return this.http.get(`https://api.github.com/users/${username}`);
  }

  getProjects(username: string): Observable<any[]> {
    return this.http.get<any[]>(`https://api.github.com/users/${username}/repos`);
  }
}