FROM node:buster

RUN apt-get update && apt-get install -y apache2

RUN git clone https://github.com/kikiklang/pomme-page /usr/share/pomme-page

RUN npm install -g npm@7.8.0 parcel-bundler

WORKDIR /usr/share/pomme-page/

COPY startup.sh .

RUN npm install

EXPOSE 80

CMD ./startup.sh
