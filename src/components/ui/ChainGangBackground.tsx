'use client';

import { motion } from 'framer-motion';

const ChainGangBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        {/* Subtle leather texture pattern */}
        <defs>
          {/* Gradient for bottom fade */}
          <linearGradient id="fadeToWhite" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="60%" stopColor="white" stopOpacity="0" />
            <stop offset="85%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0.8" />
          </linearGradient>

          <pattern
            id="leatherTexture"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="40" fill="none" />
            <path
              d="M5 5 L35 5 M5 15 L35 15 M5 25 L35 25 M5 35 L35 35"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M10 0 L10 40 M20 0 L20 40 M30 0 L30 40"
              stroke="currentColor"
              strokeWidth="0.3"
              opacity="0.2"
            />
          </pattern>
          
          {/* Chain link pattern */}
          <pattern
            id="chainPattern"
            x="0"
            y="0"
            width="60"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <ellipse
              cx="15"
              cy="15"
              rx="12"
              ry="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.15"
            />
            <ellipse
              cx="45"
              cy="15"
              rx="12"
              ry="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.15"
            />
          </pattern>

          {/* Carving tool marks pattern */}
          <pattern
            id="carvingMarks"
            x="0"
            y="0"
            width="80"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 10 Q20 15 30 10 T50 10"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="none"
              opacity="0.1"
            />
            <path
              d="M15 25 Q25 30 35 25 T55 25"
              stroke="currentColor"
              strokeWidth="0.6"
              fill="none"
              opacity="0.08"
            />
            <path
              d="M5 40 Q15 45 25 40 T45 40"
              stroke="currentColor"
              strokeWidth="0.7"
              fill="none"
              opacity="0.09"
            />
          </pattern>
        </defs>

        {/* Background leather texture */}
        <rect
          width="100%"
          height="100%"
          fill="url(#leatherTexture)"
          className="text-amber-900"
        />

        {/* Test element to ensure visibility */}
        <circle
          cx="100"
          cy="100"
          r="20"
          fill="#d97706"
          opacity="0.3"
        />

        {/* Subtle chain elements - positioned to not interfere with text */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          {/* Top left chain segment */}
          <g transform="translate(50, 50)">
            <path
              d="M0 20 Q20 0 40 20 Q60 40 80 20 Q100 0 120 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-amber-800"
              opacity="0.08"
            />
          </g>

          {/* Bottom right chain segment */}
          <g transform="translate(900, 600)">
            <path
              d="M0 20 Q20 0 40 20 Q60 40 80 20 Q100 0 120 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-amber-800"
              opacity="0.06"
            />
          </g>
        </motion.g>

        {/* Carving tool marks - very subtle */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
        >
          <rect
            x="200"
            y="100"
            width="800"
            height="600"
            fill="url(#carvingMarks)"
            className="text-amber-700"
            opacity="0.03"
          />
        </motion.g>

        {/* Geometric elements inspired by leather work */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          {/* Corner decorative elements */}
          <g transform="translate(100, 100)">
            <circle
              cx="0"
              cy="0"
              r="3"
              fill="currentColor"
              className="text-amber-800"
              opacity="0.1"
            />
            <circle
              cx="20"
              cy="0"
              r="2"
              fill="currentColor"
              className="text-amber-800"
              opacity="0.08"
            />
            <circle
              cx="40"
              cy="0"
              r="2.5"
              fill="currentColor"
              className="text-amber-800"
              opacity="0.09"
            />
          </g>

          <g transform="translate(1000, 650)">
            <circle
              cx="0"
              cy="0"
              r="3"
              fill="currentColor"
              className="text-amber-800"
              opacity="0.1"
            />
            <circle
              cx="-20"
              cy="0"
              r="2"
              fill="currentColor"
              className="text-amber-800"
              opacity="0.08"
            />
            <circle
              cx="-40"
              cy="0"
              r="2.5"
              fill="currentColor"
              className="text-amber-800"
              opacity="0.09"
            />
          </g>
        </motion.g>

        {/* Subtle border elements */}
        <motion.g
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 0.5 }}
        >
          <path
            d="M50 50 L1150 50"
            stroke="currentColor"
            strokeWidth="1"
            className="text-amber-800"
            opacity="0.05"
          />
          <path
            d="M50 750 L1150 750"
            stroke="currentColor"
            strokeWidth="1"
            className="text-amber-800"
            opacity="0.05"
          />
        </motion.g>

        {/* Bottom fade to white */}
        <rect
          width="100%"
          height="100%"
          fill="url(#fadeToWhite)"
        />
      </svg>
    </div>
  );
};

export default ChainGangBackground;
