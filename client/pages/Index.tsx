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
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

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
                href="/about"
                className="text-gray-700 hover:text-bluesq-600 transition-colors"
              >
                About
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
              {/* Classic iPhone Frame */}
              <div className="relative w-72 mx-auto">
                {/* Phone Bezel/Frame */}
                <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10"></div>

                    {/* Status Bar */}
                    <div className="bg-white px-6 py-3 flex justify-between items-center text-black text-xs font-semibold pt-8">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                        </svg>
                        <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                        </svg>
                        <svg className="w-5 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 7h-8v2h8V7zm-8 6h8v2h-8zm-2 6h14V3H9m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                        </svg>
                      </div>
                    </div>

                    {/* URL Bar */}
                    <div className="bg-gray-100 px-6 py-2 text-center">
                      <span className="text-xs text-gray-600">🔒 app.bluesq.pro</span>
                    </div>

                    {/* Main Content with Background */}
                    <div className="relative bg-gradient-to-b from-bluesq-600 to-bluesq-800 min-h-[480px] flex flex-col">
                      <div className="relative p-4 text-white h-full flex flex-col justify-between">
                        <div>
                          {/* BlueSQ Logo */}
                          <div className="mb-6 flex justify-center pt-2">
                            <img
                              src="https://cdn.builder.io/api/v1/assets/73cef5d45d4148daa57a98053c90e59f/group-3-ebd4f7?format=webp&width=800"
                              alt="BlueSQ Logo"
                              className="h-7 w-auto brightness-0 invert"
                            />
                          </div>

                          {/* Main Heading */}
                          <div className="text-center mb-6">
                            <h1 className="text-lg font-bold mb-1">Find Your Next</h1>
                            <h1 className="text-lg font-bold mb-3">Construction Project</h1>
                            <p className="text-xs text-white/90 px-2">
                              Start by selecting your project location and type.
                            </p>
                          </div>

                          {/* Search Form */}
                          <div className="space-y-2 px-2">
                            <div className="relative">
                              <input
                                type="text"
                                placeholder="Enter a city, county or zip"
                                className="w-full px-3 py-2 rounded-full bg-white text-gray-900 placeholder-gray-500 text-xs border-2 border-white focus:outline-none focus:border-blue-300"
                              />
                            </div>

                            <div className="relative">
                              <input
                                type="text"
                                placeholder="What type of project?"
                                className="w-full px-3 py-2 rounded-full bg-white text-gray-900 placeholder-gray-500 text-xs border-2 border-white focus:outline-none focus:border-blue-300"
                              />
                            </div>

                            <div className="flex justify-center pt-2">
                              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-full flex items-center space-x-2 shadow-lg text-xs">
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
                          <p className="text-white font-semibold text-xs">Search by Strategy</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="bg-white p-2">
                      <h3 className="text-sm font-semibold text-gray-900 text-center">
                        My Saved Projects
                      </h3>
                    </div>

                    {/* iOS Safari Navigation */}
                    <div className="bg-gray-100 px-3 py-2 flex justify-between items-center">
                      <svg
                        className="w-5 h-5 text-gray-600"
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
                        className="w-5 h-5 text-gray-400"
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
                      <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                        <span className="text-gray-600 text-xs">+</span>
                      </div>
                      <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-bold">4</span>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-600"
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
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
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
                aria-pressed={billingCycle === "monthly"}
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
                aria-pressed={billingCycle === "yearly"}
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
                          <span className="text-4xl font-bold">${""}{displayPrice}</span>
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
                <Card className="h-full border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-yellow-50">
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
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white" disabled>Coming soon</Button>
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
                      <span className="text-3xl font-bold">${""}{
                        billingCycle === "monthly"
                          ? 499
                          : Math.round(499 * (1 - discountRate))
                      }</span>
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
                    <Button className="w-full mt-6" variant="outline">Contact Sales</Button>
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
