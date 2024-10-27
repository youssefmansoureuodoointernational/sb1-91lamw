import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand fw-bold text-primary" routerLink="/">ePayli</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-primary ms-2" routerLink="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class HeaderComponent {}