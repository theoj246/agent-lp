import type { CSSProperties } from "react"
import { createFileRoute } from "@tanstack/react-router"
import {
  ArrowRight,
  Check,
  HeartHandshake,
  MessageCircleMore,
  Orbit,
  Sparkles,
  Stars,
} from "lucide-react"

const conversationCuts = [
  {
    label: "温度を読む",
    text: "嫌われたというより、向こうも距離を測ってる段階かも。",
  },
  {
    label: "一言でほどく",
    text: "重くしないまま近づくなら、今日の空気に合わせた返し方がある。",
  },
  {
    label: "次の一手",
    text: "軽め / ちょうどいい / 少し攻める。3つの温度で出し分けられる。",
  },
]

const modes = [
  {
    title: "恋バナ整理",
    copy: "何が起きたかより、どんな空気だったかを言葉にする。",
    icon: HeartHandshake,
  },
  {
    title: "返信ドラフト",
    copy: "同じ内容でも、近さの違う 3 パターンまでその場で整える。",
    icon: MessageCircleMore,
  },
  {
    title: "脈読み補助",
    copy: "脈あり / なしで切らず、曖昧さの段階として読み解く。",
    icon: Orbit,
  },
]

const sceneSteps = [
  "気まずさや温度差を、やわらかく受け止める",
  "関係の力学を短く名づけて、見え方を変える",
  "今すぐ返せる一手を、会話の温度別に差し出す",
]

const audienceSignals = [
  "返信するか迷って、トーク画面を閉じたり開いたりしている",
  "仕事や友人関係まで含めて、いまの空気をうまく言葉にできない",
  "脈あり / なしの二択では片付かない曖昧さに引っかかっている",
  "恋愛も生活もまとめて話したいけど、説教もテンプレ励ましもいらない",
]

const trustSignals = [
  "恋愛と人間関係の空気を読むことに特化",
  "entertainment-first でも safety boundaries は維持",
  "距離を煽らず、現実の関係を前に進める設計",
]

const characterSlots = [
  {
    id: "01",
    role: "Female Character",
    mood: "静かな鋭さと、先に安心を置くタイプ",
    alt: "女性キャラクター画像を後から挿入するためのプレースホルダー",
    src: "/male.png",
    className: "character-left",
    layout: {
      "--hero-figure-top": "-18%",
      "--hero-figure-width": "42%",
      "--hero-figure-image-shift-y": "-4%",
      "--hero-figure-shift-x": "-9%",
    } as CSSProperties,
  },
  {
    id: "02",
    role: "Male Character",
    mood: "落ち着いた観察で、距離感を整えるタイプ",
    alt: "男性キャラクター画像を後から挿入するためのプレースホルダー",
    src: "/female.png",
    className: "character-right",
    layout: {
      "--hero-figure-top": "-18%",
      "--hero-figure-width": "42%",
      "--hero-figure-image-shift-y": "-4%",
    } as CSSProperties,
  },
]

const sectionLayouts = {
  shell: {
    "--lp-shell-width": "430px",
  } as CSSProperties,
  hero: {
    "--section-pad-top": "0rem",
    "--section-pad-bottom": "2rem",
  } as CSSProperties,
  value: {
    "--section-pad-top": "4.5rem",
    "--section-pad-bottom": "4rem",
  } as CSSProperties,
  trust: {
    "--section-pad-top": "4.5rem",
    "--section-pad-bottom": "4rem",
  } as CSSProperties,
  scene: {
    "--section-pad-top": "4.5rem",
    "--section-pad-bottom": "4rem",
  } as CSSProperties,
  closing: {
    "--section-pad-top": "4.5rem",
    "--section-pad-bottom": "min(14vh, 7rem)",
  } as CSSProperties,
} as const

const heroLayout = {
  stage: {
    "--hero-stage-min-height": "128vw",
  } as CSSProperties,
  copy: {
    "--hero-copy-width": "100%",
    "--hero-copy-max-width": "100%",
    "--hero-copy-shift-x": "0%",
    "--hero-copy-shift-y": "18%",
  } as CSSProperties,
  detail: {
    "--hero-detail-gap": "1.35rem",
    "--hero-detail-shift-y": "0rem",
  } as CSSProperties,
} as const

export const Route = createFileRoute("/")({ component: LandingPage })

