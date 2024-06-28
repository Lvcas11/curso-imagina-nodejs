// src/utils/logging.ts
import * as Sentry from "@sentry/node";
import type { CaptureContext, SeverityLevel } from "@sentry/types";
import Log from "../../models/log/log";

export const logMessageToSentryAndDb = async (
  message: string,
  level: CaptureContext | SeverityLevel = "info"
) => {
  // Enviar el log a Sentry
  Sentry.captureMessage(message, level);

  // Guardar el log en la base de datos
  await Log.create({ level, message, timestamp: new Date() });
  console.log(`[Log registrado]: ${message}`);
};

export const logErrorToSentryAndDb = async (error: Error) => {
  // Enviar el error a Sentry
  Sentry.captureException(error);

  // Guardar el error en la base de datos
  await Log.create({
    level: "error",
    message: error.message,
    timestamp: new Date(),
  });
  console.error(`[Error registrado]: ${error.message}`);
};
