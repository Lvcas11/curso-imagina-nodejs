Verbs and Clauses in SQL

1. SELECT
   Descripción: Utilizado para consultar y recuperar datos de una base de datos.
   Ejemplo:

SELECT nombre, edad FROM empleados;
Esto selecciona las columnas nombre y edad de la tabla empleados. 2. FROM
Descripción: Especifica la tabla de la que se seleccionarán o eliminarán los datos.
Ejemplo:

SELECT \* FROM productos;
Esto selecciona todas las columnas de la tabla productos. 3. WHERE
Descripción: Filtra los registros que cumplen una condición específica.
Ejemplo:

SELECT nombre FROM clientes WHERE ciudad = 'Madrid';
Esto selecciona los nombres de los clientes que viven en Madrid. 4. INSERT INTO
Descripción: Inserta nuevos registros en una tabla.
Ejemplo:

INSERT INTO empleados (nombre, edad, puesto) VALUES ('Ana', 30, 'Ingeniera');
Esto inserta un nuevo empleado con nombre Ana, edad 30 y puesto de Ingeniera. 5. UPDATE
Descripción: Actualiza datos existentes en una tabla.
Ejemplo:

UPDATE productos SET precio = 20 WHERE id = 1;
Esto actualiza el precio del producto con id 1 a 20. 6. DELETE
Descripción: Elimina registros de una tabla.
Ejemplo:

DELETE FROM clientes WHERE id = 5;
Esto elimina al cliente con id 5. 7. JOIN
Descripción: Combina filas de dos o más tablas, basadas en una columna relacionada entre ellas.
Ejemplo:

SELECT ordenes.id, clientes.nombre FROM ordenes
JOIN clientes ON ordenes.cliente_id = clientes.id;
Esto selecciona las id de las órdenes y los nombres de los clientes correspondientes, uniendo las tablas ordenes y clientes. 8. ORDER BY
Descripción: Ordena los resultados de una consulta por una o más columnas.
Ejemplo:

SELECT nombre, salario FROM empleados ORDER BY salario DESC;
Esto selecciona nombres y salarios de los empleados, ordenándolos de mayor a menor salario. 9. GROUP BY
Descripción: Agrupa filas que tienen los mismos valores en columnas especificadas.
Ejemplo:

SELECT departamento, COUNT(\*) FROM empleados GROUP BY departamento;
Esto cuenta el número de empleados en cada departamento. 10. HAVING
Descripción: Filtra grupos de registros que cumplen una condición después de haber sido agrupados por GROUP BY.
Ejemplo:

SELECT departamento, COUNT(_) FROM empleados GROUP BY departamento HAVING COUNT(_) > 5;
Esto selecciona solo los departamentos con más de 5 empleados. 11. LIMIT
Descripción: Restringe el número de registros devueltos por una consulta.
Ejemplo:

SELECT \* FROM productos LIMIT 10;
Esto selecciona los primeros 10 productos de la tabla productos.
Ejemplo Completo
Un ejemplo de una consulta más compleja que combina varios de estos verbos y cláusulas:

SELECT p.nombre, p.precio, c.nombre AS categoria
FROM productos p
JOIN categorias c ON p.categoria_id = c.id
WHERE p.precio > 50
ORDER BY p.precio DESC
LIMIT 5;
