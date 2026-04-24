import { createFileRoute } from "@tanstack/react-router"

const collectedFromUsers = [
  "LINEプロフィール情報（ユーザー識別子、表示名、アイコン等）",
  "お問い合わせ時に入力された氏名、連絡先、問い合わせ内容等",
  "有料プランの申込、変更、解約、決済状況に関する情報",
  "ユーザーが本サービスの利用のために入力した文章、画像その他の情報",
  "ユーザーが任意に入力または送信した趣味、関心、会話内容その他の属性情報",
] as const

const collectedFromUsage = [
  "本サービスの利用日時、利用回数、閲覧ページ、操作ログ等の利用状況",
  "Cookie、アクセスログ、IPアドレス、ブラウザ情報、端末情報、OS情報等",
  "広告、キャンペーン、流入元、コンバージョン計測に関する情報",
] as const

const purposes = [
  "本サービスを提供、維持、保護するため",
  "ユーザー認証、ユーザー識別、利用状態の管理を行うため",
  "有料プランの申込、決済、請求、変更、解約を処理するため",
  "お問い合わせへの対応、重要なお知らせ、各種連絡を行うため",
  "本サービスの利用状況を調査、分析し、品質改善や新機能開発に利用するため",
  "ユーザーに合わせた表示、案内、コミュニケーションを行うため",
  "不正利用の防止、安全性の確保、トラブル対応を行うため",
  "取得情報を統計的に処理したうえで、個人を識別できない形式で利用または公表するため",
] as const

const modules = [
  {
    name: "LINEヤフー株式会社",
    href: "https://line.me/ja/terms/policy/",
    items: [
      "送信される項目: LINEユーザー識別子、LINEプロフィール情報、LINE上での認証に必要な情報",
      "利用目的: LINEログイン、ユーザー識別、メッセージ送受信、LINEミニアプリ機能の提供のため",
      "送信される仕組み: LINEログイン、LIFF、Messaging API等を通じた連携",
    ],
  },
  {
    name: "PostHog",
    href: "https://posthog.com/privacy",
    items: [
      "送信される項目: Cookie、端末情報、ブラウザ情報、閲覧ページ、操作イベント、識別子等",
      "利用目的: 本サービスの利用状況分析、改善、広告効果測定のため",
      "送信される仕組み: PostHog JavaScript SDKを通じた連携",
    ],
  },
  {
    name: "Autumn",
    href: "https://useautumn.com/",
    items: [
      "送信される項目: ユーザー識別子、有料プラン、決済状態、請求管理に必要な情報",
      "利用目的: サブスクリプションの申込、変更、解約、請求管理のため",
      "送信される仕組み: Autumn APIを通じた連携",
    ],
  },
  {
    name: "Anthropic",
    href: "https://www.anthropic.com/legal/privacy",
    items: [
      "送信される項目: ユーザーが本サービスに入力した文章、会話に必要な文脈情報等",
      "利用目的: AIによる応答生成、本サービスの提供、品質維持のため",
      "送信される仕組み: Anthropic APIを通じた連携",
    ],
  },
] as const

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      {
        title: "プライバシーポリシー | レイさん",
      },
      {
        name: "description",
        content: "レイさんのプライバシーポリシーです。",
      },
    ],
  }),
})

function PolicySection({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <section className="policy-section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function PrivacyPage() {
  return (
    <main className="legal-shell policy-shell">
      <a className="legal-back-link" href="/">
        レイさんに戻る
      </a>

      <header className="legal-header policy-header">
        <p>Privacy Policy</p>
        <h1>プライバシーポリシー</h1>
        <p className="policy-lead">
          レイさん運営事務局（以下「当方」といいます）は、当方が提供するサービス「レイさん」（以下「本サービス」といいます）をご利用になる皆様（以下「ユーザー」といいます）の情報を以下のように取り扱います。
        </p>
      </header>

      <div className="policy-body">
        <PolicySection title="第1条（関係法令、ガイドライン等の遵守）">
          <p>
            当方は、当方に適用される個人情報保護に関する法令およびガイドライン等を遵守いたします。
          </p>
        </PolicySection>

        <PolicySection title="第2条（当方が取得する可能性のある情報）">
          <h3>1. ユーザーから取得する可能性のある情報</h3>
          <ul>
            {collectedFromUsers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>2. 本サービスの利用に関連して取得する可能性のある情報</h3>
          <ul>
            {collectedFromUsage.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>3. 第三者から取得する情報</h3>
          <p>
            当方は、広告事業者、解析事業者、決済事業者、その他のサービスプロバイダから取得する識別子、閲覧履歴、決済状態等の情報を、当方が保有するユーザー情報と紐づけて利用する場合があります。
          </p>
        </PolicySection>

        <PolicySection title="第3条（個人情報の取得・利用）">
          <p>
            当方は、偽りその他不正の手段により個人情報を取得しません。当方は、法令で定める場合またはあらかじめ本人の同意を得た場合を除き、要配慮個人情報を取得しません。ただし、ユーザーが本サービス上で要配慮個人情報を送信した場合、当方が本サービス提供に必要な範囲で当該情報を取得することがあります。
          </p>
          <p>当方は、以下の目的の達成に必要な範囲内で個人情報を利用します。</p>
          <ol>
            {purposes.map((purpose) => (
              <li key={purpose}>{purpose}</li>
            ))}
          </ol>
          <p>
            当方は、利用目的を変更することがあります。この場合、変更後の利用目的を本サービス上で公表します。
          </p>
        </PolicySection>

        <PolicySection title="第4条（個人データの管理）">
          <p>
            当方は、個人データの漏えい、滅失、毀損等を防止するために、必要かつ適切な安全管理措置を講じ、個人データの適切な管理に努めます。
          </p>
        </PolicySection>

        <PolicySection title="第5条（個人データ等の第三者への提供）">
          <p>
            当方は、法令で定める場合を除き、あらかじめ本人の同意を得ることなく個人データを第三者に提供しません。ただし、本サービスの提供、決済、分析、保守、問い合わせ対応等に必要な範囲で、業務委託先または外部サービス提供者に情報を取り扱わせることがあります。
          </p>
        </PolicySection>

        <PolicySection title="第6条（外部送信・情報収集モジュールの利用）">
          <p>
            当方は、本サービスの提供、利用状況の分析、品質改善、決済管理、広告効果測定のため、第三者のサービスまたは情報収集モジュールを利用することがあります。
          </p>

          <div className="policy-module-list">
            {modules.map((module) => (
              <article className="policy-module" key={module.name}>
                <h3>
                  <a href={module.href}>{module.name}</a>
                </h3>
                <ul>
                  {module.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </PolicySection>

        <PolicySection title="第7条（開示請求等の手続およびお問い合わせ先）">
          <p>
            保有個人データの利用目的の通知、開示、訂正、追加、削除、利用停止、消去、第三者提供の停止、第三者提供記録の開示をご希望の場合、または個人情報の取扱いに関するお問い合わせがある場合は、LINE公式アカウント内のお問い合わせ窓口よりご連絡ください。当方は、ご本人または正当な代理人であることを確認のうえ、個人情報保護法その他の関係法令に従い、適切に対応いたします。
          </p>
        </PolicySection>

        <PolicySection title="第8条（本プライバシーポリシーの改定）">
          <p>
            当方は、必要に応じて本プライバシーポリシーを改定することがあります。本プライバシーポリシーの最新版は、本サービスまたは当方のウェブサイトに掲載します。
          </p>
        </PolicySection>
      </div>

      <footer className="legal-footer">
        <p>最終更新日: 2026年4月24日</p>
      </footer>
    </main>
  )
}
