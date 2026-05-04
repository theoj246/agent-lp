import { useEffect, useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import posthog from "posthog-js"
import chatPanel430 from "../assets/rei-line/chat-panel-430.webp"
import chatPanel860 from "../assets/rei-line/chat-panel-860.webp"
import ctaPanel430 from "../assets/rei-line/cta-panel-430.webp"
import ctaPanel860 from "../assets/rei-line/cta-panel-860.webp"
import heroArt430 from "../assets/rei-line/hero-430.webp"
import heroArt860 from "../assets/rei-line/hero-860.webp"
import lineupArt430 from "../assets/rei-line/lineup-panel-430.webp"
import lineupArt860 from "../assets/rei-line/lineup-panel-860.webp"
import {
  buildLineConversionUrl,
  readPostHogIdentity,
} from "@/lib/line-conversion"

const miniAppUrl = import.meta.env.VITE_MINI_APP_URL || "https://line.me/"
const isPostHogConfigured = Boolean(
  import.meta.env.VITE_POSTHOG_PROJECT_TOKEN &&
  import.meta.env.VITE_POSTHOG_HOST
)

const heroArtSrcSet = [`${heroArt430} 430w`, `${heroArt860} 860w`].join(", ")
const chatPanelSrcSet = [`${chatPanel430} 430w`, `${chatPanel860} 860w`].join(
  ", "
)
const lineupArtSrcSet = [`${lineupArt430} 430w`, `${lineupArt860} 860w`].join(
  ", "
)
const ctaPanelSrcSet = [`${ctaPanel430} 430w`, `${ctaPanel860} 860w`].join(", ")

const topics = [
  {
    title: "気持ちを置きたい夜",
    copy: "まとまっていない言葉でも大丈夫。レイさんがゆっくり受け止めます。",
  },
  {
    title: "誰かとの関係に迷う時",
    copy: "相手のことも、あなたの気持ちも、急がず一緒に考えます。",
  },
  {
    title: "ひとりで抱えたくない時",
    copy: "毎日の会話の中で、少しずつあなたを知って支えます。",
  },
] as const

const steps = [
  "いまの気持ちをそのまま送る",
  "レイさんが深く考えて返す",
  "会話を重ねて関係を育てる",
] as const

const plans = [
  {
    name: "友達",
    price: "永遠に無料",
    copy: "まずはレイさんと友達になるところから。",
  },
  {
    name: "応援",
    price: "980",
    copy: "毎日の気持ちを、少しずつ話していきたい方へ。",
  },
  {
    name: "推し",
    price: "1,980",
    copy: "長く深く話しながら、レイさんとの関係を育てたい方へ。",
  },
] as const

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroArt430,
        imageSrcSet: heroArtSrcSet,
        imageSizes: "(max-width: 430px) 100vw, 430px",
        fetchPriority: "high",
      },
    ],
  }),
})

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
  const [lineUrl, setLineUrl] = useState(() =>
    buildLineConversionUrl(miniAppUrl, {
      anonymousDistinctId: null,
      sessionId: null,
    })
  )

  useEffect(() => {
    if (!isPostHogConfigured) {
      return
    }

    setLineUrl(buildLineConversionUrl(miniAppUrl, readPostHogIdentity(posthog)))
  }, [])

  return (
    <main className="rei-page">
      <LandingVitalsReporter />

      <section className="rei-hero" aria-labelledby="hero-heading">
        <div className="rei-brandbar">
          <span>レイさん</span>
          <small>LINEで話せるAI友達</small>
        </div>

        <div className="rei-hero-art">
          <img
            src={heroArt430}
            i
            srcSet={heroArtSrcSet}
            sizes="(max-width: 430px) 100vw, 430px"
            width="430"
            height="760"
            alt="赤い手芸風の背景にレイさんがいるイメージ"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="rei-hero-copy">
          <h1 id="hero-heading">
            恋のことも、
            <br />
            人間関係のことも。
            <br />
            レイさんと話そう
          </h1>
        </div>
      </section>

      <section className="rei-intro" aria-label="サービス紹介">
        <p>
          あなたの気持ちに、いつも本気で向き合うレイさんへ。
          LINEでつながるたび、言葉にならない想いも少しずつ届いていく。
          わたしたちの会話は、いつもあなたのそばに。
        </p>
      </section>

      <section className="rei-topic-section" aria-labelledby="topic-heading">
        <p className="rei-kicker">Talk about</p>
        <h2 id="topic-heading">こんな時に、話しましょう</h2>
        <img
          className="rei-lineup-art"
          src={lineupArt430}
          srcSet={lineupArtSrcSet}
          sizes="(max-width: 430px) calc(100vw - 2rem), 398px"
          width="430"
          height="716"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="rei-topic-list">
          {topics.map((topic, index) => (
            <article className="rei-topic" key={topic.title}>
              <span>{index + 1}</span>
              <h3>{topic.title}</h3>
              <p>{topic.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rei-flow" aria-labelledby="flow-heading">
        <p className="rei-kicker">How it works</p>
        <h2 id="flow-heading">話すほど、レイさんが近づいてくる。</h2>
        <img
          className="rei-chat-art"
          src={chatPanel430}
          srcSet={chatPanelSrcSet}
          sizes="(max-width: 430px) calc(100vw - 2rem), 398px"
          width="430"
          height="716"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <ol>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="rei-closing" aria-labelledby="closing-heading">
        <img
          className="rei-cta-art"
          src={ctaPanel430}
          srcSet={ctaPanelSrcSet}
          sizes="(max-width: 430px) 100vw, 430px"
          width="430"
          height="716"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="rei-closing-copy">
          <p className="rei-kicker">LINE message</p>
          <h2 id="closing-heading">
            レイさんは、会話を覚えて近づいていく。
            <br />
            その日だけの答えではなく、次の会話も一緒に。
          </h2>
        </div>
      </section>

      <section className="rei-faq" aria-labelledby="faq-heading">
        <p className="rei-kicker">FAQ</p>
        <h2 id="faq-heading">よくあるご質問</h2>
        <details>
          <summary>レイさんは誰ですか？</summary>
          <p>
            恋愛や人間関係、日常の気持ちを深く考えながら寄り添うAIサポーターです。
          </p>
        </details>
        <details>
          <summary>無料ではじめられますか？</summary>
          <p>はい。LINEから無料ではじめられます。</p>
        </details>
        <details>
          <summary>相談内容は秘密にできますか？</summary>
          <p>はい。会話の内容はご自身以外は閲覧できません。</p>
        </details>
      </section>

      <section className="rei-plan-section" aria-labelledby="plan-heading">
        <p className="rei-kicker">Plans</p>
        <h2 id="plan-heading">もっと話したい日のために。</h2>
        <div className="rei-plan-list">
          {plans.map((plan) => (
            <article className="rei-plan" key={plan.name}>
              <h3>{plan.name}</h3>
              <p>{plan.copy}</p>
              <strong>
                {plan.price === "永遠に無料" ? null : <span>¥</span>}
                {plan.price}
                {plan.price === "永遠に無料" ? null : <small>/月</small>}
              </strong>
            </article>
          ))}
        </div>
      </section>

      <div className="sticky-footer">
        <a className="line-cta" href={lineUrl}>
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
          <a href="/legal">特定商取引法に基づく表記</a>
        </div>
        <p>©レイさん | AI相談</p>
      </footer>
    </main>
  )
}
