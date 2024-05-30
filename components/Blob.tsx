"use client";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export default function Blob() {
  const animation = keyframes`
  100% {
    transform: translate3d(var(--x2), var(--y2), 0);
    opacity: 1;
  }
  `;

  const Particle = styled.div`
    --angle: (5 * var(--index));
    --radius: 30;
    --x: calc(sin(var(--angle)) * var(--radius) * 1vmin);
    --y: calc(cos(var(--angle)) * var(--radius) * 1vmin);
    --angle2: calc(var(--index) * 1turn / var(--total));
    --x2: calc(sin(var(--angle2)) * var(--radius) * 1vmin);
    --y2: calc(cos(var(--angle2)) * var(--radius) * 1vmin);
    --size: 5;
    --speed: 3s;
    --delay: calc(var(--index) * var(--speed) / var(--total) * 4);
    --hue-angle: 10;
    --hue-range: 60;
    --hue-start: 20;
    animation: ${animation} var(--speed) ease-out infinite alternate
      var(--delay);
    transform: translate3d(var(--x), var(--y), 0);
    opacity: 0;
    border-radius: 50%;
    background: currentColor;
    color: oklch(
      75% 0.3
        calc(
          sin(var(--hue-angle) * var(--index)) * var(--hue-range) +
            var(--hue-start)
        )
    );
    position: absolute;
    width: calc(var(--size) * 0.1vmin);
    height: calc(var(--size) * 0.1vmin);
    contain: strict; /* Does this help or is translate3d already doing it*/
  `;

  return (
    <div className="center" style={{ "--total": 1080 } as React.CSSProperties}>
      <Particle
        className="particle"
        style={{ "--index": 1 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 2 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 3 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 4 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 5 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 6 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 7 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 8 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 9 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 10 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 11 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 12 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 13 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 14 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 15 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 16 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 17 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 18 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 19 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 20 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 21 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 22 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 23 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 24 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 25 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 26 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 27 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 28 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 29 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 30 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 31 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 32 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 33 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 34 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 35 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 36 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 37 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 38 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 39 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 40 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 41 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 42 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 43 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 44 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 45 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 46 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 47 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 48 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 49 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 50 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 51 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 52 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 53 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 54 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 55 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 56 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 57 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 58 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 59 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 60 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 61 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 62 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 63 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 64 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 65 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 66 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 67 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 68 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 69 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 70 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 71 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 72 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 73 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 74 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 75 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 76 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 77 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 78 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 79 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 80 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 81 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 82 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 83 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 84 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 85 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 86 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 87 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 88 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 89 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 90 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 91 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 92 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 93 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 94 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 95 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 96 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 97 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 98 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 99 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 100 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 101 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 102 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 103 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 104 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 105 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 106 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 107 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 108 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 109 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 110 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 111 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 112 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 113 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 114 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 115 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 116 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 117 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 118 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 119 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 120 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 121 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 122 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 123 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 124 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 125 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 126 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 127 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 128 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 129 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 130 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 131 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 132 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 133 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 134 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 135 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 136 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 137 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 138 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 139 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 140 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 141 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 142 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 143 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 144 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 145 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 146 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 147 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 148 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 149 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 150 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 151 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 152 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 153 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 154 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 155 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 156 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 157 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 158 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 159 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 160 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 161 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 162 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 163 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 164 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 165 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 166 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 167 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 168 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 169 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 170 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 171 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 172 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 173 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 174 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 175 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 176 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 177 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 178 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 179 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 180 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 181 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 182 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 183 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 184 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 185 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 186 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 187 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 188 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 189 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 190 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 191 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 192 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 193 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 194 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 195 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 196 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 197 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 198 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 199 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 200 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 201 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 202 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 203 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 204 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 205 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 206 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 207 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 208 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 209 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 210 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 211 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 212 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 213 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 214 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 215 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 216 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 217 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 218 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 219 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 220 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 221 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 222 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 223 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 224 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 225 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 226 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 227 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 228 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 229 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 230 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 231 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 232 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 233 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 234 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 235 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 236 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 237 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 238 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 239 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 240 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 241 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 242 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 243 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 244 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 245 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 246 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 247 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 248 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 249 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 250 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 251 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 252 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 253 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 254 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 255 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 256 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 257 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 258 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 259 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 260 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 261 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 262 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 263 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 264 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 265 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 266 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 267 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 268 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 269 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 270 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 271 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 272 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 273 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 274 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 275 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 276 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 277 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 278 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 279 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 280 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 281 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 282 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 283 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 284 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 285 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 286 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 287 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 288 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 289 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 290 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 291 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 292 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 293 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 294 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 295 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 296 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 297 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 298 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 299 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 300 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 301 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 302 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 303 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 304 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 305 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 306 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 307 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 308 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 309 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 310 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 311 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 312 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 313 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 314 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 315 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 316 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 317 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 318 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 319 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 320 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 321 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 322 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 323 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 324 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 325 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 326 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 327 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 328 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 329 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 330 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 331 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 332 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 333 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 334 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 335 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 336 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 337 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 338 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 339 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 340 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 341 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 342 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 343 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 344 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 345 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 346 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 347 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 348 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 349 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 350 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 351 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 352 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 353 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 354 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 355 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 356 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 357 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 358 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 359 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 360 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 361 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 362 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 363 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 364 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 365 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 366 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 367 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 368 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 369 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 370 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 371 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 372 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 373 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 374 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 375 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 376 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 377 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 378 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 379 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 380 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 381 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 382 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 383 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 384 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 385 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 386 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 387 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 388 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 389 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 390 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 391 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 392 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 393 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 394 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 395 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 396 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 397 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 398 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 399 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 400 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 401 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 402 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 403 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 404 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 405 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 406 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 407 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 408 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 409 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 410 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 411 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 412 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 413 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 414 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 415 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 416 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 417 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 418 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 419 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 420 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 421 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 422 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 423 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 424 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 425 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 426 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 427 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 428 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 429 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 430 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 431 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 432 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 433 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 434 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 435 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 436 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 437 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 438 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 439 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 440 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 441 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 442 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 443 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 444 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 445 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 446 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 447 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 448 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 449 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 450 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 451 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 452 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 453 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 454 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 455 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 456 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 457 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 458 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 459 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 460 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 461 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 462 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 463 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 464 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 465 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 466 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 467 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 468 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 469 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 470 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 471 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 472 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 473 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 474 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 475 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 476 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 477 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 478 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 479 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 480 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 481 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 482 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 483 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 484 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 485 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 486 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 487 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 488 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 489 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 490 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 491 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 492 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 493 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 494 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 495 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 496 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 497 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 498 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 499 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 500 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 501 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 502 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 503 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 504 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 505 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 506 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 507 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 508 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 509 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 510 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 511 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 512 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 513 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 514 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 515 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 516 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 517 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 518 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 519 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 520 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 521 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 522 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 523 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 524 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 525 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 526 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 527 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 528 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 529 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 530 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 531 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 532 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 533 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 534 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 535 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 536 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 537 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 538 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 539 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 540 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 541 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 542 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 543 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 544 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 545 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 546 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 547 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 548 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 549 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 550 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 551 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 552 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 553 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 554 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 555 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 556 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 557 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 558 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 559 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 560 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 561 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 562 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 563 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 564 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 565 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 566 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 567 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 568 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 569 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 570 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 571 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 572 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 573 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 574 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 575 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 576 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 577 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 578 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 579 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 580 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 581 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 582 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 583 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 584 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 585 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 586 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 587 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 588 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 589 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 590 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 591 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 592 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 593 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 594 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 595 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 596 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 597 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 598 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 599 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 600 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 601 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 602 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 603 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 604 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 605 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 606 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 607 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 608 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 609 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 610 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 611 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 612 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 613 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 614 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 615 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 616 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 617 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 618 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 619 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 620 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 621 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 622 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 623 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 624 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 625 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 626 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 627 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 628 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 629 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 630 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 631 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 632 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 633 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 634 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 635 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 636 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 637 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 638 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 639 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 640 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 641 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 642 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 643 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 644 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 645 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 646 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 647 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 648 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 649 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 650 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 651 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 652 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 653 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 654 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 655 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 656 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 657 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 658 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 659 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 660 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 661 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 662 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 663 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 664 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 665 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 666 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 667 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 668 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 669 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 670 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 671 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 672 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 673 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 674 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 675 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 676 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 677 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 678 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 679 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 680 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 681 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 682 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 683 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 684 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 685 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 686 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 687 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 688 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 689 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 690 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 691 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 692 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 693 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 694 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 695 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 696 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 697 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 698 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 699 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 700 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 701 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 702 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 703 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 704 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 705 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 706 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 707 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 708 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 709 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 710 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 711 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 712 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 713 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 714 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 715 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 716 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 717 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 718 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 719 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 720 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 721 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 722 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 723 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 724 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 725 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 726 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 727 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 728 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 729 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 730 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 731 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 732 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 733 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 734 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 735 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 736 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 737 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 738 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 739 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 740 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 741 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 742 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 743 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 744 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 745 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 746 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 747 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 748 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 749 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 750 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 751 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 752 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 753 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 754 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 755 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 756 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 757 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 758 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 759 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 760 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 761 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 762 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 763 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 764 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 765 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 766 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 767 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 768 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 769 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 770 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 771 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 772 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 773 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 774 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 775 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 776 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 777 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 778 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 779 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 780 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 781 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 782 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 783 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 784 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 785 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 786 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 787 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 788 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 789 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 790 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 791 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 792 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 793 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 794 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 795 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 796 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 797 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 798 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 799 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 800 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 801 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 802 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 803 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 804 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 805 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 806 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 807 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 808 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 809 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 810 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 811 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 812 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 813 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 814 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 815 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 816 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 817 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 818 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 819 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 820 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 821 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 822 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 823 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 824 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 825 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 826 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 827 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 828 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 829 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 830 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 831 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 832 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 833 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 834 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 835 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 836 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 837 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 838 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 839 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 840 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 841 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 842 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 843 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 844 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 845 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 846 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 847 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 848 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 849 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 850 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 851 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 852 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 853 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 854 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 855 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 856 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 857 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 858 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 859 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 860 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 861 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 862 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 863 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 864 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 865 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 866 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 867 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 868 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 869 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 870 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 871 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 872 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 873 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 874 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 875 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 876 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 877 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 878 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 879 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 880 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 881 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 882 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 883 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 884 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 885 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 886 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 887 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 888 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 889 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 890 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 891 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 892 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 893 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 894 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 895 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 896 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 897 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 898 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 899 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 900 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 901 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 902 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 903 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 904 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 905 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 906 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 907 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 908 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 909 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 910 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 911 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 912 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 913 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 914 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 915 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 916 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 917 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 918 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 919 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 920 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 921 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 922 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 923 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 924 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 925 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 926 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 927 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 928 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 929 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 930 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 931 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 932 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 933 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 934 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 935 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 936 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 937 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 938 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 939 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 940 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 941 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 942 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 943 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 944 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 945 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 946 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 947 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 948 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 949 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 950 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 951 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 952 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 953 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 954 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 955 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 956 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 957 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 958 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 959 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 960 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 961 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 962 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 963 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 964 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 965 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 966 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 967 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 968 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 969 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 970 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 971 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 972 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 973 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 974 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 975 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 976 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 977 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 978 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 979 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 980 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 981 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 982 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 983 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 984 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 985 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 986 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 987 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 988 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 989 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 990 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 991 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 992 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 993 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 994 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 995 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 996 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 997 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 998 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 999 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1000 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1001 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1002 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1003 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1004 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1005 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1006 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1007 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1008 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1009 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1010 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1011 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1012 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1013 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1014 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1015 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1016 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1017 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1018 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1019 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1020 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1021 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1022 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1023 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1024 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1025 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1026 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1027 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1028 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1029 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1030 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1031 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1032 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1033 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1034 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1035 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1036 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1037 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1038 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1039 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1040 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1041 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1042 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1043 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1044 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1045 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1046 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1047 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1048 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1049 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1050 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1051 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1052 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1053 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1054 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1055 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1056 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1057 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1058 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1059 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1060 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1061 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1062 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1063 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1064 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1065 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1066 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1067 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1068 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1069 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1070 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1071 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1072 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1073 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1074 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1075 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1076 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1077 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1078 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1079 } as React.CSSProperties}
      />
      <Particle
        className="particle"
        style={{ "--index": 1080 } as React.CSSProperties}
      />
    </div>
  );
}
