import { useEffect, useState, useRef } from 'react'
import { motion } from 'motion/react'

/* ── User SquishyCard component (exact as provided) ── */
export const SquishyCard = () => {
  return (
    <section className="bg-neutral-900 px-4 py-12">
      <div className="mx-auto w-fit">
        <Card />
      </div>
    </section>
  );
};

export const Card = ({
  tag = 'Pro',
  title = (
    <>
      $299/
      <br />
      Month
    </>
  ),
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.',
  cta = 'Request Demo',
  onAction,
}) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: 'backInOut',
      }}
      variants={{
        hover: {
          scale: 1.03,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-lg bg-[#161224] border border-purple-900/30 p-6"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/10 px-3 py-0.5 text-xs font-medium text-purple-200 border border-purple-400/20">
          {tag}
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: 'backInOut',
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          {title}
        </motion.span>
        <p className="text-sm text-neutral-300 leading-relaxed">
          {desc}
        </p>
      </div>
      <button
        type="button"
        onClick={onAction}
        className="absolute bottom-4 left-4 right-4 z-20 rounded-md border border-white bg-white py-2.5 text-center font-mono text-xs font-bold uppercase text-neutral-950 transition-colors hover:bg-neutral-100 cursor-pointer shadow-sm"
      >
        {cta}
      </button>
      <Background />
    </motion.div>
  );
};

export const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: 'backInOut',
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: 'backInOut',
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: 'backInOut',
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

const PillarCard = Card;



const SLIDES = [
  {
    word: 'MERI AGENT',
    wordAm: 'መ ሪ A G E N T',
    sub: 'HOTEL CEO ARTIFICIAL INTELLIGENCE',
    subAm: 'የሆቴል ዋና ሥራ አስፈፃሚ አርቴፊሻል ኢንተለጀንስ',
    action: 'REQUEST DEMO',
    actionAm: 'ዴሞ ይጠይቁ',
    tag: '01 / 04 · EXECUTIVE LAYER',
    bg: '/hotel-ceo-boss.jpg',
  },
  {
    word: 'O N E  M I N D',
    wordAm: 'አ ን ድ  አ እ ም ሮ',
    sub: 'SEVEN DEPARTMENTS UNDER ONE VOICE',
    subAm: 'ሰባት ክፍሎች በአንድ ድምፅ ይተባበራሉ',
    action: 'REQUEST DEMO',
    actionAm: 'ዴሞ ይጠይቁ',
    tag: '02 / 04 · SEVEN SPECIALISTS',
    bg: '/hotel-ceo-atrium-wide.jpg',
  },
  {
    word: 'A U T O N O M Y',
    wordAm: 'ራስ-ገዝ አሰራር',
    sub: 'PROACTIVE DISPATCH · 1-TAP GM APPROVAL',
    subAm: 'ፈጣን እርምጃዎች · የሥራ አስኪያጁ 1-ጠቅታ ይሁንታ',
    action: 'REQUEST DEMO',
    actionAm: 'ዴሞ ይጠይቁ',
    tag: '03 / 04 · GOVERNANCE & CONTROL',
    bg: '/hotel-ceo-penthouse.jpg',
  },
  {
    word: 'R E V E N U E',
    wordAm: 'የ ገ ቢ  እ ድ ገ ት',
    sub: 'DYNAMIC YIELD & REVPAR PROTECTION',
    subAm: 'ተለዋዋጭ ዋጋ አሰጣጥ እና የገቢ ጥበቃ',
    action: 'REQUEST DEMO',
    actionAm: 'ዴሞ ይጠይቁ',
    tag: '04 / 04 · ASSET GROWTH',
    bg: '/hotel-ceo-centered.jpg',
  },
]

const PILLARS = [
  {
    num: '01',
    en: {
      tag: 'Pro · 01',
      title: <>07:00 AM<br />Briefing</>,
      desc: 'One concise executive synthesis on occupancy, rate yield, and priority turns. Zero screen hunting.',
    },
    am: {
      tag: 'መሪ · 01',
      title: <>የጠዋት 1፡00<br />ማጠቃለያ</>,
      desc: 'ስለ ገቢ፣ የክፍል ሙሌት እና የዕለቱ ስራዎች አንድ ግልጽ ማጠቃለያ። ስክሪኖችን መፈተሽ ቀረ።',
    },
  },
  {
    num: '02',
    en: {
      tag: 'Pro · 02',
      title: <>Auto<br />Dispatch</>,
      desc: 'Room delays and HVAC anomalies detected instantly and dispatched to teams before guests arrive.',
    },
    am: {
      tag: 'መሪ · 02',
      title: <>ራስ-ሰር<br />ምደባ</>,
      desc: 'የጽዳት መዘግየት ወይም የኤሲ ብልሽት ከመፈጠሩ በፊት ችግሮቹን ለይቶ ለቡድኑ ይመድባል።',
    },
  },
  {
    num: '03',
    en: {
      tag: 'Pro · 03',
      title: <>1-Tap<br />Approval</>,
      desc: 'Operations execute autonomously. Price shifts and budget authorizations wait for your single tap.',
    },
    am: {
      tag: 'መሪ · 03',
      title: <>1-ጠቅታ<br />ይሁንታ</>,
      desc: 'ስራዎች በራሳቸው ይከናወናሉ፤ የዋጋ ለውጦች እና የፋይናንስ ውሳኔዎች የእርስዎን ማረጋገጫ ይጠብቃሉ።',
    },
  },
]

const SPECIALISTS = [
  {
    idx: '01',
    en: {
      name: 'Revenue & Dynamic Yield',
      impact: '+14.2% RevPAR',
      tags: [
        'Dynamic Pricing Engine',
        'Competitor Rate Intelligence',
        'OTA Channel Commission Shield',
        'Surge Demand Rate Optimization',
        'Weekend Package Yield',
        '1-Tap Rate Approval',
      ],
    },
    am: {
      name: 'ገቢ እና ተለዋዋጭ ዋጋ',
      impact: '+14.2% አማካይ ገቢ',
      tags: [
        'ተለዋዋጭ የዋጋ ሞተር',
        'የተፎካካሪ ሆቴሎች ዋጋ ክትትል',
        'የኦቲኤ ኮሚሽን ቅነሳ',
        'የወቅታዊ ፍላጎት ዋጋ ማስተካከያ',
        'በ1-ጠቅታ ይሁንታ',
      ],
    },
  },
  {
    idx: '02',
    en: {
      name: 'Occupancy & Fill Forecast',
      impact: '91.8% Peak Fill',
      tags: [
        'Flight Inbound Corridors',
        'Conference & Event Demand Modeling',
        'Last-Minute Inventory Push',
        'Group Booking Lead Scoring',
        'Cancellations Offset Protocol',
      ],
    },
    am: {
      name: 'የክፍል ሙሌት ትንበያ',
      impact: '91.8% ከፍተኛ ሙሌት',
      tags: [
        'የበረራ እና የኮንፈረንስ ፍላጎት ትንበያ',
        'የመጨረሻ ሰዓት ክፍል ሽያጭ',
        'የቡድን ቦታ ማስያዝ ግምገማ',
        'የቦታ መሰረዝ ማካካሻ',
      ],
    },
  },
  {
    idx: '03',
    en: {
      name: 'Housekeeping Velocity',
      impact: '22 min / Turn',
      tags: [
        'VIP Check-in Priority Queue',
        'Linen & Minibar Telemetry',
        'Real-Time Floor Inspection',
        'Auto-Dispatch by Proximity',
        'Turnaround Velocity Metrics',
      ],
    },
    am: {
      name: 'የክፍል ጽዳት ፍጥነት',
      impact: '22 ደቂቃ በክፍል',
      tags: [
        'ለቪአይፒ ክፍሎች ቅድሚያ',
        'የአልጋ ልብስና ሚኒባር ቁጥጥር',
        'የቀጥታ ፍተሻ እና ምደባ',
        'ፈጣን የቡድን ቅንጅት',
      ],
    },
  },
  {
    idx: '04',
    en: {
      name: 'Predictive Engineering',
      impact: '< 8 min Dispatch',
      tags: [
        'HVAC Vibration Sensing',
        'Water Pressure & Boiler Alerts',
        'Smart Keylock Diagnostics',
        'Pre-Guest Defect Resolution',
        'Autonomous Work Orders',
      ],
    },
    am: {
      name: 'ቅድመ-ግምት ኢንጂነሪንግ',
      impact: '< 8 ደቂቃ ምላሽ',
      tags: [
        'የኤሲ እና የውሃ ግፊት ቁጥጥር',
        'የስማርት ቁልፍ ማንቂያዎች',
        'እንግዶች ከመግባታቸው በፊት ጥገና',
        'ራስ-ሰር የስራ ትዕዛዝ',
      ],
    },
  },
  {
    idx: '05',
    en: {
      name: 'Staff Arrival Alignment',
      impact: '-18% Overtime',
      tags: [
        'Shift Calibration by Occupancy',
        'Banquet Peak Allocation',
        'Attendance Anomaly Detection',
        'Cross-Department Balancing',
        'Overtime Mitigation Engine',
      ],
    },
    am: {
      name: 'የሰራተኞች ሰዓት ማስተካከያ',
      impact: '-18% የትርፍ ሰዓት',
      tags: [
        'የፈረቃ መርሃ-ግብር ማስተካከያ',
        'የግብዣ ወቅት ሰራተኛ ምደባ',
        'የትርፍ ሰዓት ወጪ ቅነሳ',
        'የክፍሎች ቅንጅት',
      ],
    },
  },
  {
    idx: '06',
    en: {
      name: 'Guest In-Stay Recovery',
      impact: '4.9 Star Index',
      tags: [
        'In-Stay Sentiment Radar',
        'Instant Service Recovery Alerts',
        'VIP Preference Memory',
        'Multi-Lingual Concierge',
        'Zero Negative Review Escalation',
      ],
    },
    am: {
      name: 'የእንግዶች እርካታ ጥበቃ',
      impact: '4.9 የእርካታ ነጥብ',
      tags: [
        'የእንግዶች ስሜት መከታተያ',
        'ፈጣን የማካካሻ እርምጃ',
        'የቪአይፒ ምርጫ ማስታወሻ',
        'ባለብዙ ቋንቋ አገልግሎት',
      ],
    },
  },
  {
    idx: '07',
    en: {
      name: 'Owner & Board P&L',
      impact: 'Real-Time P&L',
      tags: [
        'Live RevPAR & GOPPAR Ledger',
        'Payroll vs Revenue Ratio',
        'Daily Departmental Budget Variances',
        'Executive Morning WhatsApp Digest',
        'Investor-Ready Financials',
      ],
    },
    am: {
      name: 'የባለቤቶች እና የቦርድ P&L',
      impact: 'ቀጥታ የፋይናንስ እይታ',
      tags: [
        'የቀጥታ ገቢና ወጪ መዝገብ',
        'የደመወዝ እና ገቢ ንፅፅር',
        'የዕለቱ የስራ አስፈፃሚ ሪፖርት',
        'ለባለሀብቶች ዝግጁ የፋይናንስ እይታ',
      ],
    },
  },
]

const BRIEF_CARDS = [
  {
    id: 'occupancy',
    accent: false,
    en: {
      title: '91.8% Occupancy',
      desc: '84 of 92 suites reserved tonight. 8 open rooms held for peak walk-in yield capture before late check-in.',
    },
    am: {
      title: '91.8% የክፍል ሙሌት',
      desc: 'ከ92 ክፍሎች 84ቱ ዛሬ ማታ ተይዘዋል። የቀሩት 8 ክፍሎች ከፍተኛ ዋጋ ላላቸው እንግዶች ተመድበዋል።',
    },
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--purple-glow)]">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    id: 'yield',
    accent: true,
    isAction: true,
    en: {
      title: '+4,500 ETB Dynamic Yield',
      desc: 'Regional convention inflow detected. Recommended peak rate increase of +4,500 ETB committed with 1-tap GM approval.',
    },
    am: {
      title: '+4,500 ብር ተለዋዋጭ ዋጋ',
      desc: 'በከተማው ባለው ጉባኤ ምክንያት የቀሩትን ክፍሎች ዋጋ በ+4,500 ብር እንዲጨምር የሥራ አስኪያጁን ይሁንታ አግኝቷል።',
    },
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    ),
  },
  {
    id: 'engineering',
    accent: false,
    en: {
      title: 'Floor 3 AC Cleared',
      desc: 'Compressor anomaly flagged at 06:12 AM and routed to technician. Cleared before guest arrival. 0 pending work orders.',
    },
    am: {
      title: 'የ3ኛ ወለል ኤሲ ተስተካክሏል',
      desc: 'ከጠዋቱ 12፡12 ሰዓት የታየው የኤሲ ብልሽት እንግዶች ከመግባታቸው በፊት ተስተካክሎ ክፍሉ ዝግጁ ሆኗል።',
    },
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--purple-glow)]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: 'housekeeping',
    accent: false,
    en: {
      title: '22 Min / Room Turn',
      desc: 'Housekeeping sequence synchronized to early 02:00 PM VIP arrivals. All 84 reserved suites on track.',
    },
    am: {
      title: '22 ደቂቃ በክፍል',
      desc: 'ለቀኑ የክፍል ጽዳት ቅድሚያ የሚሰጣቸው ክፍሎች ከቀኑ 8፡00 ሰዓት VIP እንግዶች መምጫ ጋር ተስተካክለዋል።',
    },
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--purple-glow)]">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 'synthesis',
    accent: false,
    en: {
      title: 'One Mind On Desk',
      desc: 'Front desk, housekeeping, and engineering synthesized into one plain-language brief on your desk every morning.',
    },
    am: {
      title: 'አንድ ጠቅላይ ማጠቃለያ',
      desc: 'በየዕለቱ የሆቴሉን ሙሉ ሁኔታ የሚያጠቃልል አንድ ድምፅ። አምስት የተለያዩ ሲስተሞችን መፈተሽ ቀረ።',
    },
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--purple-glow)]">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

