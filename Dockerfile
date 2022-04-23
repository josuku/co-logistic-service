FROM node:latest as build-step

ARG ENV=prod
ARG APP=co-logistic-service
ARG PORT=3003

ENV ENV ${ENV}
ENV APP ${APP}
ENV PORT ${PORT}

WORKDIR /app
COPY ./ /app

RUN npm ci
RUN npm run build

FROM build-step
CMD ["node", "dist/main"]
