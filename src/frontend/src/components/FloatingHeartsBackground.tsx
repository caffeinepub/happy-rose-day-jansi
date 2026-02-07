export function FloatingHeartsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating hearts */}
        <g className="animate-float-slow">
          <path
            d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"
            fill="oklch(0.85 0.15 15)"
            opacity="0.15"
            transform="translate(50, 80) scale(1.5)"
            filter="url(#glow)"
          />
        </g>

        <g className="animate-float-medium">
          <path
            d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"
            fill="oklch(0.88 0.12 330)"
            opacity="0.12"
            transform="translate(200, 150) scale(1.2)"
            filter="url(#glow)"
          />
        </g>

        <g className="animate-float-fast">
          <path
            d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"
            fill="oklch(0.90 0.10 300)"
            opacity="0.10"
            transform="translate(400, 250) scale(1)"
            filter="url(#glow)"
          />
        </g>

        <g className="animate-float-slow" style={{ animationDelay: '1s' }}>
          <path
            d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"
            fill="oklch(0.85 0.15 15)"
            opacity="0.13"
            transform="translate(600, 100) scale(1.3)"
            filter="url(#glow)"
          />
        </g>

        <g className="animate-float-medium" style={{ animationDelay: '2s' }}>
          <path
            d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5C2,5.42,4.42,3,7.5,3c1.74,0,3.41,0.81,4.5,2.09C13.09,3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5c0,3.78-3.4,6.86-8.55,11.54L12,21.35z"
            fill="oklch(0.88 0.12 330)"
            opacity="0.11"
            transform="translate(100, 300) scale(0.9)"
            filter="url(#glow)"
          />
        </g>

        {/* Sparkles */}
        <circle cx="150" cy="100" r="2" fill="oklch(0.95 0.05 60)" opacity="0.3" className="animate-sparkle" />
        <circle cx="350" cy="200" r="2" fill="oklch(0.95 0.05 60)" opacity="0.3" className="animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <circle cx="550" cy="150" r="2" fill="oklch(0.95 0.05 60)" opacity="0.3" className="animate-sparkle" style={{ animationDelay: '1s' }} />
        <circle cx="250" cy="350" r="2" fill="oklch(0.95 0.05 60)" opacity="0.3" className="animate-sparkle" style={{ animationDelay: '1.5s' }} />
        <circle cx="450" cy="400" r="2" fill="oklch(0.95 0.05 60)" opacity="0.3" className="animate-sparkle" style={{ animationDelay: '2s' }} />
      </svg>
    </div>
  );
}
