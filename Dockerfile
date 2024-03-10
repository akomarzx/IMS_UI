#Build Stage
FROM node:21-alpine3.18 as build
WORKDIR /app
COPY ./ims_ui/package*.json ./
RUN npm install
COPY ./ims_ui/ .
RUN npm run build

#Deployment Stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]