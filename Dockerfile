FROM node:16-alpine3.12 AS builder

LABEL AUTHOR=minhpq331@gmail.com

WORKDIR /app

ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile

ADD . /app
RUN yarn build && yarn generate
RUN yarn --pure-lockfile --prod

# Step 2: runtime
FROM node:16-alpine3.12

EXPOSE 3000

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

WORKDIR /app

RUN apk --no-cache add curl gettext && rm -rf /var/cache/apk/*

COPY --from=builder /app .

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["npm", "run", "start"]