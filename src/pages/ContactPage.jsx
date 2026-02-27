import { useState } from 'react'
import {
    FiPhone, FiMail, FiShield, FiCheckCircle,
    FiAlertTriangle, FiUser, FiMessageSquare, FiSend
} from 'react-icons/fi'
import './ContactPage.css'

const scamTypes = [
    'Phishing / Fake Email or Website',
    'Romance Scam',
    'Investment / Crypto Scam',
    'Online Banking Fraud / OTP Theft',
    'Advance-Fee / Lottery Scam',
    'Recovery Scam (Paid to get money back)',
    'Fake Job Offer',
    'Identity Theft',
    'Not Sure / Other',
]

const faqs = [
    {
        q: 'Is this consultation really free?',
        a: 'Yes, completely. We offer a free 15-minute initial consultation via email or call. There are no hidden fees, no subscriptions, and we will never ask you to pay to recover your money.',
    },
    {
        q: 'Can you guarantee my money will be recovered?',
        a: 'No — and anyone who guarantees fund recovery is likely running a recovery scam themselves. We will tell you the honest truth about your situation and guide you to the best real steps available.',
    },
    {
        q: 'I am embarrassed to talk about it. Will my information be kept private?',
        a: 'Absolutely. Everything you share is treated with complete confidentiality. You have nothing to be ashamed of — these are professional criminal operations that exploit trust.',
    },
    {
        q: 'How quickly will you respond?',
        a: 'We aim to respond within 24–48 hours on weekdays. For urgent situations involving active scam pressure, note that in your message.',
    },
    {
        q: 'My family does not know I was scammed. Do I have to tell them?',
        a: 'No. Your consultation is entirely private. However, we do recommend having a trusted person aware for emotional support — being scammed is a traumatic experience.',
    },
]

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', scamType: '', message: '', urgent: false })
    const [submitted, setSubmitted] = useState(false)
    const [openFaq, setOpenFaq] = useState(null)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="contact-page">
            {/* HEADER */}
            <section className="page-hero">
                <div className="page-hero__glow" aria-hidden="true" />
                <div className="container">
                    <div className="badge"><FiPhone /> Free Consultation</div>
                    <h1 className="section-title" style={{ maxWidth: '700px' }}>
                        Get Personal Help from a <span>Cybersecurity Expert</span>
                    </h1>
                    <p className="section-sub">
                        Not sure what step to take next? Describe your situation privately and receive straightforward, expert guidance — for free, with no strings attached.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* FORM */}
                        <div className="contact-form-wrap">
                            <div className="alert-box alert-green" style={{ marginBottom: '28px', borderRadius: 'var(--radius-md)' }}>
                                <FiCheckCircle style={{ color: 'var(--green)', flexShrink: 0, fontSize: '1.2rem' }} />
                                <div>
                                    <strong>Completely free and confidential.</strong> We will never ask for payment, and everything you share stays private.
                                </div>
                            </div>

                            {!submitted ? (
                                <form
                                    className="contact-form"
                                    action="https://formsubmit.co/scamvypro@gmail.com"
                                    method="POST"
                                    id="consultation-form"
                                >
                                    {/* FormSubmit Configuration */}
                                    <input type="hidden" name="_subject" value="New Consultation Request - Scamvy" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_next" value={window.location.href} />

                                    <div className="form-group">
                                        <label htmlFor="name"><FiUser /> Your Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Full name or use a pseudonym — your choice"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email"><FiMail /> Email Address</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone"><FiPhone /> Phone (optional)</label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+1 555 000 0000"
                                                value={form.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="scamType"><FiAlertTriangle /> Type of Scam</label>
                                        <select
                                            id="scamType"
                                            name="scamType"
                                            value={form.scamType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select the type that best fits your situation</option>
                                            {scamTypes.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message"><FiMessageSquare /> Describe Your Situation</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            placeholder="Tell us what happened. Include: when it occurred, how much was involved, what platform or method was used, and what actions have been taken so far. The more detail, the more specific our guidance."
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-checkbox">
                                        <input
                                            id="urgent"
                                            name="urgent"
                                            type="checkbox"
                                            checked={form.urgent}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="urgent">
                                            This is urgent — I am currently being pressured by a scammer
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary contact-submit" id="form-submit-btn">
                                        <FiSend /> Send for Free Review
                                    </button>

                                    <p className="form-disclaimer">
                                        By submitting, you agree that your information is used solely to respond to your enquiry.
                                        We do not share, sell, or misuse your data. Ever.
                                    </p>
                                </form>
                            ) : (
                                <div className="form-success fade-up">
                                    <FiCheckCircle className="form-success__icon" />
                                    <h3>Message Received</h3>
                                    <p>
                                        Thank you for reaching out. We will review your situation and respond within 24–48 hours.
                                        If your situation is urgent, check our <strong>Recovery Guide</strong> for immediate steps you can take right now.
                                    </p>
                                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                                        <a href="/recovery" className="btn btn-primary">View Recovery Guide</a>
                                        <a href="/red-flags" className="btn btn-outline">Check Red Flags</a>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* SIDEBAR */}
                        <div className="contact-sidebar">
                            <div className="card sidebar-card">
                                <div className="sidebar-badge"><FiShield /></div>
                                <h3>What to Expect</h3>
                                <ul className="sidebar-list">
                                    <li><FiCheckCircle /> Response within 24–48 hours</li>
                                    <li><FiCheckCircle /> Honest, unbiased assessment</li>
                                    <li><FiCheckCircle /> Specific next steps for your situation</li>
                                    <li><FiCheckCircle /> Zero cost — truly free</li>
                                    <li><FiCheckCircle /> Complete confidentiality</li>
                                </ul>
                            </div>

                            <div className="card sidebar-card sidebar-card--gold">
                                <h4>Direct Contact</h4>
                                <a href="mailto:scamvypro@gmail.com" className="sidebar-contact-link">
                                    <FiMail /> scamvypro@gmail.com
                                </a>
                                <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', marginTop: '10px' }}>
                                    For extremely urgent situations or if the form is not working.
                                </p>
                            </div>

                            <div className="card sidebar-card">
                                <h4>While You Wait</h4>
                                <div className="sidebar-links">
                                    <a href="/recovery" className="sidebar-nav-link">→ Recovery Guide</a>
                                    <a href="/red-flags" className="sidebar-nav-link">→ Red Flags Checklist</a>
                                    <a href="/report" className="sidebar-nav-link">→ Report to Authorities</a>
                                    <a href="/scam-types" className="sidebar-nav-link">→ Identify Your Scam</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="faq-section">
                        <h2 className="section-title" style={{ marginBottom: '32px' }}>Frequently Asked <span>Questions</span></h2>
                        <div className="faq-list">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}
                                    id={`faq-${i}`}
                                >
                                    <button className="faq-item__q" onClick={() => setOpenFaq(v => v === i ? null : i)}>
                                        {faq.q}
                                        <span className="faq-chevron">{openFaq === i ? '−' : '+'}</span>
                                    </button>
                                    {openFaq === i && (
                                        <div className="faq-item__a fade-up">{faq.a}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
