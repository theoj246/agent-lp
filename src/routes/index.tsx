import type { ComponentPropsWithoutRef, CSSProperties } from "react"
import { useEffect } from "react"
import { createFileRoute } from "@tanstack/react-router"
import {
  landingHeroImage,
  planImages,
  sellingPointImages,
  type ResponsiveImageAsset,
} from "@/lib/landing-images"

const sectionLayouts = {
  shell: {
    "--lp-shell-width": "430px",
  } as CSSProperties,
  hero: {
    "--section-pad-top": "0rem",
    "--section-pad-bottom": "5rem",
  } as CSSProperties,
} as const

const heroLayout = {
  stage: {
    "--hero-stage-min-height": "128cqw",
  } as CSSProperties,
  copy: {
    "--hero-copy-width": "100%",
    "--hero-copy-max-width": "100%",
    "--hero-copy-shift-x": "0%",
    "--hero-copy-shift-y": "11%",
  } as CSSProperties,
  detail: {
    "--hero-detail-gap": "1.35rem",
    "--hero-detail-shift-y": "4.75rem",
  } as CSSProperties,
} as const

const sellingPoints = [
  {
    image: sellingPointImages.one,
    side: "left",
    alt: "悩みを抱えた女性のイメージ",
    copy: "「なんか最近、毎日が同じことの繰り返しな気がして」",
  },
  {
    image: sellingPointImages.two,
    side: "right",
    alt: "人間関係に悩む女性のイメージ",
    copy: "「グループの中でちょっと浮いてる気がしてきた」",
  },
  {
    image: sellingPointImages.three,
    side: "left",
    alt: "恋愛の進め方に迷う女性のイメージ",
    copy: "「好きな人がいるんだけど、どう進めたらいいかわからない」",
  },
  {
    image: sellingPointImages.four,
    side: "right",
    alt: "将来への不安を抱える女性のイメージ",
    copy: "「このままでいいのかな、って最近ぼんやり考えてる」",
  },
  {
    image: sellingPointImages.five,
    side: "left",
    alt: "パートナーとのすれ違いに悩む女性のイメージ",
    copy: "「最近、パートナーと話が噛み合わない気がしてて」",
  },
] as const

const plans = [
  {
    image: planImages.weekday,
    title: "レイさんの平日",
    price: "980",
    features: ["より多く話せる"],
  },
  {
    image: planImages.weekend,
    title: "レイさんの週末",
    price: "1,980",
    features: [
      "よりしっかり考え、深く会話できる",
      "毎週、週末の様子を、写真付きで届けてくれる（5月から予定）",
    ],
  },
] as const

const lineUrl = import.meta.env.VITE_LINE_URL || "https://line.me/"

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: landingHeroImage.avif.src,
        type: landingHeroImage.avif.type,
        imageSrcSet: landingHeroImage.avif.srcSet,
        imageSizes: landingHeroImage.sizes,
        fetchPriority: "high",
      },
    ],
  }),
})

function ResponsivePicture({
  image,
  ...imgProps
}: { image: ResponsiveImageAsset } & Omit<
  ComponentPropsWithoutRef<"img">,
  "src" | "srcSet" | "sizes" | "width" | "height"
>) {
  return (
    <picture>
      <source
        type={image.avif.type}
        srcSet={image.avif.srcSet}
        sizes={image.sizes}
      />
      <img
        {...imgProps}
        src={image.fallback.src}
        srcSet={image.fallback.srcSet}
        sizes={image.sizes}
        width={image.width}
        height={image.height}
      />
    </picture>
  )
}

function LandingVitalsReporter() {
  useEffect(() => {
    if (!import.meta.env.DEV && !window.location.search.includes("perf=1")) {
      return
    }

    let cancelled = false

    void import("web-vitals").then(({ onLCP }) => {
      if (cancelled) {
        return
      }

      onLCP((metric) => {
        console.info("[agent-lp] LCP", {
          value: Math.round(metric.value),
          rating: metric.rating,
        })
      })
    })

    return () => {
      cancelled = true
    }
  }, [])

  return null
}

