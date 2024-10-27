import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="pt-5">
      <section class="hero-section">
        <div class="container text-center">
          <h1 class="display-4 fw-bold mb-4">Contact Us</h1>
          <p class="lead">Get in touch with our team for any questions or support</p>
        </div>
      </section>

      <section class="section bg-white">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="feature-card">
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="needs-validation">
                  <div class="mb-4">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      formControlName="name"
                      class="form-control"
                      placeholder="Your name"
                    >
                  </div>

                  <div class="mb-4">
                    <label class="form-label">Email</label>
                    <input
                      type="email"
                      formControlName="email"
                      class="form-control"
                      placeholder="your@email.com"
                    >
                  </div>

                  <div class="mb-4">
                    <label class="form-label">Message</label>
                    <textarea
                      formControlName="message"
                      rows="4"
                      class="form-control"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary w-100 btn-custom"
                    [disabled]="!contactForm.valid"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div class="row mt-5 text-center">
                <div class="col-md-4">
                  <h3 class="h5 fw-bold mb-2">Email</h3>
                  <p class="text-muted">support@epayli.com</p>
                </div>
                <div class="col-md-4">
                  <h3 class="h5 fw-bold mb-2">Phone</h3>
                  <p class="text-muted">+1 (555) 123-4567</p>
                </div>
                <div class="col-md-4">
                  <h3 class="h5 fw-bold mb-2">Address</h3>
                  <p class="text-muted">123 Payment Street<br>New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission
    }
  }
}