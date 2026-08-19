FROM nginx:alpine
COPY devops.html /usr/share/nginx/html/index.html
EXPOSE 80
