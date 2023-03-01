FROM node:slim

# copy project
COPY . /usr/src/app/

# set work directory
WORKDIR /usr/src/app/

# install dependencies
RUN npm install

# run the project
EXPOSE 8080
ENTRYPOINT npm run start