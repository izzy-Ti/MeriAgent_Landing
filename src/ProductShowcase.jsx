import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import './showcase.css'

const SCREENS = [
  { file: '2.png', en: { label: 'YOUR HOTEL, IN CONVERSATION', title: 'Ask a question. Get your bearings.', subtitle: 'Start with what you need to know. From today’s occupancy to the next VIP arrival, your AI assistant gives you a simpler way into your hotel’s operations.', points: ['Daily operational briefings', 'Revenue and occupancy questions', 'A place to start every morning'], caption: 'Hotel CEO assistant' }, am: { label: 'ስለ ሆቴልዎ ይጠይቁ', title: 'ጥያቄ ይጠይቁ። ግልጽ እይታ ያግኙ።', subtitle: 'ከዛሬ የክፍል ሙሌት እስከ ቀጣዩ VIP እንግዳ ድረስ፣ የAI ረዳትዎ የሆቴልዎን ስራዎች ለመረዳት ቀላል መንገድ ይሰጣል።', points: ['የዕለቱ ስራ ማጠቃለያ', 'የገቢ እና ሙሌት ጥያቄዎች', 'በየጠዋቱ መጀመሪያ'], caption: 'የሆቴል AI ረዳት' } },
  { file: '1.png', en: { label: 'THE BIG PICTURE', title: 'Less reading between the lines. More knowing what’s next.', subtitle: 'Turn an executive question into a clear summary of performance, guest experience, and the issues that need your attention. Give your next decision a better starting point.', points: ['An executive summary in plain language', 'Priorities across departments', 'Recommended next steps'], caption: 'Executive summary' }, am: { label: 'የሆቴሉ ሙሉ እይታ', title: 'ግልጽ ማጠቃለያ። የተሻለ ቀጣይ ውሳኔ።', subtitle: 'የአፈጻጸም፣ የእንግዳ እርካታ እና ትኩረት የሚፈልጉ ጉዳዮችን በአንድ ማጠቃለያ ይመልከቱ።', points: ['በቀላል ቋንቋ ማጠቃለያ', 'የክፍሎች ቅድሚያ', 'የቀጣይ እርምጃ ምክሮች'], caption: 'የስራ አመራር ማጠቃለያ' } },
  { file: '3.png', en: { label: 'A CLEARER FRONT DESK', title: 'Know your day before it gets busy.', subtitle: 'Arrivals, departures, occupancy, and room readiness come together on one dashboard. Your team can see what’s happening and focus on welcoming the next guest.', points: ['Today’s arrivals and departures', 'Room readiness at a glance', 'A shared view of the next priority'], caption: 'Operations dashboard' }, am: { label: 'ግልጽ የፊት ዴስክ እይታ', title: 'ቀኑ ከመጨናነቁ በፊት ያቅዱ።', subtitle: 'መግቢያዎች፣ መውጫዎች፣ ሙሌት እና የክፍል ዝግጁነት በአንድ ዳሽቦርድ። ቡድንዎ ቀጣዩን እንግዳ ለመቀበል ትኩረት ይስጥ።', points: ['የዛሬ መግቢያና መውጫ', 'የክፍል ዝግጁነት', 'የቀጣዩ ስራ ቅድሚያ'], caption: 'የስራዎች ዳሽቦርድ' } },
  { file: '4.png', en: { label: 'FROM BOOKING TO GOODBYE', title: 'Make every arrival feel handled.', subtitle: 'Keep reservations, guest details, and stay changes in one place. From walk-ins to room moves and late check-outs, give your front desk a clearer path through every stay.', points: ['Reservations you can find quickly', 'Check-in and check-out workflows', 'Room moves and stay adjustments'], caption: 'Front desk reservations' }, am: { label: 'ከቦታ ማስያዝ እስከ መውጫ', title: 'እያንዳንዱን እንግዳ በዝግጁነት ይቀበሉ።', subtitle: 'ቦታ ማስያዝ፣ የእንግዳ ዝርዝር እና የቆይታ ለውጦችን በአንድ ቦታ ያደራጁ።', points: ['ፈጣን የቦታ ማስያዝ ፍለጋ', 'የመግቢያና መውጫ አሰራር', 'የክፍል ለውጥ እና ቆይታ ማስተካከያ'], caption: 'የፊት ዴስክ ቦታ ማስያዝ' } },
  { file: '5.png', en: { label: 'SEE THE DAYS AHEAD', title: 'Find the gaps. Plan the opportunity.', subtitle: 'See reservations across a 14-day room calendar. Spot open nights, understand upcoming stays, and plan your availability with a view your team can actually follow.', points: ['A room-by-room booking timeline', 'Upcoming stays in one view', 'A clearer picture of available nights'], caption: 'Reservation calendar' }, am: { label: 'ቀጣዮቹን ቀናት ይዩ', title: 'ክፍት ቀናትን ይለዩ። እድሉን ያቅዱ።', subtitle: 'በ14 ቀናት የክፍል ካሌንደር ቦታ ማስያዝን ይመልከቱ። ክፍት ምሽቶችን ይለዩ እና ቀጣዩን ቆይታ ያቅዱ።', points: ['በክፍል የተከፈለ ካሌንደር', 'ቀጣይ ቆይታዎች በአንድ እይታ', 'የክፍት ቀናት እይታ'], caption: 'የቦታ ማስያዝ ካሌንደር' } },
  { file: '6.png', en: { label: 'ROOMS THAT WORK FOR YOU', title: 'A ready room starts with a clear picture.', subtitle: 'See which rooms are available, occupied, cleaning, or under maintenance. Keep room status and outstanding work visible so the next check-in doesn’t start with a round of phone calls.', points: ['Room status across your property', 'Housekeeping and maintenance context', 'Filters to find the room you need'], caption: 'Room rack & inventory' }, am: { label: 'የክፍሎች ግልጽ እይታ', title: 'ዝግጁ ክፍል በግልጽ መረጃ ይጀምራል።', subtitle: 'ክፍት፣ የተያዙ፣ በጽዳት ወይም በጥገና ላይ ያሉ ክፍሎችን ይመልከቱ። ለቀጣዩ እንግዳ ያለ ብዙ ጥሪ ዝግጁ ይሁኑ።', points: ['የሁሉም ክፍሎች ሁኔታ', 'የጽዳት እና ጥገና መረጃ', 'የክፍል ፍለጋ ማጣሪያ'], caption: 'የክፍሎች ሁኔታ እና ክምችት' } },
]