export default function App() {
  const [lang, setLang] = useState('en')
  const [activeSlide, setActiveSlide] = useState(0)
  const [approved, setApproved] = useState(false)
  const [clock, setClock] = useState('')
  const [pageLoaded, setPageLoaded] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', hotel: '', note: '' })
  const [openSpec, setOpenSpec] = useState('01')
  const containerRef = useRef(null)
  const briefTrackRef = useRef(null)

  const scrollToContact = () => {
    const el = document.querySelector('#contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDemoSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name') || ''
    const phone = form.get('phone') || ''
    const hotel = form.get('hotel') || ''
    const note = form.get('note') || ''

    setFormData({ name, phone, hotel, note })
    setFormSubmitted(true)

    const subject = `መሪAgent Demo Request: ${name} (${phone})`
    const body = `Full Name: ${name}\nPhone Number: ${phone}\nHotel / Property: ${hotel}\nNotes: ${note}\nTimestamp: ${new Date().toLocaleString()}`
    const mailto = `mailto:israelashenafi29@gmail.com,Tinsaebefekadu2012@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    const link = document.createElement('a')
    link.href = mailto
    link.click()
  }

  const scrollBrief = (dir) => {
    const el = briefTrackRef.current
    if (!el) return
    const cardEl = el.querySelector('.brief-card-item')
    const step = cardEl ? cardEl.offsetWidth + 24 : 384
    if (dir === 'left') {
      if (el.scrollLeft <= 15) {
        el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: -step, behavior: 'smooth' })
      }
    } else {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 25) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        el.scrollBy({ left: step, behavior: 'smooth' })
      }
    }
  }

  // Page load animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 60)
    return () => clearTimeout(timer)
  }, [])

  // Clock in Addis Ababa
  useEffect(() => {
    const update = () => {
      try {
        const time = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Addis_Ababa',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date())
        setClock(time)
      } catch {
        setClock('07:00')
      }
    }
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  // Scroll reveal observer for under-page flow
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.12 }
    )

    const sections = document.querySelectorAll('.flow-section')
    sections.forEach((sec) => observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  function prevSlide() {
    setActiveSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))
  }

  function nextSlide() {
    setActiveSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev + 1) % SLIDES.length)
  }

  // Consistent, regular automatic slideshow (3.2s cadence)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [activeSlide])

  const slide = SLIDES[activeSlide]

  return (
    <div ref={containerRef} className={`site-wrapper ${pageLoaded ? 'loaded' : 'pre-load'}`}>
      {/* ——— CINEMATIC HERO STAGE WITH AUTO-SLIDESHOW & LOAD ANIMATIONS ——— */}
      <section className="cinematic-hero" id="top">
        {/* Silky cross-fade background layers */}
        {SLIDES.map((s, idx) => (
          <img
            key={s.bg + idx}
            src={s.bg}
            alt="Hotel CEO Agent"
            className={`sculpture-bg-layer ${idx === activeSlide ? 'active' : ''}`}
          />
        ))}

        <div className="sculpture-vignette" />

        {/* Minimalist Top Navigation */}
        <header className="cinematic-nav nav-anim-target">
          <a href="#top" className="brand-logo-link" title="መሪAgent">
            <img src="/logo.png" alt="መሪAgent" className="brand-header-logo" />
          </a>

          <nav className="nav-center-links">
            <a href="#philosophy" className="nav-link-cinematic">
              {lang === 'am' ? 'መርህ' : 'Principle'}
            </a>
            <a href="#briefing" className="nav-link-cinematic">
              {lang === 'am' ? 'ማጠቃለያ' : 'Briefing'}
            </a>
            <a href="#specialists" className="nav-link-cinematic">
              {lang === 'am' ? 'ስፔሻሊስቶች' : 'Specialists'}
            </a>
            <a href="#shift" className="nav-link-cinematic">
              {lang === 'am' ? 'ለውጥ' : 'The Shift'}
            </a>
            <a href="#contact" className="nav-link-cinematic">
              {lang === 'am' ? 'ዴሞ ይጠይቁ' : 'Request Demo'}
            </a>
          </nav>

          <div className="nav-right-actions">
            <button
              type="button"
              className="hero-pill-btn !py-1.5 !px-4 !text-xs cursor-pointer hidden md:inline-flex"
              onClick={scrollToContact}
            >
              {lang === 'am' ? 'ዴሞ ይጠይቁ' : 'Request Demo'}
            </button>

            <button
              type="button"
              className="lang-toggle-btn"
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
            >
              {lang === 'en' ? 'አማርኛ' : 'EN'}
            </button>

            <span className="text-[11px] font-mono text-[var(--text-dim)] hidden sm:inline">
              {clock} EAT
            </span>
          </div>
        </header>

        {/* Circular Edge Navigation Buttons */}
        <button
          type="button"
          className="arrow-nav-btn left nav-anim-target"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          ‹
        </button>

        <button
          type="button"
          className="arrow-nav-btn right nav-anim-target"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          ›
        </button>

        {/* Centerpiece Headline with Flow Animations on Load and Change */}
        <div className="cinematic-center">
          <div key={activeSlide} className="slide-content-anim">
            <h1 className="hero-giant-word">
              {lang === 'am' ? slide.wordAm : slide.word}
            </h1>

            <div className="hero-fine-rule" />

            <p className="hero-sub-tracked">
              {lang === 'am' ? slide.subAm : slide.sub}
            </p>

            <button
              type="button"
              className="hero-pill-btn cursor-pointer"
              onClick={scrollToContact}
            >
              <span>{lang === 'am' ? 'ዴሞ ይጠይቁ' : 'Request Demo'}</span>
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        {/* Bottom Pagination & Scroll Cue */}
        <div className="cinematic-footer-bar nav-anim-target">
          <div className="slide-tag-mono">{slide.tag}</div>

          <div className="dots-pagination">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <a href="#philosophy" className="scroll-cue">
            <span>{lang === 'am' ? 'ወደ ታች' : 'EXPLORE'}</span>
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* ——— CHAPTER 01: THE EXECUTIVE LAYER (FLOWS WITH HERO) ——— */}
      <section className="flow-section" id="philosophy">
        <div className="flow-kicker">01 / PRINCIPLE</div>

        <h2 className="flow-giant-title">
          {lang === 'am' ? (
            <>
              አንድ ድምፅ። <br />
              <em>ሙሉ ቁጥጥር።</em>
            </>
          ) : (
            <>
              ONE EXECUTIVE VOICE. <br />
              <em>ZERO SCREEN HUNTING.</em>
            </>
          )}
        </h2>

        <div className="flow-fine-rule" />

        <p className="flow-lead">
          {lang === 'am'
            ? 'አምስት የተለያዩ ሲስተሞችን ከመፈተሽ ይልቅ በየዕለቱ የሆቴሉን ሙሉ ሁኔታ የሚያጠቃልል አንድ ድምፅ።'
            : 'One unified intelligence coordinates housekeeping, engineering, and revenue under the General Manager.'}
        </p>

        {/* Squishy animated pillar cards */}
        <div className="pillars-flow-grid">
          {PILLARS.map((p) => (
            <Card
              key={p.num}
              tag={p[lang].tag || 'Pro'}
              title={p[lang].title}
              desc={p[lang].desc}
              cta={lang === 'am' ? 'ዴሞ ይጠይቁ' : 'Request Demo'}
              onAction={scrollToContact}
            />
          ))}
        </div>
      </section>

      {/* ——— CHAPTER 02: THE 07:00 AM BRIEF (COMPONENT FROM IMAGE IN BLACK & PURPLE) ——— */}
      <section className="flow-section" id="briefing">
        <div className="brief-header-row">
          <div>
            <div className="flow-kicker">02 / DAILY BRIEF</div>
            <h2 className="brief-title-headline">
              {lang === 'am' ? (
                <>
                  ከጠዋቱ 1፡00 ሰዓት። <span className="muted">የሆቴሉ እይታ።</span>
                </>
              ) : (
                <>
                  THE 07:00 AM BRIEF. <span className="muted">ON YOUR DESK.</span>
                </>
              )}
            </h2>
          </div>

          <div className="brief-nav-btns">
            <button
              type="button"
              onClick={() => scrollBrief('left')}
              className="brief-nav-btn"
              aria-label="Previous brief card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBrief('right')}
              className="brief-nav-btn"
              aria-label="Next brief card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Cards Carousel Track */}
        <div className="brief-cards-track" ref={briefTrackRef}>
          {BRIEF_CARDS.map((card) => (
            <div
              key={card.id}
              className={`brief-card-item ${card.accent ? 'accent' : 'dark'}`}
            >
              <div className="brief-card-top">
                <h3 className="brief-card-heading">
                  {card[lang].title}
                </h3>
                <div className="brief-card-icon-box">
                  {card.icon}
                </div>
              </div>

              <div className="brief-card-bottom">
                <p className="brief-card-desc">
                  {card[lang].desc}
                </p>

                {card.isAction && (
                  <div className="brief-action-slot">
                    <button
                      type="button"
                      onClick={() => setApproved(!approved)}
                      className={`brief-interactive-btn ${approved ? 'approved' : ''}`}
                    >
                      {approved
                        ? (lang === 'am' ? 'ጸድቋል ✓' : 'Approved ✓')
                        : (lang === 'am' ? '+4,500 ብር አጽድቅ' : 'Authorize +4,500 ETB')}
                    </button>
                    <span className="brief-clock-tag">
                      {clock || '07:00'} EAT · Live
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— CHAPTER 03: SEVEN SPECIALISTS (STREAMLINED FLOW) ——— */}
      <section className="flow-section" id="specialists">
        <div className="flow-kicker">03 / SPECIALISTS</div>

        <h2 className="flow-giant-title">
          {lang === 'am' ? (
            <>ሰባቱ ክፍሎች። <em>አንድ ጠረጴዛ።</em></>
          ) : (
            <>SEVEN DEPARTMENTS. <em>ONE MIND.</em></>
          )}
        </h2>

        <div className="flow-fine-rule" />

        <p className="flow-lead">
          {lang === 'am'
            ? 'እያንዳንዱ ክፍል በራሱ አቅም ይሰራል፤ ሁሉም በአንድ ዋና ስራ አስፈፃሚ ድምፅ ስር ይተባበራሉ።'
            : 'Seven specialized AI layers tailored to your hotel, unified under a single CEO intelligence.'}
        </p>

        {/* 7 Clean High-Impact Specialists Accordion */}
        <div className="spec-accordion-list">
          {SPECIALISTS.map((s) => {
            const isOpen = openSpec === s.idx
            return (
              <div
                key={s.idx}
                className={`spec-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="spec-accordion-header"
                  onClick={() => setOpenSpec(isOpen ? null : s.idx)}
                  aria-expanded={isOpen}
                >
                  <div className="spec-header-left">
                    <span className="spec-item-num">{s.idx}</span>
                    <h3 className="spec-item-title">{s[lang].name}</h3>
                  </div>

                  <div className="spec-header-right">
                    <span className="spec-impact-pill">{s[lang].impact}</span>
                    <span className={`spec-toggle-box ${isOpen ? 'open' : ''}`}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="spec-toggle-icon"
                      >
                        <path
                          d="M7 1V13M1 7H13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="spec-accordion-body"
                  >
                    <div className="spec-tags-track">
                      {s[lang].tags?.map((tag, tIdx) => (
                        <span key={tIdx} className="spec-tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ——— CHAPTER 04: THE OPERATIONAL SHIFT (CONTRAST & CLARITY) ——— */}
      <section className="flow-section" id="shift">
        <div className="flow-kicker">04 / THE SHIFT</div>

        <h2 className="flow-giant-title">
          {lang === 'am' ? (
            <>የቀድሞው አሰራር vs <em>መሪAgent።</em></>
          ) : (
            <>THE SCRAMBLE vs. <em>ONE VOICE.</em></>
          )}
        </h2>

        <div className="flow-fine-rule" />

        <div className="shift-flow-grid">
          <div className="shift-flow-panel old">
            <div className="shift-badge-mono">
              {lang === 'am' ? 'የቀድሞው አሰራር' : 'THE OLD WAY'}
            </div>
            <h3 className="shift-heading">
              {lang === 'am' ? 'የተበታተነ እና የዘገየ' : 'Fragmented & Reactive'}
            </h3>
            <ul className="shift-clean-list">
              {(lang === 'am'
                ? [
                  'በPMS፣ POS እና የሽያጭ ሲስተሞች 5 የተከፋፈሉ አካውንቶች',
                  'በዋትስአፕ እና ስልክ ሱፐርቫይዘሮችን ማሳደድ',
                  'የጥገና ብልሽቶች የሚታወቁት እንግዶች ሲያማርሩ ብቻ',
                  'ያልተስተካከሉ የሳምንቱ መጨረሻ ዋጋዎች የገቢ ኪሳራ ያስከትላሉ',
                ]
                : [
                  '5 Separate logins across PMS, POS & channel managers',
                  'Supervisors chased over endless WhatsApp messages',
                  'Maintenance faults discovered after guest complaints',
                  'Unadjusted weekend rates leaving money on the table',
                ]
              ).map((text, idx) => (
                <li key={idx} className="shift-list-item">
                  <span className="shift-bullet">—</span>
                  <span className="shift-text">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="shift-flow-panel new">
            <div className="shift-badge-mono active">
              {lang === 'am' ? 'ከመሪAGENT ጋር' : 'WITH መሪAGENT'}
            </div>
            <h3 className="shift-heading">
              {lang === 'am' ? 'አንድ የስራ አመራር ዴስክ' : 'One Executive Desk'}
            </h3>
            <ul className="shift-clean-list">
              {(lang === 'am'
                ? [
                  'የጠዋት 1፡00 ሰዓት ግልጽና አጭር ማጠቃለያ በዴስክዎ ላይ',
                  'የክፍል ጽዳት እንደ እንግዶች መግቢያ ሰዓት በራስ-ሰር ቅድሚያ ይሰጠዋል',
                  'የመሳሪያዎች እና ኤሲ ብልሽት ወዲያውኑ ለቴክኒሻኖች ይመደባል',
                  'ተለዋዋጭ የዋጋ ጭማሪዎች በ1-ጠቅታ ይጸድቃሉ',
                ]
                : [
                  'One 07:00 AM plain-language briefing on your desk',
                  'Rooms prioritized automatically to match guest check-ins',
                  'Equipment anomalies routed to technicians instantly',
                  'Dynamic yield rate increases committed with 1 tap',
                ]
              ).map((text, idx) => (
                <li key={idx} className="shift-list-item">
                  <span className="shift-bullet">✓</span>
                  <span className="shift-text">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— CHAPTER 05: FOUNDER ACCESS (BOLD & DIRECT) ——— */}
      <section className="flow-section" id="contact">
        <div className="flow-kicker">05 / DIRECT ACCESS</div>

        <h2 className="flow-giant-title">
          {lang === 'am' ? (
            <>ሲኢኦን <em>ጠረጴዛዎ ላይ ያድርጉ።</em></>
          ) : (
            <>PUT AN AI CEO <em>ON YOUR DESK.</em></>
          )}
        </h2>

        <div className="flow-fine-rule" />

        <p className="flow-lead">
          {lang === 'am'
            ? 'የስልክ ቁጥርዎን እና የሆቴልዎን ስም ይተዉልን። መሪAgent በሆቴልዎ ላይ እንዴት እንደሚሰራ በቀጥታ ደውለን እናስረዳዎታለን።'
            : 'Leave your phone number and hotel details. Our founders will call you directly to discuss how መሪAgent runs your operations.'}
        </p>

        <div className="contact-flow-grid">
          <div className="contact-main-card">
            {formSubmitted ? (
              <div className="contact-success-state">
                <div className="contact-success-badge">
                  <span>✓</span>
                  <span>{lang === 'am' ? 'ጥያቄዎ ደርሶናል' : 'Demo Request Received'}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-['Outfit']">
                  {lang === 'am' ? 'እናመሰግናለን! በቅርቡ እንደውላለን።' : 'We will call you shortly.'}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {lang === 'am' ? (
                    <>
                      ስለ <span className="text-white font-semibold">{formData.hotel || 'ሆቴልዎ'}</span> አሰራር ለመነጋገር በ{' '}
                      <span className="text-[var(--purple-glow)] font-mono font-bold">{formData.phone}</span> እንደውልልዎታለን።
                    </>
                  ) : (
                    <>
                      Our team will call you directly at{' '}
                      <span className="text-[var(--purple-glow)] font-mono font-bold">{formData.phone}</span> to discuss how መሪAgent manages{' '}
                      <span className="text-white font-semibold">{formData.hotel || 'your property'}</span>.
                    </>
                  )}
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href="tel:+251992013392"
                    className="hero-pill-btn !py-2.5 !px-5 !text-xs"
                  >
                    <span>{lang === 'am' ? 'አሁኑኑ በቀጥታ ይደውሉ' : 'Call Founders Directly'}</span>
                    <span className="ml-1.5">↗</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-zinc-400 hover:text-white underline underline-offset-4 px-2 cursor-pointer"
                  >
                    {lang === 'am' ? 'ሌላ ጥያቄ ያስገቡ' : 'Submit another request'}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-[11px] font-mono font-bold tracking-widest text-[var(--purple-accent)] uppercase mb-2">
                  {lang === 'am' ? 'ቀጥተኛ የዴሞ ጥያቄ' : 'DIRECT DEMO REQUEST'}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-['Outfit']">
                  {lang === 'am' ? 'ዴሞ ይጠይቁ' : 'Request a Demo'}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  {lang === 'am'
                    ? 'ስልክ ቁጥርዎን እና የሆቴልዎን ስም ይተዉልን። በቀጥታ ደውለን መሪAgent በንብረትዎ ላይ እንዴት እንደሚሰራ እናነጋግርዎታለን።'
                    : 'Send your phone number and hotel name. We will call you directly and talk through your operations.'}
                </p>

                <form onSubmit={handleDemoSubmit} className="contact-form">
                  <div className="contact-form-grid">
                    <div className="contact-form-field">
                      <label className="contact-form-label">
                        {lang === 'am' ? 'ሙሉ ስም *' : 'Your Name *'}
                      </label>
                      <input
                        name="name"
                        required
                        className="contact-form-input"
                        placeholder={lang === 'am' ? 'ስምዎ' : 'e.g. Israel Ashenafi'}
                      />
                    </div>

                    <div className="contact-form-field">
                      <label className="contact-form-label">
                        {lang === 'am' ? 'ስልክ ቁጥር * (እንድንደውልልዎት)' : 'Phone Number * (We will call you)'}
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="contact-form-input highlight-focus"
                        placeholder="+251 9... or 09..."
                      />
                    </div>
                  </div>

                  <div className="contact-form-grid">
                    <div className="contact-form-field">
                      <label className="contact-form-label">
                        {lang === 'am' ? 'የሆቴሉ ስም *' : 'Hotel or Property *'}
                      </label>
                      <input
                        name="hotel"
                        required
                        className="contact-form-input"
                        placeholder={lang === 'am' ? 'ምሳሌ፡ ስካይላይት ሆቴል' : 'e.g. Skylight Hotel, Haile Grand...'}
                      />
                    </div>

                    <div className="contact-form-field">
                      <label className="contact-form-label">
                        {lang === 'am' ? 'የክፍል ብዛት ወይም ሲስተም (አማራጭ)' : 'Rooms or Current PMS (Optional)'}
                      </label>
                      <input
                        name="note"
                        className="contact-form-input"
                        placeholder={lang === 'am' ? 'ምሳሌ፡ 85 ክፍሎች፣ ኦፔራ' : 'e.g. 85 rooms, Opera, manual...'}
                      />
                    </div>
                  </div>

                  <button type="submit" className="contact-submit-btn">
                    <span>{lang === 'am' ? 'ዴሞ ይጠይቁ' : 'Request Demo'}</span>
                    <span>→</span>
                  </button>

                  <div className="text-[12px] text-zinc-500 mt-2 text-center">
                    {lang === 'am'
                      ? '🔒 ቀጥተኛ መስመር፡ በቅርቡ በስልክ ቁጥርዎ ደውለን እናነጋግርዎታለን።'
                      : '🔒 Direct founder line: We will call your phone number to discuss your property.'}
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="contact-founder-card">
            <div className="text-[11px] font-mono font-bold tracking-widest text-[var(--purple-accent)] uppercase mb-2">
              Founders & Direct Lines
            </div>
            <div className="font-bold text-white text-base mb-1">
              Israel Ashenafi & Tinsae Befekadu
            </div>
            <div className="text-xs text-zinc-400 mb-4">Addis Ababa, Ethiopia</div>

            <div className="contact-line">
              <span className="text-[var(--text-muted)] font-mono text-xs">Phone 1</span>
              <a href="tel:+251992013392" className="font-mono text-sm text-white hover:text-[var(--purple-glow)]">
                +251 992 013 392
              </a>
            </div>

            <div className="contact-line">
              <span className="text-[var(--text-muted)] font-mono text-xs">Phone 2</span>
              <a href="tel:+251940558597" className="font-mono text-sm text-white hover:text-[var(--purple-glow)]">
                +251 940 558 597
              </a>
            </div>

            <div className="contact-line">
              <span className="text-[var(--text-muted)] font-mono text-xs">Email</span>
              <a href="mailto:israelashenafi29@gmail.com" className="font-mono text-xs text-white hover:text-[var(--purple-glow)]">
                israelashenafi29@gmail.com
              </a>
            </div>

            <div className="contact-line">
              <span className="text-[var(--text-muted)] font-mono text-xs">Email 2</span>
              <a href="mailto:Tinsaebefekadu2012@gmail.com" className="font-mono text-xs text-white hover:text-[var(--purple-glow)]">
                Tinsaebefekadu2012@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flow-footer">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="መሪAgent" className="h-10 w-auto object-contain" />
          <span className="font-bold text-white text-sm">
            <span className="font-['Noto_Serif_Ethiopic']">መሪ</span>Agent — Hotel CEO AI
          </span>
        </div>

        <button
          type="button"
          onClick={scrollToContact}
          className="hero-pill-btn !py-2 !px-5 !text-xs cursor-pointer"
        >
          <span>{lang === 'am' ? 'ዴሞ ይጠይቁ' : 'Request Demo'}</span>
          <span className="ml-1.5">↑</span>
        </button>

        <div className="text-[12px] font-mono text-[var(--text-muted)]">
          © {new Date().getFullYear()} መሪAgent. Addis Ababa, Ethiopia.
        </div>
      </footer>
    </div>
  )
}
