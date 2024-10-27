import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="pt-5">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-8">
              <h1 class="display-4 fw-bold mb-4">Simplify Your Payment Process</h1>
              <p class="lead mb-5">Accept payments, manage transactions, and grow your business with our comprehensive payment solution.</p>
              <div class="d-flex gap-3 justify-content-center">
                <button class="btn btn-light btn-custom">Get Started</button>
                <button class="btn btn-outline-light btn-custom">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="section bg-white">
        <div class="container">
          <h2 class="text-center fw-bold mb-5">Why Choose ePayli?</h2>
          <div class="row g-4">
            <div class="col-md-4">
              <div class="feature-card">
                <div class="display-6 text-primary mb-3">💳</div>
                <h3 class="h5 fw-bold mb-3">Multiple Payment Methods</h3>
                <p class="text-muted">Accept credit cards, bank transfers, and digital wallets with ease.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-card">
                <div class="display-6 text-primary mb-3">🔒</div>
                <h3 class="h5 fw-bold mb-3">Secure Transactions</h3>
                <p class="text-muted">Bank-grade security with advanced fraud protection.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-card">
                <div class="display-6 text-primary mb-3">📊</div>
                <h3 class="h5 fw-bold mb-3">Real-time Analytics</h3>
                <p class="text-muted">Track transactions and monitor business performance in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Integration Section -->
      <section class="section bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h2 class="fw-bold mb-4">Easy Integration</h2>
              <p class="text-muted mb-4">Integrate our payment solution into your existing systems with minimal effort. Our API documentation and SDKs make implementation straightforward.</p>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="bi bi-check-circle-fill text-success me-2"></i>
                  Simple API Integration
                </li>
                <li class="mb-3">
                  <i class="bi bi-check-circle-fill text-success me-2"></i>
                  Developer-friendly Documentation
                </li>
                <li class="mb-3">
                  <i class="bi bi-check-circle-fill text-success me-2"></i>
                  24/7 Technical Support
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <div class="feature-card">
                <pre class="bg-light p-4 rounded"><code>// Example API Integration
const payment = await ePayli.createPayment({
  amount: 1000,
  currency: 'USD',
  description: 'Order #123'
});</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="section bg-white">
        <div class="container">
          <h2 class="text-center fw-bold mb-5">What Our Clients Say</h2>
          <div class="row g-4">
            <div class="col-md-6">
              <div class="testimonial-card">
                <p class="mb-4">"ePayli has transformed how we handle payments. The integration was smooth, and our customers love the seamless checkout experience."</p>
                <div class="d-flex align-items-center">
                  <div>
                    <p class="fw-bold mb-0">Sarah Johnson</p>
                    <small class="text-muted">CEO, TechStart Inc</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="testimonial-card">
                <p class="mb-4">"The best payment solution we've used. Their analytics tools have helped us make better business decisions."</p>
                <div class="d-flex align-items-center">
                  <div>
                    <p class="fw-bold mb-0">Michael Chen</p>
                    <small class="text-muted">CTO, Digital Solutions</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="hero-section">
        <div class="container text-center">
          <h2 class="fw-bold mb-4">Ready to Get Started?</h2>
          <p class="lead mb-5">Join thousands of businesses that trust ePayli for their payment needs.</p>
          <button class="btn btn-light btn-custom">Create Account</button>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent {}