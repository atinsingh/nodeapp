FROM node
WORKDIR /app
COPY app.js /app/app.js
COPY package.json /app/package.json
RUN npm install
ENV APP_NAME=GREAT-NODE-APP
EXPOSE 4000
CMD ["node", "app.js"]