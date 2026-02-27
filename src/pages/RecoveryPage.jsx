import { Link } from 'react-router-dom'
import {
    FiDollarSign, FiAlertTriangle, FiCheckCircle, FiXCircle,
    FiCamera, FiFileText, FiPhone, FiGlobe, FiShield, FiCpu, FiArrowRight, FiHeart
} from 'react-icons/fi'
import './RecoveryPage.css'

const steps = [
    {
        number: '01',
        icon: <FiXCircle />,
        color: '#FF4C4C',
        title: 'Stop All Contact Immediately',
        points: [
            'Do NOT respond to the scammer any further — not to argue, not to demand your money back.',
            'Block the scammer on all platforms (WhatsApp, email, phone, social media).',
            'Do not follow any further instructions from them — every new instruction is designed to extract more from you.',
            'Cutting contact is urgent because scammers will try to gaslight you or introduce a "supervisor" who will attempt to collect even more.',
        ],
        warning: 'Scammers often manufacture a final "last chance" offer to keep you engaged. Reject it completely.',
    },
    {
        number: '02',
        icon: <FiCamera />,
        color: '#F0A500',
        title: 'Document and Preserve All Evidence',
        points: [
            'Screenshot every single conversation — WhatsApp, email threads, Telegram messages, social posts, dating app chats.',
            'Save all transaction receipts, bank statements, wire transfer confirmations, crypto transaction hashes.',
            'Record phone numbers, email addresses, usernames, profile photos, and platform names.',
            'Export chat histories as files if the platform allows it.',
            'Note the dates and times of all key interactions.',
        ],
        warning: 'Do this immediately — scammers delete accounts and platforms go dark. Evidence gathered quickly is your most valuable asset.',
    },
    {
        number: '03',
        icon: <FiPhone />,
        color: '#00B4D8',
        title: 'Contact Your Bank or Payment Provider',
        points: [
            'Call the number on the back of your card or your bank\'s official website — immediately.',
            'Report the fraud and request a chargeback for any card or bank transfer payments.',
            'If you paid via wire transfer, ask the bank to attempt a "recall" — speed is critical here.',
            'If you used PayPal, Cash App, or similar, file a dispute through their official fraud reporting channels.',
            'Ask them to flag your account for monitoring in case the scammer attempts further access.',
        ],
        warning: null,
        info: 'Chargebacks can be successful for credit card and some debit card transactions. Wire transfers and cash app payments are harder to recover — but still worth reporting. Act within 24–72 hours for the best chance.',
    },
    {
        number: '04',
        icon: <FiGlobe />,
        color: '#22C55E',
        title: 'Report to Official Authorities',
        points: [
            'File a report with your national fraud reporting body (see our Report page for exact links).',
            'Contact your local police and obtain a crime reference number — you will need this for bank disputes.',
            'If crypto was involved, report to blockchain analytics firms (Chainalysis tips) and include transaction hashes.',
            'Report the fraudulent website to Google Safe Browsing, browser vendors, and your country\'s cybercrime unit.',
            'If the scam crossed international borders, file with Interpol\'s cybercrime division.',
        ],
        warning: null,
        info: 'Reporting may not immediately recover your funds, but it creates a paper trail that helps law enforcement build cases — and stops others from being victimized.',
    },
    {
        number: '05',
        icon: <FiDollarSign />,
        color: '#8B5CF6',
        title: 'Crypto Payments — A Realistic Guide',
        points: [
            'Unlike bank transfers, crypto transactions are generally irreversible once confirmed on the blockchain.',
            'However: save every wallet address, transaction ID (TXID/hash), and platform the scammer used.',
            'File a report with law enforcement including these details — blockchain forensics can trace fund movement.',
            'Regulated cryptocurrency exchanges (Coinbase, Binance, Kraken) cooperate with law enforcement freeze orders.',
            'If your crypto went through a centralized exchange, include that exchange in your police report.',
        ],
        warning: 'Be extremely cautious of third-party services claiming they can "trace and recover" your crypto for a fee — 99% of these are recovery scams. Use only officially regulated forensics firms.',
    },
    {
        number: '06',
        icon: <FiHeart />,
        color: '#EC4899',
        title: 'Emotional Recovery & Support',
        points: [
            'Being scammed is not your fault — these are sophisticated, well-practised criminal operations.',
            'Shame and embarrassment are normal but keep victims from reporting, enabling scammers to hurt others.',
            'Talk to someone you trust — isolation makes recovery harder.',
            'Victims services and fraud support organizations offer confidential counselling.',
            'Many banks have specialist teams trained to support fraud victims with empathy.',
        ],
        warning: null,
        info: 'Your mental recovery is just as important as the financial one. Scammers often target emotional connections deliberately. Healing takes time.',
    },
]

