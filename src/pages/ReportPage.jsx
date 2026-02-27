import { Link } from 'react-router-dom'
import {
    FiFlag, FiGlobe, FiAlertTriangle, FiExternalLink,
    FiShield, FiArrowRight
} from 'react-icons/fi'
import './ReportPage.css'

const agencies = [
    {
        region: '🇺🇸 United States',
        color: '#00B4D8',
        agencies: [
            {
                name: 'FBI Internet Crime Complaint Center (IC3)',
                desc: 'The primary US federal agency for reporting internet fraud, phishing, ransomware, and online scams.',
                url: 'https://www.ic3.gov',
                label: 'ic3.gov',
                best: 'Online fraud, investment scams, romance scams, phishing',
            },
            {
                name: 'Federal Trade Commission (FTC)',
                desc: 'Report scams related to identity theft, fake sweepstakes, impersonation fraud, and unwanted calls.',
                url: 'https://reportfraud.ftc.gov',
                label: 'reportfraud.ftc.gov',
                best: 'Identity theft, impersonation, do-not-call violations',
            },
            {
                name: 'CISA — Cybersecurity & Infrastructure Security Agency',
                desc: 'Report cybersecurity threats, phishing campaigns, and infrastructure attacks.',
                url: 'https://www.cisa.gov/report',
                label: 'cisa.gov/report',
                best: 'Phishing, cybersecurity incidents, ransomware',
            },
            {
                name: 'SEC — Securities and Exchange Commission',
                desc: 'Report investment fraud, Ponzi schemes, fake brokers, and securities violations.',
                url: 'https://www.sec.gov/tcr',
                label: 'sec.gov/tcr',
                best: 'Fake investments, Ponzi schemes, unauthorised brokers',
            },
        ],
    },
    {
        region: '🇬🇧 United Kingdom',
        color: '#22C55E',
        agencies: [
            {
                name: 'Action Fraud',
                desc: 'The UK\'s national fraud and cybercrime reporting centre — your first stop for all fraud in England, Wales, and Northern Ireland.',
                url: 'https://www.actionfraud.police.uk',
                label: 'actionfraud.police.uk',
                best: 'All fraud and cybercrime in England & Wales',
            },
            {
                name: 'Financial Conduct Authority (FCA) Scam Reporting',
                desc: 'Report unregulated financial firms, fake investment schemes, and clone firms impersonating FCA-registered companies.',
                url: 'https://www.fca.org.uk/consumers/report-scam',
                label: 'fca.org.uk/consumers/report-scam',
                best: 'Fake investment platforms, unauthorised financial firms',
            },
        ],
    },
    {
        region: '🌍 International & Global',
        color: '#F0A500',
        agencies: [
            {
                name: 'Interpol Financial Crimes',
                desc: 'Interpol coordinates cross-border fraud investigations and can escalate cases to national law enforcement globally.',
                url: 'https://www.interpol.int/en/Crimes/Financial-crime',
                label: 'interpol.int',
                best: 'Cross-border fraud, money laundering, international scams',
            },
            {
                name: 'Global Anti-Scam Alliance (GASA)',
                desc: 'A global coalition of public and private organisations fighting online fraud. Access country-specific reporting tools.',
                url: 'https://www.gasa.org',
                label: 'gasa.org',
                best: 'Cross-country scam reporting and consumer protection',
            },
            {
                name: 'Anti-Phishing Working Group (APWG)',
                desc: 'Report phishing websites to be blocked globally. Operates the eCrime-X phishing database used by browsers and security platforms.',
                url: 'https://apwg.org/reportphishing/',
                label: 'apwg.org/reportphishing',
                best: 'Phishing websites, fake login pages, phishing emails',
            },
        ],
    },
    {
        region: '🇳🇬 Nigeria',
        color: '#EC4899',
        agencies: [
            {
                name: 'EFCC — Economic and Financial Crimes Commission',
                desc: 'Nigeria\'s primary anti-fraud agency. Investigates advance-fee fraud, cybercrime, money laundering, and investment scams.',
                url: 'https://www.efcc.gov.ng',
                label: 'efcc.gov.ng',
                best: 'All financial crimes and cybercrime in Nigeria',
            },
            {
                name: 'NITDA — National Information Technology Development Agency',
                desc: 'For reporting cybercrime and IT-related fraud in Nigeria.',
                url: 'https://nitda.gov.ng',
                label: 'nitda.gov.ng',
                best: 'Online fraud, IT impersonation, cybercrime',
            },
        ],
    },
]

