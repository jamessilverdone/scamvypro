import { Link } from 'react-router-dom'
import { FiAlertTriangle, FiCheckCircle, FiXCircle, FiSearch, FiArrowRight } from 'react-icons/fi'
import './RedFlagsPage.css'

const categories = [
    {
        title: '🚩 Universal Scam Red Flags',
        color: '#FF4C4C',
        flags: [
            { bad: true, text: '"Guaranteed" returns on any investment. No legitimate investment can guarantee returns.' },
            { bad: true, text: 'Urgency pressure — "You must decide in the next 2 hours or lose this opportunity forever."' },
            { bad: true, text: 'Requests to pay a fee before you can receive or access your money.' },
            { bad: true, text: 'Asks you to buy gift cards (iTunes, Google Play, Amazon) as payment — this is a near-universal scam indicator.' },
            { bad: true, text: 'Requests to send cryptocurrency to an unlisted wallet address.' },
            { bad: true, text: '"Keep this strictly confidential" — legitimate deals never require secrecy from family.' },
            { bad: true, text: 'Unexpected winnings from a competition you never entered.' },
            { bad: false, text: 'Unsolicited contact from strangers offering opportunities — not always a scam, but always research carefully.' },
        ],
    },
    {
        title: '💬 Communication Red Flags',
        color: '#F0A500',
        flags: [
            { bad: true, text: 'Communication moves off official platforms to WhatsApp/Telegram very quickly.' },
            { bad: true, text: 'They refuse or always have excuses for why they cannot video call in real time.' },
            { bad: true, text: 'Sender email domain is slightly off from the real company (e.g. "amazon-verify.com" not "amazon.com").' },
            { bad: true, text: 'Generic greeting ("Dear Customer") instead of your actual name in official-looking emails.' },
            { bad: true, text: 'Grammar errors or odd phrasing in messages from major banks or companies.' },
            { bad: true, text: 'They know a lot about you — your name, location, employer — from social media research (doesn\'t mean they are legitimate).' },
            { bad: true, text: 'Phone number spoofing — the number shows as your bank\'s number but the person asks for OTP codes.' },
        ],
    },
    {
        title: '💰 Fake Investment Red Flags',
        color: '#22C55E',
        flags: [
            { bad: true, text: 'Returns of 10–30% per week promised with consistency. Realistic annual market returns are 7–10%.' },
            { bad: true, text: 'You must recruit others to earn — this is the structure of a Ponzi/MLM fraud.' },
            { bad: true, text: 'The platform is not registered with any financial regulator (FCA, SEC, CFTC, CySEC).' },
            { bad: true, text: 'Your account shows great profits on the dashboard but withdrawals are blocked by fees.' },
            { bad: true, text: 'The investment "platform" is only accessible through a private app link, not a major app store.' },
            { bad: true, text: '"My personal trading algorithm never loses" — no algorithm or trader has a 100% win rate.' },
            { bad: true, text: 'You are instructed to buy crypto and send it to a wallet to "fund your trading account."' },
            { bad: false, text: 'Celebrity endorsements in investment ads — deepfakes are extremely common. Always verify independently.' },
        ],
    },
    {
        title: '❤️ Romance Scam Red Flags',
        color: '#EC4899',
        flags: [
            { bad: true, text: 'Reverse image search of their profile photos returns stock images or a different person\'s social media.' },
            { bad: true, text: 'They fall deeply in love with you within days or a week of first contact.' },
            { bad: true, text: 'Always conveniently working abroad — military, oil rig, international doctor, etc.' },
            { bad: true, text: 'First money request is framed as an emergency: medical crisis, stuck at airport, customs held package.' },
            { bad: true, text: 'They always promise to come meet you "soon" but crises keep delaying the visit.' },
            { bad: true, text: '"I have never felt this way before" within days — manufactured emotional intensity.' },
            { bad: true, text: 'They ask for gift cards, crypto, or wire transfers — never something traceable like PayPal.' },
        ],
    },
    {
        title: '🏦 Banking & Identity Fraud Red Flags',
        color: '#00B4D8',
        flags: [
            { bad: true, text: 'Anyone — including someone claiming to be from your bank — asking for your PIN, OTP, or full card number.' },
            { bad: true, text: 'Requests to install remote access software (TeamViewer, AnyDesk) to "help" you.' },
            { bad: true, text: '"We need you to transfer money to a safe account" — banks never ask this. Ever.' },
            { bad: true, text: 'An email link to "verify your account" — go directly to the official website instead.' },
            { bad: true, text: 'SMS about a package you didn\'t order asking you to pay customs fees via a link.' },
            { bad: true, text: 'A call claiming your account has fraudulent activity and asking you to confirm details to "unfreeze" it.' },
        ],
    },
]

