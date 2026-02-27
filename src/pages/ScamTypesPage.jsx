import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    FiMail, FiHeart, FiCreditCard, FiTrendingUp,
    FiAlertTriangle, FiChevronDown, FiChevronUp, FiArrowRight, FiShield
} from 'react-icons/fi'
import './ScamTypesPage.css'

const scams = [
    {
        id: 'phishing',
        icon: <FiMail />,
        color: '#FF4C4C',
        title: 'Phishing Scams',
        subtitle: 'Email, SMS, Fake Websites & Fake Login Pages',
        summary: 'Phishing is the most widespread form of online fraud. Scammers impersonate trusted brands — your bank, PayPal, Amazon, DHL — to trick you into handing over login credentials, credit card numbers, or personal data.',
        howItWorks: [
            'You receive an email or SMS that looks 100% real — same logos, same colors, same formatting as your bank or a service you use.',
            'The message creates urgency: "Your account has been suspended," "Verify your identity now," or "Unusual activity detected."',
            'You click a link that takes you to a fake website that looks identical to the real one.',
            'You enter your username, password, or card details — and they are instantly captured by the scammer.',
        ],
        warningSignsTitle: 'How to Spot It',
        warningSigns: [
            'Sender email domain is slightly wrong (e.g. "paypal-secure.com" instead of "paypal.com")',
            'Hover over links before clicking — the URL destination will often look suspicious',
            'Generic greetings like "Dear Customer" instead of your actual name',
            'Spelling errors or awkward language in official-looking emails',
            'Urgent language demanding immediate action',
            'Requests for passwords, OTPs, or PINs — no legitimate company ever asks for these',
        ],
        scriptExample: '"Dear Valued Customer, your account has been temporarily limited due to suspicious activity. Click the link below within 24 hours to restore access or your account will be permanently closed."',
    },
    {
        id: 'spam-fraud',
        icon: <FiAlertTriangle />,
        color: '#F0A500',
        title: 'Spam & Advance-Fee Fraud',
        subtitle: 'Lottery Wins, Inheritance Claims, "Nigerian Prince" Schemes',
        summary: 'Advance-fee fraud has existed for decades and still works because it exploits greed and hope. You are promised a large sum of money but told you must pay a small fee first to release it. There is no money — only fees that keep growing.',
        howItWorks: [
            'You receive an unexpected message claiming you have won a lottery, inherited money from a distant relative, or been selected for a prize.',
            'You are asked to pay a small "processing fee," "legal fee," or "tax clearance" to unlock the funds.',
            'Every time you pay, a new fee is invented — customs fees, government taxes, insurance bonds.',
            'The money never arrives. The "agent" disappears once they feel you will not pay more.',
        ],
        warningSignsTitle: 'Dead Giveaways',
        warningSigns: [
            'You won a lottery you never entered',
            '"A deceased relative left you $4.5 million in gold" — from someone you have never heard of',
            'Requires payment upfront to receive money — this is ALWAYS a scam',
            'Communication is through Gmail/Hotmail, not official channels',
            'Pressure to keep the arrangement "strictly confidential"',
            'Payments requested via Western Union, MoneyGram, or gift cards',
        ],
        scriptExample: '"I am barrister John Mensah, legal representative of the late Mr. Richard Clark who shares your surname. He left $4.8 million USD and you are the sole beneficiary. To proceed, we require a $500 legal documentation fee."',
    },
    {
        id: 'romance',
        icon: <FiHeart />,
        color: '#EC4899',
        title: 'Romance Scams',
        subtitle: 'Fake Online Relationships Designed to Drain Your Money',
        summary: 'Romance scammers invest months building an emotional bond with victims. They create a perfect fake persona — attractive, successful, loving — then manufacture a crisis requiring money. These scams cause both financial devastation and deep psychological trauma.',
        howItWorks: [
            'A stranger reaches out on social media, a dating app, or even WhatsApp — extremely attractive, charming, successful.',
            'They invest weeks or months in building a genuine-feeling relationship. They remember details, call daily, send "presents."',
            'At a critical emotional peak, a crisis hits: medical emergency, passport stolen abroad, stuck at customs, business deal gone wrong.',
            'They ask for money — "just this once" — then the cycle of need continues until the victim is drained.',
        ],
        warningSignsTitle: 'Warning Signs',
        warningSigns: [
            'They never agree to video call — always technical issues, camera broken, or security concerns',
            'Profile photos are too perfect — reverse image search often reveals stock photos or stolen images',
            'Falls "deeply in love" within days or weeks',
            'Claims to be abroad: military deployed, engineer on oil rig, doctor with international organization',
            'First money request is framed as an emergency, always repayable "when I get home"',
            'Asks you to move communication off the original platform to WhatsApp or Telegram quickly',
        ],
        scriptExample: '"Darling, I am so devastated. My wallet was stolen at the airport and I cannot access my bank account internationally. I just need $800 to pay the hotel and get my emergency passport. I will pay you back double when I see you next week, I promise."',
    },
    {
        id: 'bank-scams',
        icon: <FiCreditCard />,
        color: '#00B4D8',
        title: 'Online Banking Scams',
        subtitle: 'Fake Bank Reps, OTP Theft, Account Takeovers',
        summary: 'Scammers impersonate your bank\'s fraud department to steal your online banking credentials, intercept your OTP codes, and drain your accounts — sometimes within minutes of first contact.',
        howItWorks: [
            'You receive a call or text from someone claiming to be from your bank\'s "fraud prevention team."',
            'They mention a suspicious transaction on your account — this creates instant fear and compliance.',
            'They ask you to "verify" your identity by providing your card number, PIN, or the OTP sent to your phone.',
            'Once they have your OTP, they instantly approve transfers from your account.',
        ],
        warningSignsTitle: 'Critical Rules to Remember',
        warningSigns: [
            'Your bank will NEVER call you asking for your PIN, full card number, or OTP — ever',
            'Scammers can spoof your bank\'s actual phone number — caller ID is not proof',
            'Hang up and call your bank directly using the number on the back of your card',
            'Never share OTP codes with anyone — they are specifically designed to be secret',
            '"Remote access" requests (asking you to install TeamViewer, AnyDesk) = immediate red flag',
            'Real bank staff never ask you to transfer money to a "safe account"',
        ],
        scriptExample: '"Hello, this is the fraud prevention team at Barclays Bank. We have detected an unauthorized transaction of £1,200 on your account. To secure your account, please confirm your card details and the one-time password we just sent you."',
    },
    {
        id: 'fake-investments',
        icon: <FiTrendingUp />,
        color: '#22C55E',
        title: 'Fake Investment Scams',
        subtitle: 'Crypto Ponzi Schemes, Fake Forex, Pig Butchering, MLM Fraud',
        summary: 'Investment scams promise extraordinary returns with zero risk — mathematically impossible in any legitimate market. They include fake crypto platforms, fraudulent forex "brokers," and sophisticated pig-butchering schemes that combine romance and investment fraud.',
        howItWorks: [
            'You are introduced to an "investment opportunity" — often through a romantic interest, a social media ad, or a friend recommendation.',
            'Your first small deposit shows impressive returns. The platform looks professional with real-time dashboards.',
            'You are encouraged to deposit more and recruit others. Everything appears to be growing.',
            'When you try to withdraw, fees appear — taxes, verification costs, insurance. After you pay, more fees appear — or the platform vanishes entirely.',
        ],
        warningSignsTitle: 'How to Identify Fake Investments',
        warningSigns: [
            'Guaranteed returns — no legitimate investment can promise this, ever',
            'Returns that sound too good to be true (e.g., "30% per week")',
            'Pressure to recruit others to earn — this is the structure of a Ponzi scheme',
            'No verifiable company registration with financial regulators (FCA, SEC, CFTC)',
            'Withdrawal blocked by invented fees — taxes, insurance, compliance costs',
            'Platform only accessible through a non-standard app or specific link',
            'You are told to buy crypto and send it to a wallet address to "invest"',
        ],
        scriptExample: '"My trading algorithm has a 94% success rate. I have already made $80,000 this month. Start with just $500 and I will personally manage your portfolio. You can see real-time growth on the platform. Most people double their money within 14 days."',
    },
    {
        id: 'recovery-scams',
        icon: <FiShield />,
        color: '#8B5CF6',
        title: 'Recovery Scams',
        subtitle: 'Scammers Who Pretend to Help Victims Get Their Money Back',
        summary: 'This is a secondary scam that targets people who have already been defrauded. A "recovery agent" promises to retrieve your lost funds — for an upfront fee. There is no recovery. You lose money twice.',
        howItWorks: [
            'After being scammed, you search for help or post about your experience online.',
            'A "recovery specialist" contacts you — sometimes impersonating law firms, government agencies, or blockchain investigators.',
            'They claim to have "traced" your funds and can recover them for a fee.',
            'After paying the recovery fee, they demand more fees — legal processing, court filing, fund release charges.',
            'Eventually they disappear with all the fees you have paid.',
        ],
        warningSignsTitle: 'How to Protect Yourself',
        warningSigns: [
            'Legitimate fraud recovery through official channels (banks, police) costs nothing upfront',
            'Be extremely suspicious of anyone contacting you claiming to have already found your money',
            'Do not pay ANY upfront fee to a "recovery agent" — this is always a scam',
            'Verify claims against official law enforcement websites directly',
            'Real blockchain forensics firms are internationally regulated and do not cold-contact victims',
            'If you need genuine help, contact FBI IC3, FTC, or Action Fraud directly',
        ],
        scriptExample: '"We are ScamRecoveryExperts Ltd. We have successfully traced your $15,000 to a cryptocurrency wallet. To initiate the legal extraction process, we require a $1,200 clearance fee. Once received, your funds will be returned within 72 hours."',
    },
]

