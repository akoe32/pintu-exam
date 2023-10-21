FROM golang:1.21-alpine as builder

ENV TZ 'Asia/Jakarta'
ENV LANG 'C.UTF-8'

RUN echo $TZ > /etc/timezone && \
        apk --no-cache add ca-certificates tzdata git musl-dev make g++ zlib-dev && \
        ln -snf /usr/share/zoneinfo/$TZ /etc/localtime

WORKDIR /app

COPY go.mod /app
COPY go.sum /app
RUN go mod tidy

COPY . /app
RUN  GOOS=linux go build -o ./build/golang-rest-trial

FROM alpine:latest
ENV TZ 'Asia/Jakarta'
ENV LANG 'C.UTF-8'

WORKDIR /app
RUN touch .env

COPY --from=builder /app/build/golang-rest-trial  /app
RUN echo $TZ > /etc/timezone \
    && apk update \
    && apk upgrade \
    && apk add --no-cache ca-certificates tzdata \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime

EXPOSE 8080
ENTRYPOINT [ "/app/golang-rest-trial" ]