import { Link } from 'react-router-dom'
import {
    FiShield, FiAlertTriangle, FiDollarSign, FiSearch,
    FiFlag, FiPhone, FiArrowRight, FiCheckCircle, FiUsers, FiGlobe
} from 'react-icons/fi'
import './HomePage.css'

const stats = [
    { value: '$10B+', label: 'Lost globally to scams in 2024', icon: <FiDollarSign /> },
    { value: '3.4M+', label: 'Fraud reports filed in the US alone (2023)', icon: <FiUsers /> },
    { value: '70%', label: 'Of victims never recover their money without early action', icon: <FiAlertTriangle /> },
    { value: '180+', label: 'Countries affected by cross-border online fraud', icon: <FiGlobe /> },
]

const quickLinks = [
    {
        icon: <FiAlertTriangle />,
        title: 'Scam Types',
        desc: 'Phishing, romance scams, bank fraud, fake investments — learn exactly how each one works.',
        to: '/scam-types',
        color: '#FF4C4C',
    },
    {
        icon: <FiDollarSign />,
        title: 'Recovery Guide',
        desc: 'Step-by-step instructions to dispute charges, report to authorities, and avoid recovery scams.',
        to: '/recovery',
        color: '#22C55E',
    },
    {
        icon: <FiSearch />,
        title: 'Red Flags',
        desc: 'Instant checklist to spot fake investments, fraudulent platforms, and scammer tactics.',
        to: '/red-flags',
        color: '#F0A500',
    },
    {
        icon: <FiFlag />,
        title: 'Report a Scam',
        desc: 'Curated list of real global agencies where you can report fraud and get official help.',
        to: '/report',
        color: '#00B4D8',
    },
]

const expertise = [
    'Phishing & Social Engineering Analysis',
    'Financial Fraud Investigation',
    'Crypto Scam Tracing & Reporting',
    'Romance & Investment Scam Profiling',
    'Victim Legal Referral Guidance',
    'Digital Evidence Preservation',
]

export default function HomePage() {
    return (
        <div className="home">
            {/* HERO */}
            <section className="hero">
                <div className="hero__bg-glow" aria-hidden="true" />
                <div className="hero__bg-grid" aria-hidden="true" />
                <div className="container hero__content fade-up">
                    <div className="badge"><FiShield /> Trusted Cybersecurity Expertise</div>
                    <h1 className="hero__title">
                        You Were Scammed.<br />
                        <span>We Help You Fight Back.</span>
                    </h1>
                    <p className="hero__subtitle">
                        Expert guidance to identify online scams, protect your finances, and take the right steps to recover — without paying scammers a single cent more.
                    </p>
                    <div className="hero__actions">
                        <Link to="/recovery" className="btn btn-gold" id="hero-recovery-btn">
                            <FiDollarSign /> How to Recover Your Money
                        </Link>
                        <Link to="/scam-types" className="btn btn-outline" id="hero-scams-btn">
                            Identify Your Scam <FiArrowRight />
                        </Link>
                    </div>
                    <div className="hero__trust">
                        <FiCheckCircle /> <span>No fake promises.</span>
                        <FiCheckCircle /> <span>No recovery fees.</span>
                        <FiCheckCircle /> <span>100% free expert education.</span>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="stats-bar">
                <div className="container stats-bar__grid">
                    {stats.map((s, i) => (
                        <div key={i} className="stat-card fade-up">
                            <div className="stat-card__icon">{s.icon}</div>
                            <div className="stat-card__value">{s.value}</div>
                            <div className="stat-card__label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ABOUT */}
            <section className="section about">
                <div className="container about__inner">
                    <div className="about__text">
                        <div className="badge"><FiShield /> About This Platform</div>
                        <h2 className="section-title">Real Expert. Real Help. <span>No Nonsense.</span></h2>
                        <p className="section-sub">
                            With decades of hands-on experience in cybersecurity and digital forensics, I have helped hundreds of victims navigate the aftermath of online fraud. This platform exists for one purpose: <strong>to give you the tools and knowledge scammers hope you never find.</strong>
                        </p>
                        <p style={{ color: 'var(--text-muted)', marginTop: '14px', lineHeight: '1.8' }}>
                            Scammers rely on your panic, your shame, and misinformation. This site cuts through all of that with
                            clear, actionable, expert-backed information — what to do, what not to do, and exactly who to contact.
                        </p>
                        <div className="about__expertise">
                            {expertise.map((e, i) => (
                                <div key={i} className="about__exp-item">
                                    <FiCheckCircle className="about__exp-icon" /> {e}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about__visual">
                        <div className="about__shield-wrap">
                            <FiShield className="about__shield-icon" />
                            <div className="about__shield-ring about__shield-ring--1" />
                            <div className="about__shield-ring about__shield-ring--2" />
                            <div className="about__shield-ring about__shield-ring--3" />
                        </div>
                        <div className="about__badge-card">
                            <FiCheckCircle style={{ color: 'var(--green)' }} />
                            <span>Certified Cybersecurity Expert</span>
                        </div>
                        <div className="about__badge-card about__badge-card--gold">
                            <FiShield style={{ color: 'var(--gold)' }} />
                            <span>Decades of Field Experience</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* WARNING BOX */}
            <section className="section-sm">
                <div className="container">
                    <div className="alert-box alert-red">
                        <FiAlertTriangle style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '2px', color: '#FF4C4C' }} />
                        <div>
                            <strong>If someone claiming to be a "recovery agent" is asking you to pay a fee to get your money back — STOP.</strong>
                            {' '}This is a <em>recovery scam</em>, one of the most common secondary scams targeting fraud victims. Legitimate recovery processes never require upfront payment. Read our <Link to="/recovery" style={{ color: 'var(--teal)' }}>full guide</Link> before taking action.
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK LINKS */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge"><FiSearch /> Complete Resources</div>
                        <h2 className="section-title">Everything You Need to <span>Protect Yourself</span></h2>
                        <p className="section-sub">Four powerful guides covering every angle — from identifying scams before they happen, to taking legal action after.</p>
                    </div>
                    <div className="grid-4">
                        {quickLinks.map((q, i) => (
                            <Link key={i} to={q.to} className="quick-card" id={`quick-card-${i}`} style={{ '--qc-color': q.color }}>
                                <div className="quick-card__icon">{q.icon}</div>
                                <h3 className="quick-card__title">{q.title}</h3>
                                <p className="quick-card__desc">{q.desc}</p>
                                <div className="quick-card__arrow"><FiArrowRight /></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="section-sm">
                <div className="container">
                    <div className="cta-banner">
                        <div className="cta-banner__text">
                            <h2>Not sure if you&apos;ve been scammed?</h2>
                            <p>Get a free 15-minute consultation with a cybersecurity expert. We will review your situation and tell you exactly what to do next.</p>
                        </div>
                        <Link to="/contact" className="btn btn-gold" id="cta-consult-btn">
                            <FiPhone /> Book Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
