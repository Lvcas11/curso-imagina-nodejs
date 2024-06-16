/**
 * Objeto que mapea métodos HTTP en mayúsculas a sus representaciones en mayúsculas.
 */
export const tiposDeMetodos = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
} as const;

/**
 * Objeto que mapea códigos de estado HTTP a sus representaciones.
 */
export const tiposDeEstados = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
} as const;

/**
 * Tipo que define los posibles formatos de respuesta
 */
export type TipoDeRespuesta = "texto" | "html" | "json";
