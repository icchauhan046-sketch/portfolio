import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const API_ENDPOINT = 'http://localhost:5000/api/contact';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const contactInfo = [
    { icon: <Phone className="text-primary-500" />, label: 'Phone Call', value: '+91 6352264289', href: 'tel:+916352264289' },
    { icon: <Mail className="text-accentCyan" />, label: 'Email Me', value: 'icchauhan046@gmail.com', href: 'mailto:icchauhan046@gmail.com' },
    { icon: <MapPin className="text-pink-500" />, label: 'Home Address', value: 'Ahmedabad, Gujarat, India', href: '#' }
  ];

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      errors.message = 'Message must be under 1000 characters';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setStatus('loading');
    setFormErrors({});

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setStatusMessage(data.message || 'Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.errors ? data.errors.map(err => err.msg).join(', ') : (data.message || 'Failed to submit form.'));
      }
    } catch (error) {
      console.error('Contact submit error:', error);
      setStatus('error');
      setStatusMessage('Unable to connect to the backend server. Make sure the Node server is running.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-darkBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">Contact</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Get In Touch</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accentCyan mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl shadow-xl flex-1 flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Feel free to reach out directly via call, email, or by filling out the message form. I will respond to your queries as soon as possible.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <a 
                    key={idx}
                    href={info.href} 
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-900 border border-slate-100 dark:border-slate-800/40 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-950 flex items-center justify-center shadow-sm shrink-0">
                      {info.icon}
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">{info.label}</div>
                      <div className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-200 truncate">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl shadow-xl bg-white dark:bg-slate-950">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Message</h4>
              
              {/* Status Alert */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-500/10 flex items-start space-x-3 text-sm">
                  <CheckCircle2 className="shrink-0 text-emerald-500 mt-0.5" size={18} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300 border border-rose-200/50 dark:border-rose-500/10 flex items-start space-x-3 text-sm">
                  <AlertCircle className="shrink-0 text-rose-500 mt-0.5" size={18} />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="e.g. Chauhan Ishan"
                      className={`px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/25 focus:border-primary-500 transition-colors ${
                        formErrors.name ? 'border-rose-400 dark:border-rose-500/40' : 'border-slate-200 dark:border-slate-800/60'
                      }`}
                    />
                    {formErrors.name && <span className="text-xs font-medium text-rose-500 dark:text-rose-400 mt-1 ml-1">{formErrors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="e.g. name@domain.com"
                      className={`px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/25 focus:border-primary-500 transition-colors ${
                        formErrors.email ? 'border-rose-400 dark:border-rose-500/40' : 'border-slate-200 dark:border-slate-800/60'
                      }`}
                    />
                    {formErrors.email && <span className="text-xs font-medium text-rose-500 dark:text-rose-400 mt-1 ml-1">{formErrors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    placeholder="e.g. Internship Query"
                    className={`px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/25 focus:border-primary-500 transition-colors ${
                      formErrors.subject ? 'border-rose-400 dark:border-rose-500/40' : 'border-slate-200 dark:border-slate-800/60'
                    }`}
                  />
                  {formErrors.subject && <span className="text-xs font-medium text-rose-500 dark:text-rose-400 mt-1 ml-1">{formErrors.subject}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Message Body</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className={`px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/25 focus:border-primary-500 transition-colors resize-none ${
                      formErrors.message ? 'border-rose-400 dark:border-rose-500/40' : 'border-slate-200 dark:border-slate-800/60'
                    }`}
                  ></textarea>
                  {formErrors.message && <span className="text-xs font-medium text-rose-500 dark:text-rose-400 mt-1 ml-1">{formErrors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-600 shadow-md shadow-primary-500/10 hover:shadow-primary-500/25 focus:outline-none transition-all duration-300 flex items-center justify-center space-x-2 text-sm disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Form</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
