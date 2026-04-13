import { describe, expect, it } from "vitest"
import {
  buildLineConversionUrl,
  readPostHogIdentity,
} from "@/lib/line-conversion"

describe("line conversion", () => {
  it("builds the mini app handoff url with forwarded posthog ids", () => {
    expect(
      buildLineConversionUrl("https://miniapp.line.me/200/app/convertion", {
        anonymousDistinctId: "anon user",
        sessionId: "session/1",
      })
    ).toBe(
      "https://miniapp.line.me/200/app/convertion?ph_distinct_id=anon+user&ph_session_id=session%2F1"
    )
  })

  it("reads the current posthog distinct id and session id", () => {
    expect(
      readPostHogIdentity({
        get_distinct_id: () => "distinct-123",
        get_session_id: () => "session-456",
      })
    ).toEqual({
      anonymousDistinctId: "distinct-123",
      sessionId: "session-456",
    })
  })
})
