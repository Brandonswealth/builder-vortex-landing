import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Calendar,
  DollarSign,
  Users,
  FileText,
  BarChart3,
  CheckCircle,
  Zap,
  Shield,
  Target,
} from "lucide-react";

export default function Index() {
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
        "Complete visibility into every project from bidding through completion. Track timelines, budgets, and team performance in real-time.",
    },
    {
      icon: Users,
      title: "Field Coordination",
      description:
        "Connect your field teams with office staff. Share daily reports, communicate instantly, and keep everyone aligned.",
    },
    {
      icon: DollarSign,
      title: "Financial Control",
      description:
        "Real-time cost tracking, budget forecasting, and profit margin analysis. Know your numbers at any moment.",
    },
  ];

  const capabilities = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered schedules that adapt to resources and constraints",
    },
    {
      icon: BarChart3,
      title: "Real-time Forecasting",
      description: "Predictive analytics for project completion and profitability",
    },
    {
      icon: FileText,
      title: "Document Hub",
      description: "Centralized storage for all plans, permits, and contracts",
    },
    {
      icon: Target,
      title: "Performance Insights",
      description: "Dashboards and reports that drive better decisions",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/assets/73cef5d45d4148daa57a98053c90e59f/group-3-ebd4f7?format=webp&width=800"
                alt="BlueSQ Logo"
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-gray-900">
                Features
              </a>
              <a href="#capabilities" className="text-gray-700 hover:text-gray-900">
                Capabilities
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
              <a href="/about" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900 font-medium">
                Sign In
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-yellow-100 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Built by Contractors, For Contractors
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Construction Software That Actually Works
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Manage projects, coordinate teams, control costs, and make better decisions—all in one platform built on AWS infrastructure for reliability and scale.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg">
                Get Started Free
              </button>
            </div>
            <div className="relative flex justify-center items-center">
              {/* Classic iPhone Frame */}
              <div className="relative w-80">
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
                    <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 min-h-[480px] flex flex-col p-4 text-white">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className="mb-6 flex justify-center pt-2">
                            <img
                              src="https://cdn.builder.io/api/v1/assets/73cef5d45d4148daa57a98053c90e59f/group-3-ebd4f7?format=webp&width=800"
                              alt="BlueSQ Logo"
                              className="h-7 w-auto brightness-0"
                            />
                          </div>
                          <div className="text-center mb-6">
                            <h2 className="text-lg font-bold mb-3">Your Projects</h2>
                            <p className="text-xs text-yellow-900 opacity-90">
                              All your active work in one place
                            </p>
                          </div>
                          <div className="space-y-3 px-2">
                            <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-sm">Downtown Tower</h3>
                                <span className="text-xs bg-green-400 text-green-900 px-2 py-1 rounded-full">72%</span>
                              </div>
                              <div className="w-full bg-white/30 rounded-full h-1.5">
                                <div className="bg-green-400 h-1.5 rounded-full" style={{ width: '72%' }}></div>
                              </div>
                            </div>
                            <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-sm">Main St Renovation</h3>
                                <span className="text-xs bg-blue-400 text-blue-900 px-2 py-1 rounded-full">45%</span>
                              </div>
                              <div className="w-full bg-white/30 rounded-full h-1.5">
                                <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center pb-4">
                          <p className="text-xs font-semibold">See all projects</p>
                        </div>
                      </div>
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
      <section id="features" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Three Powerful Applications
            </h2>
            <p className="text-xl text-gray-600">
              Purpose-built for every role on your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-yellow-400 transition-colors"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Intelligence That Works for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Intelligent features built throughout BlueSQ to help you make smarter decisions, faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200"
              >
                <item.icon className="h-8 w-8 text-yellow-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BlueSQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Construction Teams Choose BlueSQ
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400 text-gray-900">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Easy to Use</h3>
                <p className="text-gray-600 mt-2">
                  Intuitive interface that your team will love. No complicated setups.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400 text-gray-900">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Enterprise Security</h3>
                <p className="text-gray-600 mt-2">
                  Built on AWS with encryption, backups, and compliance standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-400 text-gray-900">
                  <CheckCircle className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Always Evolving</h3>
                <p className="text-gray-600 mt-2">
                  Regular updates and new features based on contractor feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Lead Form Section */}
      <section id="contact" className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600">
              Let's schedule a demo and show you how BlueSQ can transform your business.
            </p>
          </div>

          <form className="bg-white rounded-2xl border-2 border-gray-200 p-8">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                placeholder="Tell us a bit about your business..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-lg transition-colors"
            >
              Schedule Demo
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-white">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">
              © 2024 BlueSQ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
