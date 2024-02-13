FROM node:alpine:3.18
RUN mkdir -p /calculator/app
WORKDIR /calculator/app
COPY package*.json ./
RUN npm install
COPY *.js ./
EXPOSE 3000
#CMD [ "node","index.js"]
# ECS likes to use entrypoint.
ENTRYPOINT ["node","index.js" ]
