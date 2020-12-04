# Step 1: Build the app in image 'builder'
FROM node:12.8-alpine AS builder

WORKDIR /usr/src/app
COPY . .
RUN yarn && yarn build

# Step 2: Use build output from 'builder'
FROM nginx:stable-alpine
LABEL version="1.0"

COPY nginx.conf /etc/nginx/nginx.conf
COPY certs/privkey.pem /etc/nginx/privkey.pem
COPY certs/fullchain.pem /etc/nginx/fullchain.pem

WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/ayni-ui/ .

# docker build -t nginx-ayni -f Dockerfile .
# docker run -p 9000:443 nginx-ayni