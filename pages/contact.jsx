// pages/contact.jsx
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'general', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@yourlifecalc.com?subject=${encodeURIComponent(form.subject + ': ' + form.name)}&body=${encodeURIComponent('Name: ' + form.name + '\nEmail: ' + form.email + '\n\nMessage:\n' + form.message)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us | LifeCalc</title>
        <meta name="description" content="Get in touch with the LifeCalc team. Report a bug, suggest a new calculator, or ask a question about our free financial tools." />
        <link rel="canonical" href="https://www.yourlifecalc.com/contact" />
      </Head>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Contact</span>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-3">Contact Us</h1>
          <p className="text-slate-600">Have a question, suggestion, or found a bug? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: '🐛', title: 'Report a Bug', desc: 'Found something that isn\'t calculating correctly?' },
            { icon: '💡', title: 'Suggest a Calculator', desc: 'Have an idea for a new financial tool?' },
            { icon: '❓', title: 'General Question', desc: 'Anything else on your mind?' },
          ].map((item, i) => (
            <div key={i} className="calc-card text-center">
              <span className="text-3xl block mb-2">{item.icon}</span>
              <p className="font-semibold text-slate-900 text-sm mb-1">{item.title}</p>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {!submitted ? (
          <div className="calc-card">
            <h2 className="text-xl font-display font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Pat Smith" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                <select name="subject" value={form.subject} onChange={handleChange} className="input-field">
                  <option value="general">General Question</option>
                  <option value="bug">Bug Report</option>
                  <option value="suggestion">Calculator Suggestion</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us what's on your mind..." className="input-field resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full">Send Message →</button>
            </form>
            <p className="text-xs text-slate-400 mt-4 text-center">This will open your email client. We typically respond within 1-2 business days.</p>
          </div>
        ) : (
          <div className="calc-card text-center py-12">
            <span className="text-5xl mb-4 block">✅</span>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Message Ready!</h2>
            <p className="text-slate-600 mb-6">Your email client should have opened. We'll get back to you within 1-2 business days.</p>
            <Link href="/" className="btn-primary inline-flex items-center gap-2">← Back to Calculators</Link>
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-xl font-display font-bold text-slate-900 mb-4">Quick Answers</h2>
          <div className="space-y-3">
            {[
              { q: 'Are the calculators really free?', a: 'Yes, completely free. No signup, no credit card, no trial period.' },
              { q: 'Is my financial data stored anywhere?', a: 'No. All calculations happen in your browser. Your inputs are saved locally on your device only and never sent to any server.' },
              { q: 'How accurate are the results?', a: 'Our calculators use standard financial formulas. Results are estimates — actual loan terms and costs will vary by lender and your individual financial situation.' },
              { q: 'Can I suggest a new calculator?', a: 'Absolutely! Use the contact form above and select "Calculator Suggestion." We prioritize features based on user requests.' },
            ].map((item, i) => (
              <div key={i} className="calc-card">
                <p className="font-semibold text-slate-900 text-sm mb-1">{item.q}</p>
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
