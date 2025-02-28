/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-26 19:42:35
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-27 00:16:22
 * @FilePath: /terry-studio/tailwind.config.js
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 15s linear infinite",
        shine: "shine 5s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "-350% 50%, -350% 50%",
          },
        },
        shine: {
          "0%": { backgroundPosition: "100%" },
          "100%": { backgroundPosition: "-100%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors(config) {
  const addBase = config.addBase;
  const theme = config.theme;
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