const howToReport = [
    {
        step: '1',
        title: 'Choose the right agency',
        desc: 'Use the agencies listed here based on your country and the type of scam. For international scams, report to both your national agency AND an international body like Interpol or GASA.',
    },
    {
        step: '2',
        title: 'Gather your evidence first',
        desc: 'Before filing, collect screenshots of conversations, transaction receipts, wallet addresses, email headers, URLs, and phone numbers. The more detail, the stronger the case.',
    },
    {
        step: '3',
        title: 'Get a crime reference number',
        desc: 'After filing a police or fraud report, request a crime reference number. This is essential for bank chargeback disputes and insurance claims.',
    },
    {
        step: '4',
        title: 'Report the platform or website',
        desc: 'Report fraudulent websites to Google Safe Browsing (safebrowsing.google.com/safebrowsing/report_phish/) and the relevant app stores. This helps protect future victims.',
    },
    {
        step: '5',
        title: 'Follow up regularly',
        desc: 'Fraud investigations take time. Follow up with the agency every few weeks. Persistence significantly increases investigation priority.',
    },
]

export default function ReportPage() {
    return (
        <div className="report-page">
            {/* HEADER */}
            <section className="page-hero">
                <div className="page-hero__glow" aria-hidden="true" />
                <div className="container">
                    <div className="badge"><FiFlag /> Official Authorities</div>
                    <h1 className="section-title" style={{ maxWidth: '750px' }}>
                        Report a Scam to the <span>Right Authority</span>
                    </h1>
                    <p className="section-sub">
                        Reporting is not just about your own recovery — it creates the evidence trail that leads to criminal prosecutions and saves future victims. These are real, official agencies with the power to act.
                    </p>
                </div>
            </section>

            {/* HOW TO REPORT */}
            <section className="section-sm">
                <div className="container">
                    <div className="alert-box alert-teal" style={{ borderRadius: 'var(--radius-md)', marginBottom: '40px' }}>
                        <FiShield style={{ fontSize: '1.5rem', flexShrink: 0, color: 'var(--teal)' }} />
                        <div>
                            <strong>Before you click:</strong> Only report to official government websites and agencies listed here. Be cautious of third-party "reporting services" that charge a fee — they are often scams themselves.
                        </div>
                    </div>

                    <div className="report-how-grid">
                        {howToReport.map((h, i) => (
                            <div key={i} className="report-how-item card">
                                <div className="report-how-num">{h.step}</div>
                                <h4>{h.title}</h4>
                                <p>{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AGENCIES */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="badge"><FiGlobe /> Global Reporting Agencies</div>
                        <h2 className="section-title">Official Fraud Reporting <span>Agencies by Region</span></h2>
                    </div>

                    <div className="agency-regions">
                        {agencies.map((region, i) => (
                            <div key={i} className="agency-region" style={{ '--region-color': region.color }}>
                                <h3 className="agency-region__title">{region.region}</h3>
                                <div className="agency-cards">
                                    {region.agencies.map((a, j) => (
                                        <div key={j} className="agency-card card">
                                            <div className="agency-card__top">
                                                <div>
                                                    <h4>{a.name}</h4>
                                                    <a
                                                        href={a.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="agency-card__link"
                                                        id={`agency-link-${i}-${j}`}
                                                    >
                                                        {a.label} <FiExternalLink />
                                                    </a>
                                                </div>
                                            </div>
                                            <p className="agency-card__desc">{a.desc}</p>
                                            <div className="agency-card__best">
                                                <span className="badge" style={{ fontSize: '0.72rem', marginBottom: 0 }}>
                                                    Best for: {a.best}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-sm">
                <div className="container" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link to="/recovery" className="btn btn-primary">Recovery Guide <FiArrowRight /></Link>
                    <Link to="/contact" className="btn btn-gold">Personal Consultation</Link>
                </div>
            </section>
        </div>
    )
}
