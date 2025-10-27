import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  Zap,
  Shield,
  Users,
  Cloud,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const services = [
    {
      icon: Building2,
      title: "Construction Business Setup & Automation",
      description:
        "Streamline your operations from day one with our comprehensive setup and automation solutions.",
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description:
        "Guide contractors and developers through their digital journey to modernize operations.",
    },
    {
      icon: BarChart3,
      title: "Accounting & CFO-Level Reporting",
      description:
        "Get powerful financial insights and reporting tools designed for construction businesses.",
    },
    {
      icon: Shield,
      title: "Compliance & Safety Management",
      description:
        "Keep track of licenses, insurance, and safety logs with built-in compliance tools.",
    },
    {
      icon: Users,
      title: "Workforce Management & HR",
      description:
        "Manage your team, track schedules, and handle HR operations in one place.",
    },
    {
      icon: Cloud,
      title: "Cloud Storage & AWS Infrastructure",
      description:
        "Securely store all your data with AWS-backed cloud infrastructure for reliability and scale.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src="https://cdn.builder.io/api/v1/assets/73cef5d45d4148daa57a98053c90e59f/group-3-ebd4f7?format=webp&width=800"
                  alt="BlueSQ Logo"
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/#features"
                className="text-gray-700 hover:text-bluesq-600 transition-colors"
              >
                Features
              </a>
              <a
                href="/#pricing"
                className="text-gray-700 hover:text-bluesq-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-bluesq-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="/#contact"
                className="text-gray-700 hover:text-bluesq-600 transition-colors"
              >
                Contact
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-bluesq-600 hover:bg-bluesq-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bluesq-50 to-white pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Smarter. Work Faster. Scale Bigger.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your all-in-one construction business platform designed to simplify
              operations and empower growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Purpose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                BlueSQ simplifies how construction companies operate by bringing
                their entire workflow—from bidding to project delivery—onto one
                scalable digital platform.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Built on AWS (Amazon Web Services), we help contractors,
                developers, and project managers run their entire operation in
                one place with real-time data, automation, and customizable
                workspaces.
              </p>
              <Button size="lg" className="bg-bluesq-600 hover:bg-bluesq-700">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="bg-bluesq-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">What We Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Project & Workflow Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Bidding & Job Tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Accounting & Cost Control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <span>CRM for Clients & Vendors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Team Collaboration & File Storage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Cloud-Based Dashboards & Reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored for construction businesses of all
              sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-bluesq-200 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-bluesq-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-bluesq-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why BlueSQ Section */}
      <section className="py-20 bg-bluesq-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose BlueSQ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-bluesq-600 mb-3">
                Cloud-Based
              </div>
              <p className="text-gray-600">
                Built on AWS infrastructure for reliability, security, and
                scalability
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bluesq-600 mb-3">
                All-in-One
              </div>
              <p className="text-gray-600">
                Eliminate tools and streamline workflows with integrated
                solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bluesq-600 mb-3">
                Customizable
              </div>
              <p className="text-gray-600">
                Tailored workspaces and configurations designed for your
                business
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bluesq-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your construction business?
          </h2>
          <p className="text-lg mb-8 text-bluesq-100">
            Join hundreds of construction companies already using BlueSQ to
            manage, grow, and deliver with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-bluesq-600 hover:bg-gray-100"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-bluesq-700"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/#pricing" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
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
