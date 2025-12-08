import { Component } from '@angular/core';
import { JsonService } from '../../services/json.service';
import { MyData } from '../../types/my-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  data: MyData | undefined;
  constructor(private json:JsonService){}
  ngOnInit() {
    console.log(this.data);
    this.json.getBio().subscribe((res)=>{
      this.data = res;
    })
    
  }
}
