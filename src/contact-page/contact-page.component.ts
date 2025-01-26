import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  callUs() {
    window.open('tel:+15555555555');
  }

  onSubmit(form: any) {
    if (!form.valid) return;
    
    console.log('Form submitted:', this.contactData);

    alert('Thank you! We will get back to you soon.');

    form.reset();
  }

}