function LandingPage() {
  return (
    <main className="lp-shell" style={sectionLayouts.shell}>
      <section className="hero-panel" style={sectionLayouts.hero}>
        <div className="hero-grid">
          <div className="hero-stage" id="characters" style={heroLayout.stage}>
            {characterSlots.map((character) => (
              <figure
                key={character.id}
                className={`character-placeholder hero-figure ${character.className}`}
                style={character.layout}
              >
              <div className="character-meta">
                  <span>{character.id}</span>
                  <p>{character.role}</p>
              </div>
              <img
                className="character-img"
                  src={character.src}
                  alt={character.alt}
              />
              <figcaption>
                  <strong>{character.role}</strong>
                  <p>{character.mood}</p>
              </figcaption>
              </figure>
            ))}

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
              <p className="hero-lead">
                恋愛の温度差も、友人関係の気まずさも、仕事帰りのもやつきも。
                レイさんは、毎日の空気をやわらかく言葉にして、次のひと言まで整える
                companion。
              </p>
            </div>
          </div>

          <div className="hero-detail" style={heroLayout.detail}>
            <div className="audience-list" aria-label="想定シーン">
              {audienceSignals.map((signal) => (
                <div key={signal} className="audience-row">
                  <Check className="size-4" />
                  <p>{signal}</p>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <a href="#characters" className="lp-button lp-button-primary">
                キャラクターを見る
                <ArrowRight className="size-4" />
              </a>
              <a href="#scenes" className="lp-button lp-button-secondary">
                会話体験をみる
              </a>
            </div>

            <div className="conversation-strip" aria-label="会話の印象例">
              {conversationCuts.map((item, index) => (
                <article
                  key={item.label}
                  className="conversation-cut"
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="stage-caption">
              <span>ART DIRECTION</span>
              <p>
                Hyperrealism anime portraits will be placed here later. The
                layout already reserves equal visual weight for both leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="value-band" style={sectionLayouts.value}>
        <div className="section-heading">
          <p className="eyebrow">WHAT STAYS WITH YOU</p>
          <h2>やさしいだけでは終わらない。少し鋭くて、返したくなる相手。</h2>
        </div>
        <div className="mode-grid">
          {modes.map((mode, index) => {
            const Icon = mode.icon

            return (
              <article
                key={mode.title}
                className="mode-item"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="size-5" />
                <h3>{mode.title}</h3>
                <p>{mode.copy}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="trust-band" style={sectionLayouts.trust}>
        <div className="section-heading">
          <p className="eyebrow">WHY THIS CONVERTS</p>
          <h2>
            欲しいのは分析ではなく、今の関係に合う言葉。だから first screen で
            job を見せる。
          </h2>
        </div>
        <div className="trust-list">
          {trustSignals.map((signal, index) => (
            <div
              key={signal}
              className="trust-row"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span>{`0${index + 1}`}</span>
              <p>{signal}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="scene-panel" id="scenes" style={sectionLayouts.scene}>
        <div className="section-heading">
          <p className="eyebrow">SCENE REHEARSAL</p>
          <h2>
            感情を受け止めて終わらせない。空気を読んで、次の一手まで連れていく。
          </h2>
        </div>

        <div className="scene-layout">
          <div className="scene-script">
            <div className="script-line">
              <span>you</span>
              <p>既読はつくのに、向こうから話を広げてこないんだよね。</p>
            </div>
            <div className="script-line active">
              <span>rei</span>
              <p>
                無視というより、会話を終わらせたいわけでも再開したいわけでもない
                曖昧さが残ってる感じかも。
              </p>
            </div>
            <div className="script-options">
              <div>
                <small>軽め</small>
                <p>「それ聞いてちょっと笑った、今日こんなことあったよ」</p>
              </div>
              <div>
                <small>ちょうどいい</small>
                <p>「最近ばたばたしてた？落ち着いたらまた話そ」</p>
              </div>
              <div>
                <small>少し攻める</small>
                <p>「また普通に話したいから、タイミング合うとき教えて」</p>
              </div>
            </div>
          </div>

          <div className="scene-steps">
            {sceneSteps.map((step, index) => (
              <div key={step} className="step-row">
                <span>{`0${index + 1}`}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-band" style={sectionLayouts.closing}>
        <div className="closing-copy">
          <p className="eyebrow">VOICE DESIGN</p>
          <h2>あたたかさが先。観察は短く。説明しすぎず、景色だけ変える。</h2>
          <p>
            恋愛、曖昧な距離感、友人関係、SNS の温度差。 serious
            に倒しすぎず、それでも安全境界は崩さない companion のための landing
            page。
          </p>
        </div>

        <div className="closing-points">
          <div>
            <Sparkles className="size-4" />
            <p>返したくなる会話</p>
          </div>
          <div>
            <Stars className="size-4" />
            <p>温度差の naming</p>
          </div>
          <div>
            <HeartHandshake className="size-4" />
            <p>現実の関係を弱めない closeness</p>
          </div>
        </div>
      </section>
    </main>
  )
}
