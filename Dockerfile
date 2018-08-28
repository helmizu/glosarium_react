# build environment
FROM node:8 as builder
RUN ["mkdir", "-p", "/app"]
WORKDIR /app
COPY . .
RUN ["rm", "-rf", "node-modules"]
RUN ["rm", "-rf", "build"]
RUN ["npm", "install"]
RUN ["npm", "run", "build"]

# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]