import Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node":

Sentry.init({
  dsn: "https://a015a46a5c8ae70ae33e2583102d9ef4@o4507505752866816.ingest.de.sentry.io/4507505757519952",
  integrations: [
    nodeProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});