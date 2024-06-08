FROM node:18-alpine

RUN apk add --no-cache git

WORKDIR /app

RUN git clone https://github.com/gabrielppd77/stock-control-fe-material.git .

RUN npm install

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]