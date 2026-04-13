import { useEffect } from "react"
import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    if (!POSTHOG_KEY || !POSTHOG_HOST) {
      return
    }

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      defaults: "2026-01-30",
    })
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