function LandingPage() {
  return (
    <main className="lp-shell" style={sectionLayouts.shell}>
      <LandingVitalsReporter />
      <div className="lp-background-media" aria-hidden="true">
        <ResponsivePicture
          className="lp-background-image"
          image={landingHeroImage}
          alt=""
          aria-hidden="true"
          decoding="async"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      <section className="hero-panel" style={sectionLayouts.hero}>
        <div className="hero-grid">
          <div className="hero-stage" id="characters" style={heroLayout.stage}>
            <div className="hero-copy" style={heroLayout.copy}>
              <div
                className="hero-vertical-title"
                role="heading"
                aria-level={1}
              >
                <div className="hero-vertical-line hero-vertical-line-right">
                  今日のこと
                </div>
                <div className="hero-vertical-line hero-vertical-line-middle">
                  なんかうまくいかなかった、
                </div>
                <div className="hero-vertical-line hero-vertical-line-left hero-name-emphasis">
                  レイさん。
                </div>
              </div>
            </div>
          </div>

          <div className="hero-detail" style={heroLayout.detail}>
            <p className="hero-strap">
              あなたのことを
              <span className="hero-strap-emphasis">本気</span>
              で考えてくれる、
              <br />
              <span className="hero-strap-name">レイさん</span>
              に話してみよう。
            </p>
            <div className="alt-strip" id="selling-points">
              {sellingPoints.map((sellingPoint) => (
                <div
                  key={sellingPoint.copy}
                  className={`alt-card alt-${sellingPoint.side}`}
                >
                  <ResponsivePicture
                    className="alt-img"
                    image={sellingPoint.image}
                    alt={sellingPoint.alt}
                    decoding="async"
                    loading="lazy"
                  />
                  <p className="alt-situation">{sellingPoint.copy}</p>
                </div>
              ))}
            </div>

            <div className="section-heading closing-heading">
              <h2>
                そんな時に、
                <br />
                <span className="hero-strap-emphasis">じっくり</span>
                考えてみてもらおう
              </h2>
            </div>

            <section className="faq-section" aria-labelledby="faq-heading">
              <div className="section-heading faq-heading">
                <h2 id="faq-heading">よくあるご質問</h2>
              </div>

              <div className="faq-list">
                <details className="faq-item">
                  <summary>レイさんは誰ですか？</summary>
                  <p>
                    レイさんは人間関係や恋愛、日常に関しての相談に時間をかけてじっくりと考えてくれるAIサポータです
                  </p>
                </details>

                <details className="faq-item">
                  <summary>無料で話しかけてもらえますか？</summary>
                  <p>はい、無料ではじめられます</p>
                </details>

                <details className="faq-item">
                  <summary>秘密にできますか？</summary>
                  <p>はい、会話の内容はご自身以外は閲覧できません</p>
                </details>
              </div>
            </section>

            <section className="plan-section" aria-labelledby="plan-heading">
              <div className="section-heading plan-heading">
                <h2 id="plan-heading">さらにレイさんと楽しむ</h2>
              </div>

              <div className="plan-list">
                {plans.map((plan) => (
                  <article key={plan.title} className="plan-card">
                    <div className="plan-card-media">
                      <ResponsivePicture
                        className="plan-image"
                        image={plan.image}
                        alt=""
                        aria-hidden="true"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="plan-copy">
                      <div className="plan-header">
                        <h3>{plan.title}</h3>
                        <p className="plan-price">
                          ¥{plan.price}
                          <span className="plan-price-period">/月</span>
                        </p>
                      </div>
                      <div className="plan-divider" />
                      <ul className="plan-features">
                        {plan.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="sticky-footer">
        <a className="line-cta" href={lineUrl} target="_blank" rel="noreferrer">
          <img
            className="line-cta-icon"
            src="/line.png"
            alt=""
            aria-hidden="true"
            decoding="async"
            fetchPriority="low"
          />
          LINEで話しかけてもらう
        </a>
      </div>

      <footer className="page-footer">
        <div className="footer-links">
          <a href="/privacy">プライバシーポリシー</a>
          <a href="/terms">利用規約</a>
        </div>
        <p>©レイさん | AI相談</p>
      </footer>
    </main>
  )
}
