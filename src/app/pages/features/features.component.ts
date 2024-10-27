import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  template: `
    <div class="pt-5">
      <section class="hero-section">
        <div class="container text-center">
          <h1 class="display-4 fw-bold mb-4">Powerful Features for Your Business</h1>
          <p class="lead">Everything you need to manage payments and grow your business</p>
        </div>
      </section>

      <section class="section bg-white">
        <div class="container">
          <div class="row g-4">
            <div class="col-md-6">
              <h2 class="fw-bold mb-4">Payment Processing</h2>
              <div class="d-flex flex-column gap-4">
                <div class="feature-card">
                  <h3 class="h5 fw-bold mb-3">Multiple Payment Methods</h3>
                  <p class="text-muted">Accept credit cards, debit cards, bank transfers, and digital wallets.</p>
                </div>
                <div class="feature-card">
                  <h3 class="h5 fw-bold mb-3">Global Currencies</h3>
                  <p class="text-muted">Support for multiple currencies and automatic conversion.</p>
                </div>
                <div class="feature-card">
                  <h3 class="h5 fw-bold mb-3">Recurring Billing</h3>
                  <p class="text-muted">Set up subscription payments and automated billing cycles.</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <h2 class="fw-bold mb-4">Security & Compliance</h2>
              <div class="d-flex flex-column gap-4">
                <div class="feature-card">
                  <h3 class="h5 fw-bold mb-3">Fraud Protection</h3>
                  <p class="text-muted">Advanced fraud detection and prevention systems.</p>
                </div>
                <div class="feature-card">
                  <h3 class="h5 fw-bold mb-3">PCI Compliance</h3>
                  <p class="text-muted">Fully PCI DSS compliant payment processing.</p>
                </div>
                <div class="feature-card">
                  <h3 class="h5 fw-bold mb-3">Data Encryption</h3>
                  <p class="text-muted">End-to-end encryption for all transactions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class FeaturesComponent {}