import { useEffect, useRef, useState } from 'react'

const TOPICS = [
  {
    id: 'architecture', title: 'Architecture & runtime', titleAm: 'አወቃቀር እና አሰራር',
    body: 'MeriAgent uses Django and Django REST Framework for hotel operations, with a versioned REST API at /api/v1/. The AI layer uses Google ADK and Google GenAI. Celery and Redis support background work. The repository also includes a desktop client and a React management interface.',
    bodyAm: 'MeriAgent ለሆቴል ስራዎች Django እና Django REST Framework ይጠቀማል። REST API በ /api/v1/ ይገኛል። የAI ክፍሉ Google ADK እና Google GenAI፣ የጀርባ ስራዎች Celery እና Redis ይጠቀማሉ። የዴስክቶፕ እና የReact አስተዳደር በይነገጾችም አሉ።',
  },
  {
    id: 'access', title: 'Authentication & hotel isolation', titleAm: 'መግቢያ እና የሆቴል መረጃ ጥበቃ',
    body: 'Authentication uses JWT access and refresh tokens. Token claims include hotel tenancy, role, and permissions. Requests are scoped to the authenticated hotel; access to a resource also depends on the user’s permissions. Keep access tokens and refresh tokens out of public frontend code.',
    bodyAm: 'መግቢያ JWT access እና refresh tokens ይጠቀማል። Token የሆቴሉን፣ የተጠቃሚውን ሚና እና ፈቃዶች ይይዛል። ጥያቄዎች በተጠቃሚው ሆቴል እና ፈቃድ ይገደባሉ። Tokens በሕዝብ የፊት ገጽ ኮድ ውስጥ አይቀመጡ።',
  },
  {
    id: 'api', title: 'Operations API reference', titleAm: 'የስራዎች API ማጣቀሻ',
    body: 'These collection routes are registered in the backend. Available methods, fields, and results depend on the endpoint, hotel data, and assigned permissions. Use the API base URL supplied for your deployment.',
    bodyAm: 'እነዚህ መንገዶች በbackend ተመዝግበዋል። የሚፈቀዱ ዘዴዎች፣ መስኮች እና ውጤቶች እንደ endpoint፣ መረጃ እና ፈቃድ ይለያያሉ። ለሆቴልዎ የተሰጠውን API URL ይጠቀሙ።',
  },
  {
    id: 'approvals', title: 'Approvals & audit trail', titleAm: 'ማረጋገጫ እና የስራ መዝገብ',
    body: 'Sensitive agent actions can return pending_approval with an approval_id rather than executing immediately. Authorized managers review queued requests through the approvals API. The audit layer records agent actions, financial changes, and approval decisions. Rejected or expired requests must not be treated as completed work.',
    bodyAm: 'የተወሰኑ የAI እርምጃዎች ወዲያውኑ ከመፈጸም ይልቅ pending_approval እና approval_id ይመልሳሉ። ፈቃድ ያላቸው አስተዳዳሪዎች በapprovals API ይገመግማሉ። የAI እርምጃዎች፣ የፋይናንስ ለውጦች እና ውሳኔዎች ይመዘገባሉ። ውድቅ የተደረገ ወይም ጊዜው ያለፈ ጥያቄ እንደተፈጸመ አይቆጠርም።',
  },
  {
    id: 'setup', title: 'Property setup & integrations', titleAm: 'የሆቴል ማዋቀር እና ግንኙነቶች',
    body: 'The desktop onboarding flow supports hotel creation, existing-hotel login, activation validation, and device registration. Channel connections, room mappings, and sync logs have dedicated API resources. Confirm supported providers and credentials during onboarding; a registered resource does not mean every external provider is connected.',
    bodyAm: 'የዴስክቶፕ ማዋቀር አዲስ ሆቴል መፍጠር፣ ነባር ሆቴል መግባት፣ activation ማረጋገጥ እና መሳሪያ መመዝገብ ይደግፋል። የቻናል ግንኙነቶች፣ የክፍል mappings እና sync logs የAPI መንገዶች አሏቸው። የሚደገፉ አቅራቢዎችን በማዋቀር ጊዜ ያረጋግጡ።',
  },
]

