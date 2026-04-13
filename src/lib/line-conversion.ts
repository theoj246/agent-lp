export const POSTHOG_DISTINCT_ID_QUERY_PARAM = "ph_distinct_id"
export const POSTHOG_SESSION_ID_QUERY_PARAM = "ph_session_id"

export interface ForwardedPostHogIdentity {
  readonly anonymousDistinctId: string | null
  readonly sessionId: string | null
}

interface PostHogIdentityClient {
  get_distinct_id: () => string
  get_session_id: () => string
}

const normalizeQueryValue = (value: string | null | undefined) => {
  if (typeof value !== "string") {
    return null
  }

  const normalizedValue = value.trim()
  return normalizedValue.length > 0 ? normalizedValue : null
}

export const buildLineConversionUrl = (
  baseUrl: string,
  { anonymousDistinctId, sessionId }: ForwardedPostHogIdentity
) => {
  try {
    const target = new URL(baseUrl)

    if (anonymousDistinctId) {
      target.searchParams.set(
        POSTHOG_DISTINCT_ID_QUERY_PARAM,
        anonymousDistinctId
      )
    }

    if (sessionId) {
      target.searchParams.set(POSTHOG_SESSION_ID_QUERY_PARAM, sessionId)
    }

    return target.toString()
  } catch {
    return baseUrl
  }
}

export const readPostHogIdentity = (
  client: PostHogIdentityClient
): ForwardedPostHogIdentity => ({
  anonymousDistinctId: normalizeQueryValue(client.get_distinct_id()),
  sessionId: normalizeQueryValue(client.get_session_id()),
})
