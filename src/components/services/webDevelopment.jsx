import React from "react";
import Navbar from "../home/Navbar";

export default function WebDevelopment() {
  const services = [
    "Website Design & Development",
    "E-commerce Development",
    "SEO Optimization",
    "Website Maintenance & Hosting",
  ];

  const pricing = [
    {
      name: "Basic",
      price: "$499",
      features: ["5 pages", "Responsive Design", "Basic SEO", "1 month support"],
    },
    {
      name: "Standard",
      price: "$999",
      features: ["10 pages", "E-commerce support", "SEO optimization", "3 months support"],
    },
    {
      name: "Premium",
      price: "$1999",
      features: ["Custom web app", "Advanced SEO & Performance", "Dedicated support", "Hosting + Maintenance"],
    },
  ];

  const portfolioCount = 6;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Building Fast, Modern & Scalable Websites
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We design and develop professional websites that convert — responsive, SEO-friendly, and optimized for performance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://wa.me/97779976585"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 shadow"
            >
              Contact via WhatsApp
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* Services */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Our Web Development Services</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s} className="p-4 bg-indigo-50 rounded-md">
                <h3 className="font-medium text-gray-900">{s}</h3>
                <p className="mt-2 text-sm text-gray-600">Professional, scalable, and performance-oriented.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pricing.map((plan) => (
              <div key={plan.name} className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                  {plan.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a href="https://wa.me/97779976585" className="mt-6 inline-block px-4 py-2 bg-indigo-600 text-white rounded">Get Started</a>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Recent Work</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: portfolioCount }).map((_, i) => (
              <a key={i} href={`/portfolio/project-${i + 1}`} className="block rounded overflow-hidden bg-gray-100 shadow hover:shadow-md">
                <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url("https://source.unsplash.com/collection/190727/800x600?sig=${i}")` }} />
                <div className="p-4">
                  <h3 className="font-medium">Project {i + 1}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
