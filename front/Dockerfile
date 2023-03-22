FROM nginx:latest

# install curl
RUN apt update -y && apt install curl -y 

# install node 16 (hopefully)
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash
RUN apt update -y &&  apt install nodejs -y 

RUN mkdir /tmp/impro-workdir
WORKDIR /tmp/impro-workdir
COPY . .
RUN npm install
RUN npx ng build --configuration=production 
RUN cp dist/front/* /usr/share/nginx/html