const safetyChecks = [
    { check: 'Is the company registered with the FCA (UK), SEC (US), or your country\'s financial regulator?', action: 'Check on the official regulator website. If not listed — do not invest.' },
    { check: 'Does the website have a valid SSL certificate and a clearly named domain?', action: 'Look for https:// and a reputable domain. Run the site through Google Safe Browsing.' },
    { check: 'Can you find independent, verifiable reviews on Trustpilot, Google, or BBB?', action: 'Scam operations rarely have genuine third-party reviews. Fabricated reviews are common.' },
    { check: 'Is there a real physical address and registered company number?', action: 'Search the company number on official business registries (Companies House, SEC EDGAR, etc.).' },
    { check: 'Have you been pressured to decide quickly or told the opportunity expires soon?', action: 'Any genuine financial product can wait for you to perform due diligence. Pressure = scam signal.' },
]

export default function RedFlagsPage() {
    return (
        <div className="red-flags">
            {/* HEADER */}
            <section className="page-hero">
                <div className="page-hero__glow" aria-hidden="true" />
                <div className="container">
                    <div className="badge" style={{ background: 'rgba(255,76,76,0.12)', borderColor: 'rgba(255,76,76,0.3)', color: '#FCA5A5' }}>
                        <FiAlertTriangle /> Fraud Detection
                    </div>
                    <h1 className="section-title" style={{ maxWidth: '750px' }}>
                        Spot a Scam in <span>Seconds</span> — The Complete Red Flags Guide
                    </h1>
                    <p className="section-sub">
                        These warning signs have been compiled from real fraud cases. If you recognise even two or three of these in any situation — treat it as a scam until proven otherwise by independent verification.
                    </p>
                </div>
            </section>

            {/* QUICK WIN BANNER */}
            <div className="container" style={{ marginBottom: '24px' }}>
                <div className="alert-box alert-gold">
                    <FiSearch style={{ fontSize: '1.4rem', flexShrink: 0, color: 'var(--gold)' }} />
                    <div>
                        <strong>The #1 Rule:</strong> If someone is asking you to pay money in order to receive money — stop immediately. This is never legitimate. Ever. The fee is the scam.
                    </div>
                </div>
            </div>

            {/* FLAG CATEGORIES */}
            <section className="section">
                <div className="container">
                    <div className="flags-list">
                        {categories.map((cat, i) => (
                            <div key={i} className="flag-category" style={{ '--cat-color': cat.color }}>
                                <h2 className="flag-category__title">{cat.title}</h2>
                                <div className="flag-items">
                                    {cat.flags.map((f, j) => (
                                        <div key={j} className={`flag-item ${f.bad ? 'flag-item--danger' : 'flag-item--warning'}`}>
                                            {f.bad
                                                ? <FiXCircle className="flag-icon flag-icon--danger" />
                                                : <FiAlertTriangle className="flag-icon flag-icon--warning" />
                                            }
                                            <span>{f.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INVESTMENT VERIFICATION */}
            <section className="section" style={{ background: 'rgba(0,180,216,0.04)', borderTop: '1px solid rgba(0,180,216,0.1)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="badge"><FiCheckCircle /> Verification Checklist</div>
                        <h2 className="section-title">Before You Invest: <span>5 Verification Steps</span></h2>
                        <p className="section-sub">Run every investment opportunity through these five checks before committing a single penny.</p>
                    </div>
                    <div className="verification-list">
                        {safetyChecks.map((item, i) => (
                            <div key={i} className="verification-item" id={`verify-${i}`}>
                                <div className="verification-item__num">{i + 1}</div>
                                <div>
                                    <p className="verification-item__q">{item.check}</p>
                                    <p className="verification-item__a"><FiArrowRight style={{ verticalAlign: 'middle', marginRight: '6px', color: 'var(--teal)' }} />{item.action}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="section-sm">
                <div className="container" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/scam-types" className="btn btn-outline">Detailed Scam Types <FiArrowRight /></Link>
                    <Link to="/recovery" className="btn btn-primary">I Was Scammed — Help Me <FiArrowRight /></Link>
                </div>
            </section>
        </div>
    )
}
