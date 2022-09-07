FROM node:18
COPY ["package.json","package-lock.json","/usr/express/app/"]
WORKDIR /usr/express/app
RUN npm install
COPY [".","/usr/express/app/"]
RUN npm run build
EXPOSE ${API_PORT}
CMD ["dist/index.js"]
ENTRYPOINT ["node"]