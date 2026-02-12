/**
 * Microsoft Clarity Utility Functions
 * These functions help track specific user actions and events.
 */

declare global {
  interface Window {
    clarity: (command: string, ...args: any[]) => void;
  }
}

/**
 * Tracks a custom event in Microsoft Clarity.
 * Use this for high-value actions like form submissions or key clicks.
 */
export const trackClarityEvent = (eventName: string) => {
  if (typeof window.clarity === "function") {
    window.clarity("event", eventName);
  }
};

/**
 * Sets custom tags for the current session.
 * Useful for categorizing users or page types.
 */
export const setClarityTag = (key: string, value: string) => {
  if (typeof window.clarity === "function") {
    window.clarity("set", key, value);
  }
};

/**
 * Identifies a user in Microsoft Clarity.
 * Note: Avoid sending PII (Personally Identifiable Information) unless strictly necessary and compliant.
 */
export const identifyClarityUser = (userId: string) => {
  if (typeof window.clarity === "function") {
    window.clarity("identify", userId);
  }
};
