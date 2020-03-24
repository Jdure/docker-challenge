#get node image
FROM node:12-alpine

#make the folder
WORKDIR /app

#copy the files to include inside node, express, pg app in the container
COPY . /app
COPY package.json /app

#prepare to run the node, express, pg, app 
RUN npm install

#run commands
CMD ["npm", "start"]