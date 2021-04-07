FROM httpd:latest

RUN apt-get update && apt-get install -y git sudo wget gnupg

RUN wget --quiet -O - https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo apt-key add -


RUN echo "deb https://deb.nodesource.com/node_15.x buster main" | sudo tee /etc/apt/sources.list.d/nodesource.list

RUN echo "deb-src https://deb.nodesource.com/node_15.x buster main" | sudo tee -a /etc/apt/sources.list.d/nodesource.list

RUN apt-get update && apt-get install -y nodejs

RUN git clone https://github.com/kikiklang/pomme-page /usr/share/pomme-page

RUN npm install -g parcel-bundler

WORKDIR /usr/share/pomme-page/

COPY startup.sh .

RUN npm install

EXPOSE 80

CMD ./startup.sh
