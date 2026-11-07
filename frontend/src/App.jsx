import { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { api } from './api';
import { blogPosts, companyLogos, pricingPlans, services, statCards, workflowSteps } from './data/mockData';

function Header() {
  return (
    <header className="topbar">
      <div className="container nav">
        <div className="brand-wrap">
          <div className="brand-mark">P</div>
          <div>
            <div className="brand-name">PeopleAI</div>
          </div>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <button className="ghost-btn">Login</button>
          <button className="primary-btn">Book demo</button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-wrap">
            <div className="brand-mark">P</div>
            <div className="brand-name">PeopleAI</div>
          </div>
          <p className="muted">AI-powered recruiting, talent evaluation and product engineering partner for modern teams.</p>
        </div>
        <div>
          <h4>Platform</h4>
          <ul>
            <li>Talent matching</li>
            <li>Candidate scoring</li>
            <li>AI interview ops</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Case studies</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul>
            <li>hello@peopleai.app</li>
            <li>+1 (415) 205-0112</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    const loadDashboard = async () => {
      const data = await api.getDashboard();
      setDashboard(data);
    };

    loadDashboard();
  }, []);

  const heroStats = dashboard?.stats ?? statCards;
  const serviceCards = dashboard?.services ?? services;

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="pill">Next-gen AI talent infrastructure</span>
            <h1>Build your AI product team with real, vetted expertise.</h1>
            <p>
              PeopleAI helps startups and enterprises source, assess, and hire best-fit AI engineers,
              PMs, and product builders with human-guided evaluation and automation.
            </p>
            <div className="cta-row">
              <button className="primary-btn">Get started</button>
              <button className="ghost-btn">See pricing</button>
            </div>
            <div className="mini-proof">
              <span>Trusted by 180+ teams</span>
              <div className="logo-row">
                {companyLogos.map((logo) => (
                  <span key={logo}>{logo}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-card">
              <div className="panel-label">Pipeline health</div>
              <div className="big-metric">94.8%</div>
              <div className="chart-bars">
                <span style={{ height: '36%' }} />
                <span style={{ height: '48%' }} />
                <span style={{ height: '60%' }} />
                <span style={{ height: '76%' }} />
                <span style={{ height: '92%' }} />
                <span style={{ height: '100%' }} />
              </div>
              <div className="panel-meta">
                <span>Shortlist readiness</span>
                <strong>+28% this month</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {heroStats.map((item) => (
            <div className="stat-card" key={item.label}>
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">What we do</span>
            <h2>Everything your AI hiring and product roadmap needs.</h2>
          </div>
          <div className="card-grid three-col">
            {serviceCards.map((service) => (
              <article className="feature-card" key={service.name}>
                <div className="icon-box">✦</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">How it works</span>
            <h2>From job briefing to candidate-ready shortlist in days.</h2>
          </div>
          <div className="steps-grid">
            {workflowSteps.map((step) => (
              <div key={step.title} className="step-card">
                <div className="step-number">0{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <span className="eyebrow">Built for scale</span>
            <h2>One platform for hiring, evaluation and product execution.</h2>
            <ul className="bullet-list">
              <li>AI-assisted talent screening tailored to your stack and role profile</li>
              <li>Structured interviews and scorecards that reduce bias and improve consistency</li>
              <li>Engagement support for product engineering teams and AI application delivery</li>
            </ul>
          </div>
          <div className="floating-panel">
            <div className="mini-card">
              <div className="mini-card-header">
                <span>Live demand</span>
                <span className="badge success">+18.2%</span>
              </div>
              <div className="mini-metric">7,248</div>
              <small>Candidate profiles reviewed in the last 30 days</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Insights</span>
            <h2>Latest updates from the PeopleAI newsroom</h2>
          </div>
          <div className="card-grid three-col">
            {blogPosts.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className="blog-tag">{post.tag}</div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
                <a href="#">Read article</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PricingPage() {
  return (
    <section className="section page-shell">
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow">Pricing</span>
          <h2>Choose the plan that matches your growth stage.</h2>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">{plan.price}</div>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className={plan.featured ? 'primary-btn' : 'ghost-btn'}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [result, setResult] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.submitLead(formState);
    setResult(response.message || 'Thank you. We will get back to you soon.');
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="section page-shell">
      <div className="container contact-layout">
        <div>
          <span className="eyebrow">Talk to us</span>
          <h2>Let’s build your next high-performing AI product team.</h2>
          <p className="muted">Share your hiring or product goals and we’ll map the right playbook.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" value={formState.name} onChange={handleChange} placeholder="Your name" required />
          <input name="email" type="email" value={formState.email} onChange={handleChange} placeholder="Work email" required />
          <input name="company" value={formState.company} onChange={handleChange} placeholder="Company" required />
          <textarea name="message" value={formState.message} onChange={handleChange} placeholder="Tell us about your project" rows={5} required />
          <button className="primary-btn" type="submit">Submit request</button>
          {result && <div className="result-box">{result}</div>}
        </form>
      </div>
    </section>
  );
}

function DashboardPage() {
  const [dashboard, setDashboard] = useState({ stats: [], services: [], pipeline: [] });

  useEffect(() => {
    const load = async () => {
      const data = await api.getDashboard();
      setDashboard(data);
    };

    load();
  }, []);

  return (
    <section className="section page-shell">
      <div className="container dashboard-layout">
        <div className="dashboard-top">
          {dashboard.stats.map((item) => (
            <div className="stat-card compact" key={item.label}>
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="metrics-grid">
          <div className="panel-box">
            <h3>Live pipeline</h3>
            <ul className="pipeline-list">
              {dashboard.pipeline.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.count}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel-box">
            <h3>Service coverage</h3>
            <ul className="pipeline-list">
              {dashboard.services.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <strong>Live</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
