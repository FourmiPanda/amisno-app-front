FROM nginx:alpine

RUN apk add --no-cache curl bash

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Add the application's jar to the container
ADD dist/amisno-app-front /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

# Run the jar file
ENTRYPOINT exec nginx -g 'daemon off;'
