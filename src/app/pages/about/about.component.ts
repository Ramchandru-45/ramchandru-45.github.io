import { Component, Input } from '@angular/core';
import { JsonService } from '../../services/json.service';
import { MyData } from '../../types/my-data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [JsonService]
})
export class AboutComponent {

  @Input() width! : number;
  @Input() height! : number;

  data: MyData | undefined;
  constructor(private json:JsonService){}

  ngOnInit() {
      this.json.getBio().subscribe(res => {
        this.data = res;
      });
      // console.log(this.width);
      // console.log(this.height)
  }
}