export default function ScamTypesPage() {
    const [openId, setOpenId] = useState(null)

    const toggle = (id) => setOpenId(v => v === id ? null : id)

    return (
        <div className="scam-types">
            {/* HEADER */}
            <section className="page-hero">
                <div className="page-hero__glow" aria-hidden="true" />
                <div className="container">
                    <div className="badge"><FiAlertTriangle /> Know Your Enemy</div>
                    <h1 className="section-title" style={{ maxWidth: '700px' }}>
                        The <span>6 Most Dangerous</span> Online Scams — Fully Explained
                    </h1>
                    <p className="section-sub">
                        Scammers are professionals who have refined their techniques over years. Understanding exactly how each scam works is your most powerful defence. Knowledge is armour.
                    </p>
                </div>
            </section>

            {/* SCAM CARDS */}
            <section className="section">
                <div className="container">
                    <div className="scam-list">
                        {scams.map(scam => (
                            <div
                                key={scam.id}
                                className={`scam-accordion ${openId === scam.id ? 'scam-accordion--open' : ''}`}
                                style={{ '--accent': scam.color }}
                                id={`scam-${scam.id}`}
                            >
                                <button
                                    className="scam-accordion__header"
                                    onClick={() => toggle(scam.id)}
                                    aria-expanded={openId === scam.id}
                                >
                                    <div className="scam-accordion__icon">{scam.icon}</div>
                                    <div className="scam-accordion__heading">
                                        <h2>{scam.title}</h2>
                                        <p>{scam.subtitle}</p>
                                    </div>
                                    <div className="scam-accordion__chevron">
                                        {openId === scam.id ? <FiChevronUp /> : <FiChevronDown />}
                                    </div>
                                </button>

                                {openId === scam.id && (
                                    <div className="scam-accordion__body fade-up">
                                        <p className="scam-summary">{scam.summary}</p>

                                        <div className="scam-grid">
                                            <div>
                                                <h4><FiArrowRight /> How It Works — Step by Step</h4>
                                                <ol className="scam-steps">
                                                    {scam.howItWorks.map((step, i) => (
                                                        <li key={i}>{step}</li>
                                                    ))}
                                                </ol>
                                            </div>
                                            <div>
                                                <h4><FiAlertTriangle /> {scam.warningSignsTitle}</h4>
                                                <ul className="scam-warnings">
                                                    {scam.warningSigns.map((w, i) => (
                                                        <li key={i}>{w}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="alert-box alert-red scam-script">
                                            <div>
                                                <strong>Real Scammer Script Example:</strong><br />
                                                <em>&ldquo;{scam.scriptExample}&rdquo;</em>
                                            </div>
                                        </div>

                                        <div className="scam-actions">
                                            <Link to="/red-flags" className="btn btn-outline">Check Red Flags List</Link>
                                            <Link to="/recovery" className="btn btn-primary">Recovery Guide <FiArrowRight /></Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="section-sm">
                <div className="container">
                    <div className="alert-box alert-teal" style={{ borderRadius: 'var(--radius-md)', padding: '24px 32px' }}>
                        <FiShield style={{ fontSize: '1.6rem', flexShrink: 0, color: 'var(--teal)' }} />
                        <div>
                            <strong>Think you may have been targeted?</strong> Go to our{' '}
                            <Link to="/recovery" style={{ color: 'var(--teal)' }}>Recovery Guide</Link> for immediate steps to take,
                            or <Link to="/contact" style={{ color: 'var(--teal)' }}>contact us</Link> for a free personal consultation.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
