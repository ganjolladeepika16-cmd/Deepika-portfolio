const SharinganIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer ring */}
    <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(0,72%,42%)" strokeWidth="3" />
    {/* Inner circle */}
    <circle cx="50" cy="50" r="12" fill="hsl(0,72%,42%)" />
    {/* Pupil */}
    <circle cx="50" cy="50" r="5" fill="hsl(0,0%,4%)" />
    {/* Three tomoe */}
    {[0, 120, 240].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 50 50)`}>
        <circle cx="50" cy="20" r="6" fill="hsl(0,0%,4%)" />
        <path
          d="M 50 20 Q 60 30 50 35"
          fill="none"
          stroke="hsl(0,0%,4%)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    ))}
    {/* Glow */}
    <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(0,100%,50%)" strokeWidth="1" opacity="0.3" />
  </svg>
);

export default SharinganIcon;
