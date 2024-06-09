# Establece la imagen base
FROM node:20

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Compila el código TypeScript
RUN npm run build

# Expone el puerto en el que correrá la aplicación
EXPOSE 3000

# Define el comando para correr la aplicación
CMD ["npm", "run", "docker-start"]