export default function ProductShowcase({ lang }) {
  const reduceMotion = useReducedMotion()
  const [selected, setSelected] = useState(null)
  const dialogRef = useRef(null)
  const am = lang === 'am'
  useEffect(() => {
    if (selected === null) return
    const dialog = dialogRef.current
    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { dialog.close(); document.body.style.overflow = previousOverflow }
  }, [selected])

  return (
    <div className="product-showcase">
      {SCREENS.map((screen, index) => {
        const content = screen[lang]
        const reverse = index % 2 === 1
        return (
          <article className={`product-story ${reverse ? 'image-left' : 'image-right'}`} key={screen.file} id={`product-screen-${index + 1}`}>
            <motion.div className="product-story-copy" initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: reduceMotion ? 0 : .65 }}>
              <p className="product-story-label"><span>{String(index + 1).padStart(2, '0')}</span>{content.label}</p>
              <h3>{content.title}</h3>
              <p className="product-story-subtitle">{content.subtitle}</p>
              <ul>{content.points.map(point => <li key={point}><span aria-hidden="true">↗</span>{point}</li>)}</ul>
            </motion.div>
            <motion.figure className="product-story-visual" initial={reduceMotion ? false : { opacity: 0, x: reverse ? -45 : 45, y: 25, rotateY: reverse ? 5 : -5 }} whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduceMotion ? 0 : .8, ease: [.22, 1, .36, 1], delay: reduceMotion ? 0 : .1 }}>
              <button className="product-screen-button" onClick={() => setSelected(index)} aria-label={`${am ? 'ሙሉ ስክሪን ይመልከቱ' : 'View full screenshot'}: ${content.caption}`}>
                <div className="product-window-bar" aria-hidden="true"><span className="product-window-dots"><i /><i /><i /></span><span>MeriAgent / {content.caption}</span><span className="product-expand">↗</span></div>
                <img src={`/scc/${screen.file}`} alt={`${content.caption} — MeriAgent`} width="2559" height={({'1.png':1402,'2.png':1396,'3.png':1402,'4.png':1395,'5.png':1402,'6.png':1398})[screen.file]} loading="lazy" decoding="async" />
              </button>
              <figcaption><span>{content.caption}</span><span>{am ? 'ለማሳደግ ይጫኑ ↗' : 'Click to explore ↗'}</span></figcaption>
            </motion.figure>
          </article>
        )
      })}
      <dialog ref={dialogRef} className="product-screen-dialog" onCancel={() => setSelected(null)} onClick={e => { if (e.target === e.currentTarget) setSelected(null) }} aria-label={am ? 'የምርት ስክሪን' : 'Product screenshot'}>
        {selected !== null && <><div className="product-dialog-header"><span>{SCREENS[selected][lang].caption}</span><button onClick={() => setSelected(null)} aria-label={am ? 'ዝጋ' : 'Close screenshot'} autoFocus>✕</button></div><img src={`/scc/${SCREENS[selected].file}`} alt={`${SCREENS[selected][lang].caption} — MeriAgent`} /></>}
      </dialog>
    </div>
  )
}