const neverPay = [
    {
        title: 'Transfer Fees',
        desc: 'If someone says your money is "ready" but you need to pay a transfer fee to release it — this is always a lie. No legitimate payment system works this way.',
        icon: <FiDollarSign />,
    },
    {
        title: 'Tax Clearance Fees',
        desc: '"Your $50,000 transfer requires a $2,000 tax clearance payment." This invented fee is a classic advance-fee fraud tactic. There is no transfer.',
        icon: <FiFileText />,
    },
    {
        title: 'Recovery Agent Upfront Fees',
        desc: 'A "recovery specialist" charging you to get your money back is running a secondary scam. Real legal processes do not operate on upfront cash payments to strangers.',
        icon: <FiShield />,
    },
    {
        title: 'Crypto Wallet Charges',
        desc: '"Send 0.1 ETH to activate your account balance." Your balance does not exist. No platform requires you to send crypto to receive crypto.',
        icon: <FiCpu />,
    },
]

export default function RecoveryPage() {
    return (
        <div className="recovery">
            {/* HEADER */}
            <section className="page-hero">
                <div className="page-hero__glow" aria-hidden="true" />
                <div className="container">
                    <div className="badge"><FiDollarSign /> Recovery Guide</div>
                    <h1 className="section-title" style={{ maxWidth: '750px' }}>
                        How to <span>Recover Your Money</span> After Being Scammed
                    </h1>
                    <p className="section-sub">
                        Follow these expert-recommended steps immediately. The sooner you act, the higher your chances of recovering funds and preventing further loss.
                    </p>
                </div>
            </section>

            {/* URGENT ALERT */}
            <div className="container" style={{ marginBottom: '20px' }}>
                <div className="alert-box alert-red">
                    <FiAlertTriangle style={{ fontSize: '1.5rem', flexShrink: 0, color: '#FF4C4C' }} />
                    <div>
                        <strong>If someone is currently pressuring you to send money or pay fees to receive money — stop immediately.</strong>
                        {' '}Read Step 1 and Step 6 (below) before doing anything else.
                    </div>
                </div>
            </div>

            {/* STEPS */}
            <section className="section">
                <div className="container">
                    <div className="recovery-steps">
                        {steps.map((step, i) => (
                            <div key={i} className="recovery-step" id={`step-${i + 1}`} style={{ '--step-color': step.color }}>
                                <div className="recovery-step__number">{step.number}</div>
                                <div className="recovery-step__content">
                                    <div className="recovery-step__header">
                                        <div className="recovery-step__icon">{step.icon}</div>
                                        <h3 className="recovery-step__title">{step.title}</h3>
                                    </div>
                                    <ul className="recovery-step__list">
                                        {step.points.map((p, j) => (
                                            <li key={j}><FiCheckCircle className="rs-check" /> {p}</li>
                                        ))}
                                    </ul>
                                    {step.warning && (
                                        <div className="alert-box alert-red" style={{ marginTop: '16px', fontSize: '0.9rem' }}>
                                            <FiAlertTriangle style={{ color: '#FF4C4C', flexShrink: 0 }} />
                                            <span>{step.warning}</span>
                                        </div>
                                    )}
                                    {step.info && (
                                        <div className="alert-box alert-teal" style={{ marginTop: '16px', fontSize: '0.9rem' }}>
                                            <FiCheckCircle style={{ color: 'var(--teal)', flexShrink: 0 }} />
                                            <span>{step.info}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEVER PAY SECTION */}
            <section className="section" style={{ background: 'rgba(255,76,76,0.04)', borderTop: '1px solid rgba(255,76,76,0.12)', borderBottom: '1px solid rgba(255,76,76,0.12)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="badge" style={{ background: 'rgba(255,76,76,0.12)', borderColor: 'rgba(255,76,76,0.3)', color: '#FCA5A5' }}>
                            <FiXCircle /> Absolute Rules
                        </div>
                        <h2 className="section-title">Never Pay These <span style={{ color: '#FF4C4C' }}>Four Things</span></h2>
                        <p className="section-sub">If anyone — whether original scammer or a "helper" — asks for these payments, you are being scammed again. Do not pay under any circumstances.</p>
                    </div>
                    <div className="grid-4">
                        {neverPay.map((item, i) => (
                            <div key={i} className="card never-pay-card">
                                <div className="never-pay-card__icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM */}
            <section className="section-sm">
                <div className="container" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/report" className="btn btn-primary">Report to Authorities <FiArrowRight /></Link>
                    <Link to="/contact" className="btn btn-gold"><FiPhone /> Get Personal Help</Link>
                    <Link to="/red-flags" className="btn btn-outline">View Red Flags</Link>
                </div>
            </section>
        </div>
    )
}
