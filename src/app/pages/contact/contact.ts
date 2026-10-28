import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  model = { name: '', email: '', phone: '', message: '' };
  sent = signal(false);

  submit() {
    // TODO: send this.model to your backend (HttpClient) or a form service.
    console.log('Enquiry', this.model);
    this.sent.set(true);
    this.model = { name: '', email: '', phone: '', message: '' };
  }
}
