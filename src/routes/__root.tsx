import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"

import { PostHogProvider } from "@/providers/posthog"

import appCss from "../styles.css?url"

const metaPixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1877879370424797');
fbq('track', 'PageView');`

const metaPixelNoscriptSrc =
  "https://www.facebook.com/tr?id=1877879370424797&ev=PageView&noscript=1"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "レイさん",
      },
      {
        name: "description",
        content:
          "恋愛と人間関係の空気を読み、気まずさをほどいて、次のひと言まで整える relationship companion のランディングページ。",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: metaPixelScript }} />
      </head>
      <body>
        <noscript>
          <img
            alt=""
            height={1}
            src={metaPixelNoscriptSrc}
            style={{ display: "none" }}
            width={1}
          />
        </noscript>
        <PostHogProvider>{children}</PostHogProvider>
        <Scripts />
      </body>
    </html>
  )
}
