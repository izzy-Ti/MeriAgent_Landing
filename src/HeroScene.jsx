export default function HeroScene({ activeSlide }) {
  return (
    <div className={`coded-hotel scene-${activeSlide}`} aria-hidden="true">
      <div className="hotel-halo" />
      <svg className="hotel-architecture" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <linearGradient id="hotel-glass" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#30213f" /><stop offset="1" stopColor="#09090f" />
          </linearGradient>
          <linearGradient id="hotel-light" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#dcc0ff" stopOpacity=".6" /><stop offset="1" stopColor="#a855f7" stopOpacity=".02" />
          </linearGradient>
        </defs>
        <path d="M0 0H1440V900H0Z" fill="#0c0b12" />
        <path d="M0 0L485 215H955L1440 0M0 900L485 650H955L1440 900" stroke="#665274" strokeOpacity=".4" />
        <path d="M485 215H955V650H485Z" fill="url(#hotel-glass)" stroke="#78628e" strokeOpacity=".4" />
        {Array.from({ length: 9 }, (_, i) => (
          <g key={i}>
            <path d={`M${i * 180} 900L720 430`} stroke="#9e79bc" strokeOpacity=".16" />
            <path d={`M${i * 180} 0L720 430`} stroke="#9e79bc" strokeOpacity=".12" />
          </g>
        ))}
        {[100, 235, 365, 1075, 1205, 1340].map((x, i) => (
          <g key={x} className="hotel-column" style={{ animationDelay: `${i * .7}s` }}>
            <path d={`M${x} 0V900H${x + 26}V0Z`} fill="url(#hotel-glass)" stroke="#7a5d8b" strokeOpacity=".25" />
            <path d={`M${x + 26} 0V900`} stroke="url(#hotel-light)" strokeWidth="2" />
          </g>
        ))}
        {[270, 340, 410, 480, 550, 620].map((y) => <path key={y} d={`M485 ${y}H955`} stroke="#b990d9" strokeOpacity=".15" />)}
        {[545, 605, 665, 725, 785, 845, 905].map((x) => <path key={x} d={`M${x} 215V650`} stroke="#b990d9" strokeOpacity=".15" />)}
        <ellipse cx="720" cy="790" rx="305" ry="54" fill="#a855f7" fillOpacity=".06" />
        <ellipse cx="720" cy="790" rx="305" ry="54" stroke="#c084fc" strokeOpacity=".3" />
        <path d="M580 720L720 660L860 720V785L720 835L580 785Z" fill="url(#hotel-glass)" stroke="#a17dbb" strokeOpacity=".45" />
        <path d="M580 720L720 775L860 720M720 775V835" stroke="#d6a9fa" strokeOpacity=".5" />
        <circle className="hotel-signal" cx="720" cy="190" r="7" fill="#d6a9fa" />
        <path d="M720 197V260" stroke="url(#hotel-light)" />
      </svg>
      <div className="hotel-grain" />
    </div>
  )
}
