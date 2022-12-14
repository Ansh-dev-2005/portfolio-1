import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/name-a.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M1433 2183 l-121 -4 -17 -47 c-9 -26 -36 -103 -60 -172 -24 -69 -74 -210 -110 -315 -37 -104 -89 -253 -115 -330 -62 -179 -216 -615 -225 -637 -6 -16 1 -18 83 -18 60 0 92 4 98 13 5 6 38 101 74 209 l65 198 329 -3 329 -2 70 -207 69 -208 94 0 c70 0 94 3 94 13 0 7 -4 17 -9 22 -5 6 -38 96 -74 200 -36 105 -143 411 -237 680 -94 270 -180 518 -191 553 -11 34 -21 61 -22 60 -1 -1 -57 -4 -124 -5z m121 -58 c8 -11 18 -36 21 -55 4 -19 15 -53 25 -75 25 -55 81 -214 87 -248 3 -15 9 -30 14 -33 5 -3 9 -14 9 -25 0 -10 4 -27 9 -37 5 -9 15 -37 22 -62 7 -25 16 -47 19 -50 7 -7 119 -334 131 -384 6 -22 16 -51 24 -65 8 -14 28 -69 45 -121 17 -52 35 -104 40 -115 20 -50 31 -83 33 -103 1 -12 5 -22 9 -22 4 0 8 -4 8 -9 0 -14 -57 -24 -94 -17 -33 6 -33 7 -96 192 -48 139 -70 190 -88 205 -23 17 -42 19 -242 19 -258 0 -419 -13 -437 -37 -6 -8 -21 -43 -32 -77 -53 -164 -94 -272 -108 -288 -17 -19 -97 -26 -107 -10 -7 12 23 105 229 687 31 88 82 237 115 330 119 346 145 414 160 419 8 3 54 4 102 3 74 -2 89 -5 102 -22z"/>
<path d="M1412 2011 c-8 -4 -36 -75 -64 -157 -27 -82 -53 -153 -58 -158 -5 -5 -6 -15 -3 -22 3 -8 1 -14 -5 -14 -5 0 -15 -21 -22 -47 -7 -27 -35 -114 -61 -195 -57 -172 -60 -195 -23 -204 15 -4 141 -7 281 -8 271 -1 272 -1 273 49 0 18 -99 332 -120 380 -5 11 -16 43 -25 70 -9 28 -21 58 -26 67 -5 10 -9 23 -9 29 0 6 -7 17 -15 25 -8 8 -22 40 -32 72 -31 103 -57 135 -91 113z m76 -128 c23 -65 79 -230 125 -368 47 -137 88 -258 92 -267 7 -17 -10 -18 -270 -18 -217 0 -276 3 -273 13 154 471 255 756 269 757 12 0 27 -32 57 -117z"/>
<path d="M1470 1780 c-24 -44 -170 -482 -170 -508 0 -16 4 -22 9 -16 9 9 93 248 152 432 30 93 35 140 9 92z"/>
<path d="M1592 2181 c-18 -11 7 -21 51 -21 41 0 50 -8 64 -50 6 -19 39 -114 73 -210 34 -96 81 -231 105 -300 24 -69 71 -204 105 -300 34 -96 68 -195 76 -220 8 -25 18 -52 21 -60 3 -8 7 -19 9 -25 1 -5 23 -70 48 -144 26 -74 44 -136 42 -139 -3 -2 -19 -6 -36 -8 -61 -7 -54 -19 15 -25 39 -3 71 -4 73 -4 1 1 -5 19 -14 41 -16 38 -107 297 -204 579 -27 77 -66 192 -88 255 -56 158 -180 512 -204 583 l-20 57 -51 0 c-29 0 -58 -4 -65 -9z"/>
<path d="M1222 1048 c-5 -7 -28 -68 -51 -135 -68 -204 -66 -200 -114 -207 -74 -11 -75 -24 -4 -28 l67 -3 57 170 c32 94 61 180 65 193 7 24 -4 29 -20 10z"/>
</g>
</svg>
    </div>
  )
}

export default Logo
