FROM node:12.18.1
WORKDIR /usr/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install -qy
COPY . .
EXPOSE 3000
CMD ["npm", "start"]