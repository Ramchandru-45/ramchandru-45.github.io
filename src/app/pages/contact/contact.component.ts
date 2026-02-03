import { Component } from '@angular/core';
import { SocialAccComponent } from '../../components/social.acc/social.acc.component';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialAccComponent, CdkCopyToClipboard],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  mailID: string = 'ramchan452004@gmail.com';

  copySuccess = false;

  onCopy(successful: boolean): void {
    if (successful) {
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 2000); // Hide message after 2 seconds
    }
  }
}
