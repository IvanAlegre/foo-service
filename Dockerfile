FROM node:latest

RUN mkdir -p /code

WORKDIR /code

ADD package.json /code
RUN yarn

ADD . .

CMD ["node", "src/app"]
