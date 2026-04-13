import one480Avif from "../assets/landing-page/1-480.avif"
import one800Avif from "../assets/landing-page/1-800.avif"
import one1200Avif from "../assets/landing-page/1-1200.avif"
import one480Webp from "../assets/landing-page/1-480.webp"
import one800Webp from "../assets/landing-page/1-800.webp"
import one1200Webp from "../assets/landing-page/1-1200.webp"
import two480Avif from "../assets/landing-page/2-480.avif"
import two800Avif from "../assets/landing-page/2-800.avif"
import two1200Avif from "../assets/landing-page/2-1200.avif"
import two480Webp from "../assets/landing-page/2-480.webp"
import two800Webp from "../assets/landing-page/2-800.webp"
import two1200Webp from "../assets/landing-page/2-1200.webp"
import three480Avif from "../assets/landing-page/3-480.avif"
import three800Avif from "../assets/landing-page/3-800.avif"
import three1200Avif from "../assets/landing-page/3-1200.avif"
import three480Webp from "../assets/landing-page/3-480.webp"
import three800Webp from "../assets/landing-page/3-800.webp"
import three1200Webp from "../assets/landing-page/3-1200.webp"
import four480Avif from "../assets/landing-page/4-480.avif"
import four800Avif from "../assets/landing-page/4-800.avif"
import four1200Avif from "../assets/landing-page/4-1200.avif"
import four480Webp from "../assets/landing-page/4-480.webp"
import four800Webp from "../assets/landing-page/4-800.webp"
import four1200Webp from "../assets/landing-page/4-1200.webp"
import five480Avif from "../assets/landing-page/5-480.avif"
import five800Avif from "../assets/landing-page/5-800.avif"
import five1200Avif from "../assets/landing-page/5-1200.avif"
import five480Webp from "../assets/landing-page/5-480.webp"
import five800Webp from "../assets/landing-page/5-800.webp"
import five1200Webp from "../assets/landing-page/5-1200.webp"
import background430Avif from "../assets/landing-page/background-430.avif"
import background860Avif from "../assets/landing-page/background-860.avif"
import background1024Avif from "../assets/landing-page/background-1024.avif"
import background430Webp from "../assets/landing-page/background-430.webp"
import background860Webp from "../assets/landing-page/background-860.webp"
import background1024Webp from "../assets/landing-page/background-1024.webp"
import planOne320Avif from "../assets/landing-page/p1-320.avif"
import planOne640Avif from "../assets/landing-page/p1-640.avif"
import planOne960Avif from "../assets/landing-page/p1-960.avif"
import planOne320Webp from "../assets/landing-page/p1-320.webp"
import planOne640Webp from "../assets/landing-page/p1-640.webp"
import planOne960Webp from "../assets/landing-page/p1-960.webp"
import planTwo320Avif from "../assets/landing-page/p2-320.avif"
import planTwo640Avif from "../assets/landing-page/p2-640.avif"
import planTwo960Avif from "../assets/landing-page/p2-960.avif"
import planTwo320Webp from "../assets/landing-page/p2-320.webp"
import planTwo640Webp from "../assets/landing-page/p2-640.webp"
import planTwo960Webp from "../assets/landing-page/p2-960.webp"

type Variant = {
  src: string
  width: number
}

export type ResponsiveImageAsset = {
  width: number
  height: number
  sizes: string
  avif: {
    type: "image/avif"
    src: string
    srcSet: string
  }
  fallback: {
    type: "image/webp"
    src: string
    srcSet: string
  }
}

function createSrcSet(variants: Variant[]) {
  return variants
    .map((variant) => `${variant.src} ${variant.width}w`)
    .join(", ")
}

function createResponsiveImageAsset(input: {
  width: number
  height: number
  sizes: string
  avifVariants: Variant[]
  webpVariants: Variant[]
}): ResponsiveImageAsset {
  const avifLead = input.avifVariants[0]
  const webpLead = input.webpVariants[0]

  if (!avifLead || !webpLead) {
    throw new Error("Responsive image asset variants are required")
  }

  return {
    width: input.width,
    height: input.height,
    sizes: input.sizes,
    avif: {
      type: "image/avif",
      src: avifLead.src,
      srcSet: createSrcSet(input.avifVariants),
    },
    fallback: {
      type: "image/webp",
      src: webpLead.src,
      srcSet: createSrcSet(input.webpVariants),
    },
  }
}

