FROM node:14.15.4-alpine3.12

RUN apk --update --no-cache add bash

# usuario root
RUN npm install -g @nestjs/cli@8.0.0

# novo usuario
USER node

# diretorio de trabalho
WORKDIR /home/node/app

# copiando arquivos locais para o conatainer no /home/node/app
COPY . .