const ROUTES = [
  ['rooms/', 'Rooms & availability'], ['bookings/', 'Reservations'],
  ['housekeeping/', 'Housekeeping tasks'], ['maintenance/', 'Maintenance tickets'],
  ['revenue/rate-plans/', 'Rate plans'], ['folios/', 'Guest folios'],
  ['approvals/', 'Manager approvals'], ['audit/events/', 'Audit events'],
  ['channels/connections/', 'Channel connections'],
]

const OVERVIEW = {
  id: 'introduction', title: 'Introduction', titleAm: 'መግቢያ',
  body: 'MeriAgent brings hotel operations and AI assistance into one platform. These guides explain the underlying services, how your team accesses hotel data, and how sensitive actions are reviewed.',
  bodyAm: 'MeriAgent የሆቴል ስራዎችን እና የAI እገዛን በአንድ መድረክ ያገናኛል። እነዚህ ሰነዶች አገልግሎቶችን፣ የመረጃ መዳረሻን እና የእርምጃ ማረጋገጫን ያብራራሉ።',
}
const ARTICLES = [OVERVIEW, ...TOPICS]
const CODE = ['curl "$MERI_API_BASE/api/v1/rooms/" ' + String.fromCharCode(92), '  -H "Authorization: Bearer $MERI_ACCESS_TOKEN"'].join('\n')
const GUIDANCE = {
  architecture: [
    ['Django + REST Framework', 'Hotel records and operations are exposed through the versioned REST API.', 'የሆቴል መዝገቦች እና ስራዎች በREST API ይቀርባሉ።'],
    ['Google ADK + GenAI', 'The agent layer provides AI assistance and routes actions through the application’s controls.', 'የAI ክፍሉ እገዛ ይሰጣል፣ እርምጃዎችንም በመተግበሪያው ቁጥጥር ያስተላልፋል።'],
    ['Celery + Redis', 'Background jobs run separately from interactive API requests.', 'የጀርባ ስራዎች ከAPI ጥያቄዎች ተለይተው ይሰራሉ።'],
  ],
  access: [
    ['Access tokens', 'Send an issued JWT access token in the Authorization: Bearer header for protected API requests.', 'ለተጠበቁ ጥያቄዎች JWT access token በAuthorization: Bearer header ይላኩ።'],
    ['Hotel scope', 'Hotel tenancy is carried in token claims. A token does not grant unrestricted access across properties.', 'የሆቴል ወሰን በtoken claims ይያዛል። Token ያልተገደበ የሁሉም ሆቴሎች መዳረሻ አይሰጥም።'],
    ['Roles & permissions', 'Access also depends on assigned permissions. Use the role appropriate to the operation.', 'መዳረሻ በተመደቡ ፈቃዶች ይወሰናል። ለስራው ተገቢውን ሚና ይጠቀሙ።'],
  ],
  approvals: [
    ['Request', 'A sensitive action can be queued with pending_approval and an approval_id.', 'የተወሰነ እርምጃ በpending_approval እና approval_id ማረጋገጫ ይጠብቃል።'],
    ['Review', 'An authorized manager reviews the request before it can proceed.', 'ፈቃድ ያለው አስተዳዳሪ ጥያቄውን ከመቀጠሉ በፊት ይገመግማል።'],
    ['Verify', 'Check the resulting status. Rejection, expiry, and execution failure are not successful completion.', 'ውጤቱን ያረጋግጡ። ውድቅ፣ ጊዜ ማለፍ እና የአፈጻጸም ስህተት የተሳካ አፈጻጸም አይደሉም።'],
  ],
  setup: [
    ['Choose your property', 'Create a new hotel or sign in to an existing hotel through the desktop onboarding flow.', 'በዴስክቶፕ ማዋቀር አዲስ ሆቴል ይፍጠሩ ወይም ወደ ነባር ሆቴል ይግቡ።'],
    ['Activate & register', 'Complete activation validation and register the installation for the property.', 'Activation ያረጋግጡ እና መሳሪያውን ለሆቴሉ ይመዝግቡ።'],
    ['Confirm integrations', 'Check provider support, credentials, and room mappings before relying on channel synchronization.', 'የቻናል ማመሳሰልን ከመጠቀምዎ በፊት አቅራቢ፣ credentials እና room mappings ያረጋግጡ።'],
  ],
}