const shellImageSizes = "(max-width: 430px) calc(100vw - 2rem), 398px"

export const landingHeroImage = createResponsiveImageAsset({
  width: 1024,
  height: 1536,
  sizes: "(max-width: 430px) 100vw, 430px",
  avifVariants: [
    { src: background430Avif, width: 430 },
    { src: background860Avif, width: 860 },
    { src: background1024Avif, width: 1024 },
  ],
  webpVariants: [
    { src: background430Webp, width: 430 },
    { src: background860Webp, width: 860 },
    { src: background1024Webp, width: 1024 },
  ],
})

export const sellingPointImages = {
  one: createResponsiveImageAsset({
    width: 1536,
    height: 1024,
    sizes: shellImageSizes,
    avifVariants: [
      { src: one480Avif, width: 480 },
      { src: one800Avif, width: 800 },
      { src: one1200Avif, width: 1200 },
    ],
    webpVariants: [
      { src: one480Webp, width: 480 },
      { src: one800Webp, width: 800 },
      { src: one1200Webp, width: 1200 },
    ],
  }),
  two: createResponsiveImageAsset({
    width: 1536,
    height: 1024,
    sizes: shellImageSizes,
    avifVariants: [
      { src: two480Avif, width: 480 },
      { src: two800Avif, width: 800 },
      { src: two1200Avif, width: 1200 },
    ],
    webpVariants: [
      { src: two480Webp, width: 480 },
      { src: two800Webp, width: 800 },
      { src: two1200Webp, width: 1200 },
    ],
  }),
  three: createResponsiveImageAsset({
    width: 1536,
    height: 1024,
    sizes: shellImageSizes,
    avifVariants: [
      { src: three480Avif, width: 480 },
      { src: three800Avif, width: 800 },
      { src: three1200Avif, width: 1200 },
    ],
    webpVariants: [
      { src: three480Webp, width: 480 },
      { src: three800Webp, width: 800 },
      { src: three1200Webp, width: 1200 },
    ],
  }),
  four: createResponsiveImageAsset({
    width: 1536,
    height: 1024,
    sizes: shellImageSizes,
    avifVariants: [
      { src: four480Avif, width: 480 },
      { src: four800Avif, width: 800 },
      { src: four1200Avif, width: 1200 },
    ],
    webpVariants: [
      { src: four480Webp, width: 480 },
      { src: four800Webp, width: 800 },
      { src: four1200Webp, width: 1200 },
    ],
  }),
  five: createResponsiveImageAsset({
    width: 1536,
    height: 1024,
    sizes: shellImageSizes,
    avifVariants: [
      { src: five480Avif, width: 480 },
      { src: five800Avif, width: 800 },
      { src: five1200Avif, width: 1200 },
    ],
    webpVariants: [
      { src: five480Webp, width: 480 },
      { src: five800Webp, width: 800 },
      { src: five1200Webp, width: 1200 },
    ],
  }),
} as const

export const planImages = {
  weekday: createResponsiveImageAsset({
    width: 1024,
    height: 1024,
    sizes: shellImageSizes,
    avifVariants: [
      { src: planOne320Avif, width: 320 },
      { src: planOne640Avif, width: 640 },
      { src: planOne960Avif, width: 960 },
    ],
    webpVariants: [
      { src: planOne320Webp, width: 320 },
      { src: planOne640Webp, width: 640 },
      { src: planOne960Webp, width: 960 },
    ],
  }),
  weekend: createResponsiveImageAsset({
    width: 1024,
    height: 1024,
    sizes: shellImageSizes,
    avifVariants: [
      { src: planTwo320Avif, width: 320 },
      { src: planTwo640Avif, width: 640 },
      { src: planTwo960Avif, width: 960 },
    ],
    webpVariants: [
      { src: planTwo320Webp, width: 320 },
      { src: planTwo640Webp, width: 640 },
      { src: planTwo960Webp, width: 960 },
    ],
  }),
} as const
