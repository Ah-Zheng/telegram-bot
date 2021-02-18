FROM node:14

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN yarn && yarn cache clean
EXPOSE 8080
CMD ["yarn", "start"]