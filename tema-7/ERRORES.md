Códigos de Estado 300 Más Utilizados

300 Multiple Choices
Descripción: El recurso solicitado corresponde a cualquiera de un conjunto de representaciones. El usuario o el agente de usuario debería seleccionar uno de ellos.
Mensaje: "Multiple Choices"

301 Moved Permanently
Descripción: El recurso solicitado ha sido asignado a una nueva URI permanente. Todas las solicitudes futuras deben utilizar la nueva URI.
Mensaje: "Moved Permanently"

302 Found
Descripción: El recurso solicitado reside temporalmente en una URI diferente. Dado que las redirecciones pueden cambiar con frecuencia, el cliente debe continuar usando la URI original para futuras solicitudes.
Mensaje: "Found" o "Moved Temporarily"

303 See Other
Descripción: El servidor redirige al cliente a una URI diferente para completar la solicitud, típicamente una URI para obtener los resultados de una operación en curso.
Mensaje: "See Other"

304 Not Modified
Descripción: El recurso no ha sido modificado desde la última solicitud. Esto se utiliza para mejorar la eficiencia con la caché del cliente.
Mensaje: "Not Modified"
307 Temporary Redirect

Descripción: El servidor redirige al cliente a una URI diferente temporalmente. Las solicitudes posteriores deben continuar utilizando la URI original.
Mensaje: "Temporary Redirect"

308 Permanent Redirect
Descripción: El recurso solicitado se ha movido a una nueva URI permanentemente. Las solicitudes futuras deben utilizar la nueva URI.
Mensaje: "Permanent Redirect"
Implementación en el Código Existente
Aunque tu implementación actual del ErrorHandler maneja principalmente errores relacionados con la clase 400 y 500, puedes extender la función para manejar situaciones de redirección (códigos 300) si en algún momento el manejo de redirecciones es relevante en tus controladores.

Nota: Las redirecciones generalmente no se manejan en errores sino en respuestas exitosas que indican al cliente que tome una acción específica. Por lo tanto, normalmente, no se integran en un manejador de errores, pero se incluyen en la lógica del controlador cuando se desea redirigir al usuario.

Códigos de Estado HTTP 400 Más Utilizados

400 Bad Request
Descripción: Indica que la solicitud no pudo ser entendida por el servidor debido a una sintaxis incorrecta, formato no válido, o parámetros faltantes o incorrectos.
Mensaje: "Bad Request"

401 Unauthorized
Descripción: Indica que se requiere autenticación para acceder al recurso solicitado, pero el cliente no ha proporcionado credenciales válidas.
Mensaje: "Unauthorized"

403 Forbidden
Descripción: Indica que el servidor entendió la solicitud, pero se niega a autorizarla. El cliente no tiene permiso para acceder al contenido.
Mensaje: "Forbidden"

404 Not Found
Descripción: Indica que el recurso solicitado no se pudo encontrar en el servidor.
Mensaje: "Not Found"

405 Method Not Allowed
Descripción: Indica que el método de solicitud utilizado (GET, POST, PUT, DELETE, etc.) no está permitido para el recurso solicitado.
Mensaje: "Method Not Allowed"

406 Not Acceptable
Descripción: Indica que el servidor no puede generar una respuesta que sea aceptable según los encabezados Accept proporcionados en la solicitud.
Mensaje: "Not Acceptable"

408 Request Timeout
Descripción: Indica que el servidor cerró la conexión porque la solicitud tomó demasiado tiempo en procesarse.
Mensaje: "Request Timeout"

409 Conflict
Descripción: Indica que la solicitud no se pudo completar debido a un conflicto con el estado actual del recurso, como una versión anterior del recurso que no coincide con la versión actual.
Mensaje: "Conflict"

415 Unsupported Media Type
Descripción: Indica que el servidor no puede procesar la entidad solicitada porque el tipo de medio es incompatible o no soportado.
Mensaje: "Unsupported Media Type"

Códigos de Estado HTTP 500 Más Utilizados

500 Internal Server Error
Descripción: Indica que se produjo un error inesperado en el servidor que impidió que se completara la solicitud del cliente.
Mensaje: "Internal Server Error"

501 Not Implemented
Descripción: Indica que el servidor no reconoce o no soporta el método de solicitud utilizado por el cliente.
Mensaje: "Not Implemented"

502 Bad Gateway
Descripción: Indica que el servidor actuó como un proxy o gateway y recibió una respuesta inválida desde el servidor upstream.
Mensaje: "Bad Gateway"

503 Service Unavailable
Descripción: Indica que el servidor no puede manejar la solicitud en este momento debido a una sobrecarga temporal o mantenimiento del servidor.
Mensaje: "Service Unavailable"

504 Gateway Timeout
Descripción: Indica que el servidor actuó como un proxy o gateway y no recibió una respuesta oportuna desde el servidor upstream.
Mensaje: "Gateway Timeout"

505 HTTP Version Not Supported
Descripción: Indica que el servidor no soporta la versión del protocolo HTTP utilizada en la solicitud.
Mensaje: "HTTP Version Not Supported"
