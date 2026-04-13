import type { CSSProperties } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Image } from "@unpic/react"


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

export const Route = createFileRoute("/")({ component: LandingPage })

function LandingPage() {
  return (
    <main className="lp-shell" style={sectionLayouts.shell}>
      <div className="lp-background-media" aria-hidden="true">
        <Image
          className="lp-background-image"
          src="/background.png"
          alt=""
          width={860}
          height={1720}
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
              <div className="alt-card alt-left">
                <Image
                  className="alt-img"
                  src="/1.png"
                  alt="悩みを抱えた女性のイメージ"
                  width={1200}
                  height={800}
                />
                <p className="alt-situation">「なんか最近、毎日が同じことの繰り返しな気がして」</p>
              </div>

              <div className="alt-card alt-right">
                <Image
                  className="alt-img"
                  src="/2.png"
                  alt="人間関係に悩む女性のイメージ"
                  width={1200}
                  height={800}
                />
                <p className="alt-situation">「グループの中でちょっと浮いてる気がしてきた」</p>
              </div>

              <div className="alt-card alt-left">
                <Image
                  className="alt-img"
                  src="/3.png"
                  alt="恋愛の進め方に迷う女性のイメージ"
                  width={1200}
                  height={800}
                />
                <p className="alt-situation">「好きな人がいるんだけど、どう進めたらいいかわからない」</p>
              </div>

              <div className="alt-card alt-right">
                <Image
                  className="alt-img"
                  src="/4.png"
                  alt="将来への不安を抱える女性のイメージ"
                  width={1200}
                  height={800}
                />
                <p className="alt-situation">「このままでいいのかな、って最近ぼんやり考えてる」</p>
              </div>

              <div className="alt-card alt-left">
                <Image
                  className="alt-img"
                  src="/5.png"
                  alt="パートナーとのすれ違いに悩む女性のイメージ"
                  width={1200}
                  height={800}
                />
                <p className="alt-situation">「最近、パートナーと話が噛み合わない気がしてて」</p>
              </div>
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
                  <article className="plan-card">
                    <div className="plan-card-media">
                      <Image
                        className="plan-image"
                        src="/p1.png"
                        alt=""
                        aria-hidden="true"
                        width={320}
                        height={420}
                      />
                    </div>
                    <div className="plan-copy">
                      <div className="plan-header">
                        <h3>レイさんの平日</h3>
                        <p className="plan-price">
                          ¥980<span className="plan-price-period">/月</span>
                        </p>
                      </div>
                      <div className="plan-divider" />
                      <ul className="plan-features">
                        <li>より多く話せる</li>
                      </ul>
                    </div>
                  </article>

                  <article className="plan-card">
                    <div className="plan-card-media">
                      <Image
                        className="plan-image"
                        src="/p2.png"
                        alt=""
                        aria-hidden="true"
                        width={320}
                        height={420}
                      />
                    </div>
                    <div className="plan-copy">
                      <div className="plan-header">
                        <h3>レイさんの週末</h3>
                        <p className="plan-price">
                          ¥1,980<span className="plan-price-period">/月</span>
                        </p>
                      </div>
                      <div className="plan-divider" />
                      <ul className="plan-features">
                        <li>よりしっかり考え、深く会話できる</li>
                        <li>毎週、週末の様子を、写真付きで届けてくれる（5月から予定）</li>
                      </ul>
                    </div>
                  </article>
                </div>
            </section>
          </div>
        </div>
      </section>

      <div className="sticky-footer">
        <a
          className="line-cta"
          href="https://line.me/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="line-cta-icon"
            src="/line.png"
            alt=""
            aria-hidden="true"
            width={64}
            height={64}
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
