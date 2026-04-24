import { createFileRoute } from "@tanstack/react-router"

const disclosureRows = [
  {
    label: "サービス名",
    value: "レイさん",
  },
  {
    label: "事業者名",
    value: "請求があった場合、遅滞なく開示いたします。",
  },
  {
    label: "代表者",
    value: "請求があった場合、遅滞なく開示いたします。",
  },
  {
    label: "所在地",
    value: "請求があった場合、遅滞なく開示いたします。",
  },
  {
    label: "電話番号",
    value: "請求があった場合、遅滞なく開示いたします。",
  },
  {
    label: "お問い合わせ先",
    value: "LINE公式アカウント内のお問い合わせ窓口よりご連絡ください。",
  },
  {
    label: "営業時間",
    value:
      "お問い合わせは24時間受け付けております。回答は平日10:00-17:00（土日祝を除く）を目安に順次行います。",
  },
  {
    label: "利用料金及びサービス提供期間",
    value: "有料プランページに記載します。表示価格には消費税を含みます。",
  },
  {
    label: "利用料金以外にお客様に発生する料金等",
    value:
      "インターネット接続料金、通信料金その他利用環境に応じた費用はお客様のご負担となります。",
  },
  {
    label: "有料プランの支払い方法と時期",
    value:
      "申込画面および決済画面に表示される決済方法による事前決済です。月額プランは翌月以降自動継続します。支払い済みの利用料金の返金はいたしかねます。",
  },
  {
    label: "提供時期",
    value: "当方所定の手続き終了後、直ちにご利用いただけます。",
  },
  {
    label: "解約",
    value:
      "解約はいつでも可能です。ただし、支払い済みの利用料金の返金は行われません。解約の申請は、LINE内のマイページから行ってください。",
  },
  {
    label: "動作環境",
    value:
      "LINEヤフー株式会社が運営するコミュニケーションアプリ「LINE」の動作環境に準じます。",
  },
  {
    label: "注意事項",
    value:
      "クーリング・オフについて: 特定商取引法に規定されるクーリング・オフが適用されるサービスではありません。",
  },
] as const

export const Route = createFileRoute("/legal")({
  component: LegalPage,
  head: () => ({
    meta: [
      {
        title: "特定商取引法に基づく表記 | レイさん",
      },
      {
        name: "description",
        content: "レイさんの特定商取引法に基づく表記です。",
      },
    ],
  }),
})

function LegalPage() {
  return (
    <main className="legal-shell">
      <a className="legal-back-link" href="/">
        レイさんに戻る
      </a>

      <header className="legal-header">
        <p>Legal Notice</p>
        <h1>特定商取引法に基づく表記</h1>
      </header>

      <div className="legal-table-wrap">
        <table className="legal-disclosure-table">
          <tbody>
            {disclosureRows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="legal-footer">
        <p>制定日: 2026年4月24日</p>
      </footer>
    </main>
  )
}
