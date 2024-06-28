Paso 1: Configurar ESLint en tu proyecto
Instalar ESLint: Si aún no tienes ESLint instalado en tu proyecto, puedes instalarlo usando npm:

npm install eslint --save-dev
Configurar ESLint: Crea un archivo de configuración .eslintrc.js en la raíz de tu proyecto para especificar las reglas de ESLint que deseas aplicar. Aquí tienes un ejemplo básico:

// Archivo: .eslintrc.js
module.exports = {
env: {
node: true,
es6: true,
},
extends: "eslint:recommended",
parserOptions: {
ecmaVersion: 2021,
},
rules: {
// Agrega aquí tus reglas personalizadas o modifica las reglas existentes
},
};

En este ejemplo:

env: Define los entornos de ejecución (por ejemplo, node para Node.js y es6 para ECMAScript 6).
extends: Utiliza una configuración base de ESLint (eslint:recommended en este caso).
parserOptions: Configura las opciones del parser (en este caso, la versión de ECMAScript 2021).
rules: Puedes especificar reglas personalizadas de ESLint aquí según las necesidades de tu proyecto.
Añadir scripts en package.json: Para facilitar la ejecución de ESLint desde la línea de comandos, añade scripts en tu package.json:

json

"scripts": {
"lint": "eslint . --ext .js,.jsx,.ts,.tsx",
"lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
}
lint: Ejecuta ESLint para verificar errores en los archivos con extensiones .js, .jsx, .ts, .tsx.
lint:fix: Ejecuta ESLint y también intenta corregir automáticamente los problemas que pueda.
Paso 2: Integrar ESLint en tu GitHub Actions
Actualizar tu archivo de flujo de trabajo (ci.yml): Ahora, modifica tu archivo YAML en .github/workflows/ci.yml para incluir la verificación de ESLint como parte del proceso.

yaml

# Archivo: .github/workflows/ci.yml

name: CI

on:
pull_request:
branches: - main # Ejecutar cuando se abra un pull request hacia la rama main

jobs:
test:
runs-on: ubuntu-latest

    steps:
    - name: Checkout código
      uses: actions/checkout@v2

    - name: Instalar Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Instalar dependencias
      run: npm install

    - name: Ejecutar ESLint
      run: npm run lint

    - name: Ejecutar tests con Jest
      run: npm run test

Ejecutar ESLint: Agrega un paso para ejecutar ESLint antes de ejecutar los tests. Esto verificará si hay errores de estilo en tu código según la configuración definida en .eslintrc.js.
Paso 3: Subir cambios y verificar GitHub Actions
Commit y push: Sube los cambios al repositorio en GitHub, asegurándote de incluir tanto .eslintrc.js como las modificaciones en package.json y .github/workflows/ci.yml.

Activación de GitHub Actions: GitHub Actions se ejecutará automáticamente cada vez que se abra un pull request hacia main. Podrás ver el estado de la ejecución y los resultados en la pestaña "Actions" de tu repositorio.
