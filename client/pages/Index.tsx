import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Calendar,
  DollarSign,
  Users,
  FileText,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Target,
  Clock,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Index() {
  const [activeFeature, setActiveFeature] = useState(0);

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
              <a
                href="#features"
                className="text-gray-700 hover:text-bluesq-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-bluesq-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-bluesq-600 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
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
      <section className="relative bg-gradient-to-br from-bluesq-50 to-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-bluesq-100 text-bluesq-800 hover:bg-bluesq-200">
                #1 Construction Management Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Building Made
                <span className="text-bluesq-600 block">Smart</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your construction business with intelligent project
                management, real-time collaboration, and AI-powered insights
                that drive profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-bluesq-600 hover:bg-bluesq-700">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Setup in minutes
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              {/* iOS Device Frame - iPhone 13 Pro Max */}
              <div className="bg-gray-800 rounded-[2.8rem] p-2 shadow-2xl w-72 mx-auto transform scale-90 lg:scale-100">
                <div className="bg-white rounded-[2.3rem] overflow-hidden">
                  {/* iOS Status Bar */}
                  <div className="bg-white px-6 py-2 flex justify-between items-center text-black text-sm font-medium">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      </div>
                      <svg
                        className="w-6 h-3 ml-1"
                        viewBox="0 0 24 12"
                        fill="none"
                      >
                        <rect
                          x="1"
                          y="3"
                          width="18"
                          height="6"
                          rx="2"
                          stroke="black"
                          strokeWidth="1"
                          fill="none"
                        />
                        <rect
                          x="20"
                          y="5"
                          width="2"
                          height="2"
                          rx="0.5"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* URL Bar */}
                  <div className="bg-gray-100 px-6 py-2 text-center">
                    <span className="text-xs text-gray-600">
                      🔒 app.bluesq.pro
                    </span>
                  </div>

                  {/* App Header with Navigation */}
                  <div className="bg-bluesq-600 px-4 py-3">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <div className="flex flex-col space-y-1">
                          <div className="w-4 h-0.5 bg-white"></div>
                          <div className="w-4 h-0.5 bg-white"></div>
                          <div className="w-4 h-0.5 bg-white"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8.5"
                          />
                        </svg>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-5 5-5-5h5z"
                          />
                        </svg>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Main Content with Background */}
                  <div className="relative bg-gradient-to-b from-bluesq-600 to-bluesq-800 h-[520px]">
                    <div className="relative p-5 text-white h-full flex flex-col justify-between">
                      <div>
                        {/* BlueSQ Logo */}
                        <div className="mb-6 flex justify-center">
                          <img
                            src="https://cdn.builder.io/api/v1/assets/73cef5d45d4148daa57a98053c90e59f/group-3-ebd4f7?format=webp&width=800"
                            alt="BlueSQ Logo"
                            className="h-7 w-auto brightness-0 invert"
                          />
                        </div>

                        {/* Main Heading */}
                        <div className="text-center mb-6">
                          <h1 className="text-xl font-bold mb-1">
                            Find Your Next
                          </h1>
                          <h1 className="text-xl font-bold mb-3">
                            Construction Project
                          </h1>
                          <p className="text-xs text-white/90 px-2">
                            Start by selecting your project location and type.
                          </p>
                        </div>

                        {/* Search Form */}
                        <div className="space-y-3 px-2">
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Enter a city, county or zip"
                              className="w-full px-4 py-2.5 rounded-full bg-white text-gray-900 placeholder-gray-500 text-xs border-2 border-white focus:outline-none focus:border-blue-300"
                            />
                          </div>

                          <div className="relative">
                            <input
                              type="text"
                              placeholder="What type of project?"
                              className="w-full px-4 py-2.5 rounded-full bg-white text-gray-900 placeholder-gray-500 text-xs border-2 border-white focus:outline-none focus:border-blue-300"
                            />
                          </div>

                          <div className="flex justify-center pt-2">
                            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2.5 px-6 rounded-full flex items-center space-x-2 shadow-lg text-sm">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                              </svg>
                              <span>Search</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Search by Strategy */}
                      <div className="text-center pb-4">
                        <p className="text-white font-semibold text-base">
                          Search by Strategy
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="bg-white p-3">
                    <h3 className="text-base font-semibold text-gray-900 text-center">
                      My Saved Projects
                    </h3>
                  </div>

                  {/* iOS Safari Navigation */}
                  <div className="bg-gray-100 px-3 py-2 flex justify-between items-center">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 text-lg">+</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 text-xs font-bold">4</span>
                    </div>
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  {/* iOS Home Indicator */}
                  <div className="bg-white pb-2 flex justify-center">
                    <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to manage construction projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small renovations to large commercial developments, BlueSQ
              provides the tools and insights you need to deliver projects on
              time and on budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-transparent hover:border-bluesq-200 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-bluesq-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-bluesq-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-bluesq-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-bluesq-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">25%</div>
              <div className="text-bluesq-100">Average Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-bluesq-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-bluesq-100">Construction Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by construction professionals
            </h2>
            <p className="text-xl text-gray-600">
              See what industry leaders are saying about BlueSQ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business size and needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl">Starter</CardTitle>
                <CardDescription>Perfect for small contractors</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Up to 5 projects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>5 team members</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Basic reporting</span>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-bluesq-600 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-bluesq-600">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl">Professional</CardTitle>
                <CardDescription>
                  For growing construction companies
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Unlimited projects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>25 team members</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Mobile app</span>
                </div>
                <Button className="w-full mt-6 bg-bluesq-600 hover:bg-bluesq-700">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <CardDescription>For large construction firms</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Everything in Professional</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Unlimited team members</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom integrations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Dedicated support</span>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-yellow-50">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl">Premium Package</CardTitle>
                <CardDescription>Custom solutions & add-ons</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-orange-600">
                    Custom
                  </span>
                  <p className="text-sm text-gray-600 mt-1">
                    Contact for pricing
                  </p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Everything in Enterprise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom add-ons</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>White-label solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Enterprise SLA</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Priority support</span>
                </div>
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bluesq-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to transform your construction business?
          </h2>
          <p className="text-xl text-bluesq-100 mb-8">
            Join thousands of construction professionals who trust BlueSQ to
            manage their projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-bluesq-600 hover:bg-gray-100"
            >
              Start Your Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-bluesq-600"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img
                src="https://cdn.builder.io/api/v1/assets/73cef5d45d4148daa57a98053c90e59f/group-3-ebd4f7?format=webp&width=800"
                alt="BlueSQ Logo"
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mb-4">
                Making construction smarter, one project at a time.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3" />
                  <span>1-800-BLUESQ</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3" />
                  <span>hello@bluesq.pro</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BlueSQ. All rights reserved. Building Made Smart.</p>
          </div>
        </div>
      </footer>

      {/* AI Chat Agent */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-bluesq-600 hover:bg-bluesq-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Live AI Assistant
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );
}