function readArticle() {
  const id = window.location.hash.slice(1).split('--')[0]
  return ARTICLES.some(article => article.id === id) ? id : 'introduction'
}

export default function Docs() {
  const [active, setActive] = useState(readArticle)
  const [lang, setLang] = useState(() => new URLSearchParams(window.location.search).get('lang') === 'am' ? 'am' : 'en')
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const copyTimer = useRef(null)
  const am = lang === 'am'
  const article = ARTICLES.find(item => item.id === active)
  const index = ARTICLES.indexOf(article)
  const title = am ? article.titleAm : article.title
  const text = (en, translated) => am ? translated : en
  const filtered = ARTICLES.filter(item => `${item.title} ${item.body} ${item.titleAm} ${item.bodyAm}`.toLowerCase().includes(query.trim().toLowerCase()))
  const home = am ? '/?lang=am' : '/'
  const sectionLink = id => `#${active}--${id}`
  const sections = active === 'introduction'
    ? [['start', text('Start here', 'እዚህ ይጀምሩ')], ['guides', text('Explore the guides', 'ሰነዶችን ይመልከቱ')]]
    : active === 'api'
      ? [['resources', text('API resources', 'የAPI መንገዶች')], ['example', text('Request example', 'የጥያቄ ምሳሌ')]]
      : [['details', text('How it works', 'እንዴት ይሰራል')], ['notes', text('Implementation notes', 'የአሰራር ማስታወሻ')]]

  useEffect(() => {
    const sync = () => {
      if (window.location.hash === '#article') return
      setActive(readArticle()); setMenuOpen(false); setQuery('')
    }
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  useEffect(() => {
    document.title = `${title} · MeriAgent Docs`
    document.documentElement.lang = lang
    const section = window.location.hash.split('--')[1]
    if (section) document.getElementById(`${active}--${section}`)?.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [active, title, lang])

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  const changeLang = () => {
    const next = am ? 'en' : 'am'
    setLang(next)
    const url = new URL(window.location.href)
    if (next === 'am') url.searchParams.set('lang', 'am')
    else url.searchParams.delete('lang')
    window.history.replaceState(null, '', url)
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(CODE)
      setCopied(true); setCopyFailed(false)
      clearTimeout(copyTimer.current)
      copyTimer.current = setTimeout(() => setCopied(false), 2000)
    } catch { setCopyFailed(true) }
  }

  return (
    <div className="documentation">
      <a className="docs-skip" href="#article">{text('Skip to content', 'ወደ ይዘት')}</a>
      <header className="docs-topbar">
        <a className="docs-brand" href={home}><img src="/logo.png" alt="MeriAgent" /><span>MeriAgent <span className="docs-brand-divider">/</span> <strong>Docs</strong></span></a>
        <div className="docs-top-actions">
          <a className="docs-home-link" href={home}>{text('Back to website', 'ወደ ድረ ገጹ')} <span>↗</span></a>
          <button className="docs-language" onClick={changeLang}>{am ? 'English' : 'አማርኛ'}</button>
          <button className="docs-menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="docs-sidebar" aria-label={text('Toggle documentation navigation', 'የሰነዶች አሰሳ')}>☰</button>
        </div>
      </header>

      <div className="docs-shell">
        <aside className={`docs-sidebar ${menuOpen ? 'is-open' : ''}`} id="docs-sidebar">
          <label className="docs-search"><span aria-hidden="true">⌕</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={text('Search documentation…', 'ሰነዶችን ይፈልጉ…')} aria-label={text('Search documentation', 'ሰነዶችን ይፈልጉ')} /></label>
          <nav aria-label={text('Documentation', 'ሰነዶች')}>
            <p className="docs-nav-heading">{query ? text('Search results', 'የፍለጋ ውጤቶች') : text('GETTING STARTED', 'መጀመሪያ')}</p>
            {filtered.map(item => <a key={item.id} href={`#${item.id}`} className={`docs-sidebar-link ${active === item.id ? 'is-active' : ''}`} aria-current={active === item.id ? 'page' : undefined}><span className="docs-nav-icon" aria-hidden="true">{item.id === 'api' ? '{ }' : item.id === 'introduction' ? '◈' : '▤'}</span>{am ? item.titleAm : item.title}</a>)}
            {filtered.length === 0 && <p className="docs-no-results">{text('No matching guides. Try “API”, “tokens”, or “hotel”.', 'ሰነድ አልተገኘም። “API”፣ “tokens” ወይም “ሆቴል” ይሞክሩ።')}</p>}
          </nav>
          <div className="docs-sidebar-bottom"><span className="docs-status-dot" />{text('MeriAgent technical documentation', 'የMeriAgent ቴክኒካዊ ሰነዶች')}<code>/api/v1/</code></div>
        </aside>

        <main className="docs-content" id="article" tabIndex={-1}>
          <div className="docs-breadcrumb">{text('Documentation', 'ሰነዶች')} <span>/</span> {title}</div>
          <p className="docs-eyebrow">{active === 'api' ? text('API REFERENCE', 'የAPI ማጣቀሻ') : text('GUIDES', 'መመሪያዎች')}</p>
          <h1>{title}</h1>
          <p className="docs-intro">{am ? article.bodyAm : article.body}</p>

          {active === 'introduction' ? <>
            <div className="docs-callout"><p>{text('Built for hotel teams and technical partners. Start with the architecture, then follow the access and integration guides for your deployment.', 'ለሆቴል ቡድኖች እና ቴክኒካዊ አጋሮች። ከአወቃቀር ይጀምሩ፣ ከዚያ የመዳረሻ እና የግንኙነት ሰነዶችን ይከተሉ።')}</p></div>
            <section id="introduction--start"><h2>{text('Start here', 'እዚህ ይጀምሩ')}</h2><p>{text('The backend exposes hotel operations through a versioned REST API. The desktop onboarding flow connects an installation to a property, while roles and approvals control what users and agents can do.', 'Backend የሆቴል ስራዎችን በREST API ያቀርባል። የዴስክቶፕ ማዋቀር መሳሪያውን ከሆቴሉ ያገናኛል፤ ሚናዎች እና ማረጋገጫዎች የተጠቃሚዎችን እና የAI እርምጃዎችን ይቆጣጠራሉ።')}</p><a className="docs-inline-link" href="#architecture">{text('Understand the architecture', 'አወቃቀሩን ይረዱ')} →</a></section>
            <section id="introduction--guides"><h2>{text('Explore the guides', 'ሰነዶችን ይመልከቱ')}</h2><div className="docs-guide-grid">{TOPICS.map(item => <a className="docs-guide-card" key={item.id} href={`#${item.id}`}><span className="docs-card-icon" aria-hidden="true">{item.id === 'api' ? '{ }' : '▤'}</span><h3>{am ? item.titleAm : item.title}</h3><p>{text(({architecture:'Services, clients, and background jobs.',access:'Tokens, roles, and property boundaries.',api:'Hotel resources and a first API request.',approvals:'Manager review and accountable actions.',setup:'Onboarding, devices, and channels.'})[item.id], 'ቴክኒካዊ ዝርዝሮችን እና የአሰራር መመሪያን ይመልከቱ።')}</p><span className="docs-card-arrow" aria-hidden="true">↗</span></a>)}</div></section>
          </> : active === 'api' ? <>
            <section id="api--resources"><h2>{text('API resources', 'የAPI መንገዶች')}</h2><p>{text('All paths below are relative to /api/v1/. Authenticate using an issued access token and the API base URL for your deployment.', 'ከታች ያሉት መንገዶች በ /api/v1/ ስር ናቸው። የተሰጠዎትን access token እና API base URL ይጠቀሙ።')}</p><div className="docs-reference-table"><table><thead><tr><th>{text('Resource', 'መንገድ')}</th><th>{text('Purpose', 'አጠቃቀም')}</th></tr></thead><tbody>{ROUTES.map(([route,purpose]) => <tr key={route}><td><code>{route}</code></td><td>{purpose}</td></tr>)}</tbody></table></div></section>
            <section id="api--example"><h2>{text('Request example', 'የጥያቄ ምሳሌ')}</h2><p>{text('Read the room collection. MERI_API_BASE and MERI_ACCESS_TOKEN are placeholders for your own deployment URL and issued token.', 'የክፍሎችን ዝርዝር ያንብቡ። MERI_API_BASE እና MERI_ACCESS_TOKEN ለእርስዎ URL እና token መተኪያዎች ናቸው።')}</p><div className="docs-code-block"><div className="docs-code-header"><span>Terminal <small>cURL</small></span><button onClick={copyCode}>{copied ? text('Copied ✓', 'ተቀድቷል ✓') : text('Copy', 'ቅዳ')}</button></div><pre><code>{CODE}</code></pre></div><p className="docs-copy-status" role="status">{copyFailed ? text('Clipboard access is unavailable. Select the code to copy it manually.', 'ኮዱን መርጠው በእጅ ይቅዱ።') : copied ? text('Code copied to clipboard.', 'ኮዱ ተቀድቷል።') : ''}</p><a className="docs-inline-link" href="#access">{text('Read the authentication guide', 'የመግቢያ መመሪያ')} →</a></section>
          </> : <>
            <section id={`${active}--details`}><h2>{text('How it works', 'እንዴት ይሰራል')}</h2><div className="docs-steps">{GUIDANCE[active].map(([heading,description,descriptionAm],i) => <div className="docs-step" key={heading}><span>{String(i + 1).padStart(2,'0')}</span><div><h3>{heading}</h3><p>{am ? descriptionAm : description}</p></div></div>)}</div></section>
            <section id={`${active}--notes`}><h2>{text('Implementation notes', 'የአሰራር ማስታወሻ')}</h2><div className="docs-callout"><p>{active === 'access' ? text('Keep issued tokens out of public frontend source and shared examples. Hotel scope and permissions still apply to each request.', 'Tokens በሕዝብ ኮድ እና ምሳሌዎች ውስጥ አይቀመጡ። የሆቴል ወሰን እና ፈቃዶች ለሁሉም ጥያቄዎች ይተገበራሉ።') : text('These guides describe the current backend resources. Confirm deployment configuration and supported integrations with your technical team before connecting production systems.', 'እነዚህ ሰነዶች የbackend መንገዶችን ይገልጻሉ። የማዋቀር እና ግንኙነት ዝርዝሮችን ከቴክኒክ ቡድንዎ ጋር ያረጋግጡ።')}</p></div></section>
          </>}

          <nav className="docs-pagination" aria-label={text('Adjacent guides', 'ተከታይ ሰነዶች')}>{[ARTICLES[index - 1],ARTICLES[index + 1]].map((item,i) => item ? <a key={item.id} href={`#${item.id}`} className={i ? 'next' : ''}><span>{i ? text('Next →', 'ቀጣይ →') : text('← Previous', '← ቀዳሚ')}</span><strong>{am ? item.titleAm : item.title}</strong></a> : <div key={i} />)}</nav>
          <footer className="docs-article-footer">MeriAgent Docs <span>·</span> {text('Technical guides & reference', 'ቴክኒካዊ መመሪያዎች')}</footer>
        </main>

        <aside className="docs-toc"><p>{text('On this page', 'በዚህ ገጽ')}</p><nav aria-label={text('On this page', 'በዚህ ገጽ')}>{sections.map(([id,label]) => <a key={id} href={sectionLink(id)}>{label}</a>)}</nav><div className="docs-toc-help">{text('Need help with setup?', 'ለማዋቀር እገዛ ይፈልጋሉ?')}<a href={`${home}#contact`}>{text('Talk to our team', 'ቡድናችንን ያነጋግሩ')} ↗</a></div></aside>
      </div>
    </div>
  )
}
