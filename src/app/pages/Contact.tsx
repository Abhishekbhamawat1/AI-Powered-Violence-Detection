import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, CheckCircle2, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@aiviolencedetection.com',
      description: 'We typically respond within 24 hours',
      color: 'blue',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Monday to Friday, 9AM - 6PM EST',
      color: 'green',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Security Drive, Tech City, CA 94025',
      description: 'Schedule an appointment',
      color: 'purple',
    },
  ];

  const features = [
    { icon: Clock, text: '24/7 Technical Support' },
    { icon: Shield, text: 'Enterprise Security' },
    { icon: Globe, text: 'Global Coverage' },
    { icon: MessageCircle, text: 'Dedicated Account Manager' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-gray-200/50 shadow-lg shadow-blue-100/50">
              <MessageCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Get in Touch</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Contact Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to our team and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all border border-gray-100 h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${info.color}-500 to-${info.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Send us a Message</h2>
                <p className="text-blue-100">Fill out the form below and we'll get back to you shortly</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-700 font-semibold mb-2 block">
                    Company / Organization
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-semibold mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your security needs..."
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="p-2 bg-blue-200 rounded-lg">
                      <feature.icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <span className="text-blue-900 font-medium">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Clock className="w-6 h-6 text-blue-600" />
                <span>Business Hours</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center space-x-2 text-green-800">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">24/7 Emergency Support Available</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900 font-medium flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all" />
                    <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900 font-medium flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all" />
                    <span>API Reference</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900 font-medium flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all" />
                    <span>FAQ</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-700 hover:text-purple-900 font-medium flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all" />
                    <span>Support Center</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}