import React from "react";

export const HeroSculpture: React.FC = () => {
  return (
    <div className="relative w-full max-w-[420px] lg:max-w-[480px] aspect-square mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background radial reflections matching reference */}
      <div className="absolute inset-0 bg-radial-gradient from-[#E94F9B]/20 via-[#FF706C]/10 to-transparent blur-3xl rounded-full transform scale-90 -z-10 animate-pulse-slow" />
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F6A23B]/15 blur-2xl rounded-full -z-10" />

      {/* Main Vector Sculptural Composition */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_20px_50px_rgba(233,79,155,0.25)] animate-float"
      >
        <defs>
          {/* Gradients for faceted planes */}
          <linearGradient id="facetPink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E94F9B" />
            <stop offset="100%" stopColor="#8E1C65" />
          </linearGradient>

          <linearGradient id="facetMagenta" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C747A8" />
            <stop offset="100%" stopColor="#4A154B" />
          </linearGradient>

          <linearGradient id="facetCoral" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF706C" />
            <stop offset="100%" stopColor="#D93834" />
          </linearGradient>

          <linearGradient id="facetOrange" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F6A23B" />
            <stop offset="100%" stopColor="#BA6608" />
          </linearGradient>

          <linearGradient id="facetGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBD38D" />
            <stop offset="100%" stopColor="#ED8936" />
          </linearGradient>

          <linearGradient id="facetEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38B2AC" />
            <stop offset="100%" stopColor="#1D4044" />
          </linearGradient>

          <linearGradient id="facetViolet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9F7AEA" />
            <stop offset="100%" stopColor="#553C9A" />
          </linearGradient>

          <linearGradient id="facetObsidian" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A2A2A" />
            <stop offset="100%" stopColor="#141414" />
          </linearGradient>

          <linearGradient id="ringGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E94F9B" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FF706C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F6A23B" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="spiralGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F6A23B" />
            <stop offset="50%" stopColor="#E94F9B" />
            <stop offset="100%" stopColor="#C747A8" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Back Ambient Geometry: Orbital Rings */}
        <ellipse
          cx="250"
          cy="260"
          rx="190"
          ry="75"
          stroke="url(#ringGlow)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.4"
          transform="rotate(-15 250 260)"
        />
        <ellipse
          cx="250"
          cy="240"
          rx="170"
          ry="60"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
          transform="rotate(25 250 240)"
        />

        {/* Bottom Orbital Spiral Ribbon (referencing the spiral pedestal in the reference) */}
        <path
          d="M 250 370 C 230 380, 210 395, 230 410 C 255 425, 280 415, 270 395 C 260 375, 240 430, 250 445 C 255 455, 245 465, 235 460"
          stroke="url(#spiralGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />

        {/* Core Sculptural Head / Polyhedral Form */}
        <g id="faceted-polyhedron" transform="translate(0, -10)">
          {/* Backside Shadow Facets */}
          <polygon points="250,70 170,120 190,180" fill="url(#facetObsidian)" opacity="0.9" />
          <polygon points="250,70 330,120 310,180" fill="url(#facetObsidian)" opacity="0.9" />

          {/* Crown & Forehead Facets */}
          <polygon points="250,70 190,110 250,130" fill="url(#facetPink)" />
          <polygon points="250,70 250,130 310,110" fill="url(#facetCoral)" />
          <polygon points="190,110 145,160 215,170" fill="url(#facetEmerald)" />
          <polygon points="310,110 285,170 355,160" fill="url(#facetViolet)" />
          <polygon points="250,130 215,170 285,170" fill="url(#facetOrange)" />

          {/* Temples & Upper Cheeks */}
          <polygon points="145,160 130,225 185,215" fill="url(#facetMagenta)" />
          <polygon points="355,160 315,215 370,225" fill="url(#facetPink)" />
          <polygon points="215,170 185,215 250,210" fill="url(#facetGold)" />
          <polygon points="285,170 250,210 315,215" fill="url(#facetCoral)" />

          {/* Mid Face & Nose Ridge */}
          <polygon points="185,215 160,280 220,265" fill="url(#facetOrange)" />
          <polygon points="315,215 280,265 340,280" fill="url(#facetEmerald)" />
          <polygon points="250,210 220,265 250,295" fill="url(#facetPink)" />
          <polygon points="250,210 250,295 280,265" fill="url(#facetCoral)" />

          {/* Lower Cheeks, Jaw & Chin */}
          <polygon points="160,280 200,340 235,315" fill="url(#facetViolet)" />
          <polygon points="340,280 265,315 300,340" fill="url(#facetMagenta)" />
          <polygon points="220,265 235,315 250,295" fill="url(#facetGold)" />
          <polygon points="280,265 250,295 265,315" fill="url(#facetOrange)" />
          <polygon points="235,315 250,360 265,315" fill="url(#facetCoral)" />
          <polygon points="200,340 250,360 235,315" fill="url(#facetPink)" />
          <polygon points="300,340 265,315 250,360" fill="url(#facetMagenta)" />

          {/* Wireframe Spectacles / Tech HUD Overlay (referencing glasses in the reference image) */}
          <g id="tech-glasses" stroke="#F5F3F2" strokeWidth="2.5" fill="none" opacity="0.95" filter="url(#glowFilter)">
            {/* Left Eye Rim */}
            <circle cx="205" cy="225" r="32" stroke="url(#ringGlow)" strokeWidth="3" />
            <circle cx="205" cy="225" r="28" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="205" cy="225" r="6" fill="#F6A23B" />

            {/* Bridge */}
            <path d="M 237 225 Q 250 215 263 225" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

            {/* Right Eye Rim */}
            <circle cx="295" cy="225" r="32" stroke="url(#ringGlow)" strokeWidth="3" />
            <circle cx="295" cy="225" r="28" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="295" cy="225" r="6" fill="#E94F9B" />

            {/* Temple stems */}
            <line x1="173" y1="225" x2="135" y2="210" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
            <line x1="327" y1="225" x2="365" y2="210" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
          </g>

          {/* Micro Geometric Accents & Glowing Nodes */}
          <circle cx="310" cy="140" r="7" fill="#FF706C" />
          <circle cx="330" cy="165" r="5" fill="#F6A23B" />
          <circle cx="180" cy="145" r="6" fill="#38B2AC" />
          <circle cx="150" cy="205" r="4" fill="#E94F9B" />
          <circle cx="250" cy="85" r="4" fill="#FFFFFF" />

          {/* Crisp Specular Edge Highlight Lines */}
          <line x1="250" y1="70" x2="250" y2="130" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
          <line x1="215" y1="170" x2="285" y2="170" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
          <line x1="250" y1="210" x2="250" y2="295" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
        </g>

        {/* Orbiting Tech Particles & Flares */}
        <g id="particles">
          <circle cx="120" cy="130" r="2" fill="#E94F9B" opacity="0.8" />
          <circle cx="380" cy="110" r="3" fill="#F6A23B" opacity="0.9" />
          <circle cx="410" cy="280" r="2.5" fill="#FF706C" opacity="0.7" />
          <circle cx="90" cy="310" r="2" fill="#38B2AC" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
};

export default HeroSculpture;
