FROM node:14
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install -qy
COPY . .
EXPOSE 8080
CMD ['node', 'index.js']