import { useState } from "react";
import {
  Building2,
  Calendar,
  DollarSign,
  Users,
  FileText,
  BarChart3,
  CheckCircle,
  Star,
  Shield,
  Zap,
  Target,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    projects: "",
    projectValue: "",
    products: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const features = [
    {
      icon: Building2,
      title: "Project Management",
      description:
        "Streamline your construction projects from planning to completion with intelligent workflow automation.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "AI-powered scheduling that adapts to weather, resource availability, and project dependencies.",
    },
    {
      icon: DollarSign,
      title: "Cost Control",
      description:
        "Real-time budget tracking and cost forecasting to keep your projects profitable.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Connect field teams, office staff, and stakeholders with seamless communication tools.",
    },
    {
      icon: FileText,
      title: "Document Management",
      description:
        "Centralized storage for blueprints, permits, contracts, and all project documentation.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Powerful insights and custom reports to optimize performance and identify opportunities.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson Construction Co.",
      text: "BlueSQ transformed how we manage projects. We've seen 30% faster completion times and significantly better profit margins.",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      company: "Rodriguez Builders",
      text: "The scheduling features alone have saved us thousands in overtime costs. This software pays for itself.",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      company: "Chen Development",
      text: "Finally, a construction management platform that actually understands our industry. Highly recommended!",
      rating: 5,
    },
  ];

  const discountRate = 0.25;
  const plans = [
    {
      name: "Basic",
      description: "For solo entrepreneurs",
      monthly: 39,
      badge: null as string | null,
      features: [
        "Project management & scheduling",
        "1 user + 2 collaborators",
        "Core analytics & reporting",
        "Email support",
      ],
    },
    {
      name: "Grow",
      description: "For small teams",
      monthly: 105,
      badge: "Most Popular",
      features: [
        "Everything in Basic",
        "5 users + 10 collaborators",
        "Advanced analytics",
        "Priority chat support",
      ],
    },
    {
      name: "Advanced",
      description: "As your business scales",
      monthly: 399,
      badge: null as string | null,
      features: [
        "Everything in Grow",
        "Unlimited projects & locations",
        "Custom integrations",
        "Enhanced support (SLA)",
      ],
    },
    {
      name: "Plus",
      description: "For more complex businesses",
      monthly: null as number | null,
      badge: null as string | null,
      features: [
        "Priority onboarding",
        "Dedicated success manager",
        "Security reviews & SSO",
        "Custom contracts & pricing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/assets/73cef5d45d4148daa57a98053c90e59f/group-3-ebd4f7?format=webp&width=800"
                alt="BlueSQ Logo"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-bluesq-600 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-bluesq-600 transition-colors">
                Pricing
              </a>
              <a href="/about" className="text-gray-700 hover:text-bluesq-600 transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-bluesq-600 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-bluesq-600 transition-colors">
                Contact
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge className="bg-yellow-100 text-yellow-900 hover:bg-yellow-200">
                  #1 Construction Management Platform
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building Made <span className="text-bluesq-600">Smart</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your construction business with intelligent project management, real-time collaboration, and AI-powered insights that drive profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              {/* Classic iPhone Frame */}
              <div className="relative w-72 mx-auto">
                <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>
                    <div className="bg-white px-6 py-3 flex justify-between items-center text-black text-xs font-semibold pt-8">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-gradient-to-b from-bluesq-600 to-bluesq-800 min-h-[480px] flex flex-col p-4 text-white">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className="mb-6 flex justify-center pt-2">
                            <img
                              src="https://cdn.builder.io/api/v1/assets/73cef5d45d4148daa57a98053c90e59f/group-3-ebd4f7?format=webp&width=800"
                              alt="BlueSQ Logo"
                              className="h-7 w-auto brightness-0 invert"
                            />
                          </div>
                          <div className="text-center mb-6">
                            <h2 className="text-lg font-bold mb-3">Find Your Next Construction Project</h2>
                            <p className="text-xs text-white/90">
                              Start by selecting your project location and type.
                            </p>
                          </div>
                          <div className="space-y-2 px-2">
                            <input
                              type="text"
                              placeholder="Enter a city, county or zip"
                              className="w-full px-3 py-2 rounded-full bg-white text-gray-900 placeholder-gray-500 text-xs border-2 border-white"
                            />
                            <input
                              type="text"
                              placeholder="What type of project?"
                              className="w-full px-3 py-2 rounded-full bg-white text-gray-900 placeholder-gray-500 text-xs border-2 border-white"
                            />
                            <div className="flex justify-center pt-2">
                              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full flex items-center space-x-2 text-xs">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span>Search</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="text-center pb-4">
                          <p className="text-white font-semibold text-xs">Search by Strategy</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-2">
                      <h3 className="text-xs font-semibold text-gray-900 text-center">
                        My Saved Projects
                      </h3>
                    </div>
                    <div className="bg-white pb-2 flex justify-center">
                      <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to manage construction projects
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools designed for modern construction teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-yellow-400 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by construction leaders
            </h2>
            <p className="text-xl text-gray-600">
              See how BlueSQ is transforming construction businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 font-normal mb-4">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Find a plan to power your growth
            </h2>
            <p className="text-lg text-gray-600">
              Pay monthly or yearly and save 25%
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full border border-gray-200 bg-gray-100 p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Pay monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                  billingCycle === "yearly"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Pay yearly <span className="ml-1 text-green-600">(save 25%)</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => {
              const isPlus = plan.monthly === null;
              const monthlyPrice = plan.monthly ?? 0;
              const displayPrice =
                billingCycle === "monthly"
                  ? monthlyPrice
                  : Math.round(monthlyPrice * (1 - discountRate));
              return (
                <Card
                  key={plan.name}
                  className={`relative border-2 ${
                    plan.badge ? "border-bluesq-600" : "border-gray-200"
                  }`}
                >
                  {plan.badge && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bluesq-600">
                      {plan.badge}
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4 min-h-[40px]">
                      {isPlus ? (
                        <div>
                          <span className="text-2xl font-bold">Contact sales</span>
                        </div>
                      ) : (
                        <div>
                          <span className="text-4xl font-bold">${displayPrice}</span>
                          <span className="text-gray-600">/month</span>
                          {billingCycle === "yearly" && (
                            <p className="text-xs text-green-600 mt-1">Billed yearly</p>
                          )}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>{f}</span>
                      </div>
                    ))}
                    {isPlus ? (
                      <Button className="w-full mt-6" variant="outline">
                        Contact Sales
                      </Button>
                    ) : (
                      <Button
                        className={`w-full mt-6 ${
                          plan.badge ? "bg-bluesq-600 hover:bg-bluesq-700" : ""
                        }`}
                      >
                        Get Started
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16">
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              <div className="lg:col-span-2">
                <Card className="h-full border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Advertising & Brand Visibility</CardTitle>
                    <CardDescription>
                      Promote your brand across BlueSQ Radio, partner websites, and social media.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>On-air mentions on BlueSQ Radio up to 4× per day</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Featured placements across partner websites</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Social amplification on Facebook, X, and LinkedIn</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Creative assistance for copy and assets</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Monthly performance reporting</span>
                    </div>
                    <div className="mt-4">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold" disabled>
                        Coming soon
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="h-full">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl">Add‑on Pricing</CardTitle>
                    <CardDescription>Bundle and save</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">
                        ${billingCycle === "monthly" ? 499 : Math.round(499 * (1 - discountRate))}
                      </span>
                      <span className="text-gray-600">/month</span>
                      {billingCycle === "yearly" && (
                        <p className="text-xs text-green-600 mt-1">Billed yearly</p>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">
                      Available as an add‑on to any plan. Cancel anytime.
                    </p>
                    <Button className="w-full mt-6" variant="outline">
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6 text-center">
              *Yearly discount available on select plans
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600">
              Schedule a demo and let's show you how BlueSQ transforms construction operations.
            </p>
          </div>

          <form className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bluesq-600 focus:ring-2 focus:ring-bluesq-100"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bluesq-600 focus:ring-2 focus:ring-bluesq-100"
                  placeholder="Smith"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bluesq-600 focus:ring-2 focus:ring-bluesq-100"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bluesq-600 focus:ring-2 focus:ring-bluesq-100"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bluesq-600 focus:ring-2 focus:ring-bluesq-100"
                  placeholder="Your Construction Company"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Number of Active Projects *
                </label>
                <select
                  name="projects"
                  value={formData.projects}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bluesq-600 focus:ring-2 focus:ring-bluesq-100"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-20">11-20</option>
                  <option value="21-50">21-50</option>
                  <option value="50+">50+</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Average Project Value *
                </label>
                <select
                  name="projectValue"
                  value={formData.projectValue}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bluesq-600 focus:ring-2 focus:ring-bluesq-100"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="under-50k">Under $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="over-1m">Over $1M</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Interested In *
                </label>
                <select
                  name="products"
                  value={formData.products}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bluesq-600 focus:ring-2 focus:ring-bluesq-100"
                  required
                >
                  <option value="">Select a product</option>
                  <option value="project-management">Project Management</option>
                  <option value="team-coordination">Team Coordination</option>
                  <option value="financial-control">Financial Control</option>
                  <option value="all">All of the above</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bluesq-600 focus:ring-2 focus:ring-bluesq-100"
                placeholder="Tell us a bit about your business..."
              ></textarea>
            </div>

            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 h-auto">
              Schedule Demo
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>© 2024 BlueSQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
