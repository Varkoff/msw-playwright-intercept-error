# Inspired by https://github.com/remix-run/indie-stack/blob/main/Dockerfile
# base node image
#* Install all node_modules, including dev dependencies
FROM node:18-bullseye-slim as build

RUN apt-get update && apt-get install -y curl tzdata
RUN npm i -g pnpm@8.4.0
# RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /myapp

COPY package.json .npmrc pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

RUN pnpm prune --production

# Finally, build the production image with minimal footprint
FROM node:18-bullseye-slim as production

RUN apt-get update && apt-get install -y curl
RUN npm i -g pnpm@8.4.0

ARG 
    BACKEND_URL \
    FRONTEND_URL \

ENV PORT="3000"
ENV TZ=Europe/Paris
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /myapp

COPY --from=build /myapp/node_modules /myapp/node_modules

COPY --from=build /myapp/server-build /myapp/server-build
COPY --from=build /myapp/build /myapp/build
COPY --from=build /myapp/public /myapp/public
COPY --from=build /myapp/package.json /myapp/package.json
COPY --from=build /myapp/start.sh /myapp/start.sh
COPY --from=build /myapp/index.js /myapp/index.js

RUN cat /myapp/index.js
ENTRYPOINT [ "./start.sh" ]
