#Build Stage
FROM node:21-alpine3.18 as build
WORKDIR /app
COPY ./ims_client/package*.json ./
RUN npm install
COPY ./ims_client/ .
RUN npm run build

#Deployment Stage
FROM nginx:alpine
COPY --from=build /app/dist/ims_client/browser /usr/share/nginx/html/ims
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
