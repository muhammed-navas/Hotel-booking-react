# FROM node:alpine

# #Install some dependencies

# # RUN npm install -g yarn

# WORKDIR /usr/app
# COPY ./ ./
# # COPY ./yarn.lock ./
# # COPY ./tsconfig.json ./
# RUN npm install
# # COPY ./ ./

# # Set up a default command
# CMD [ "npm","run","dev" ]

# FROM node:alpine
 FROM node:19.5.0-alpine

# #Install some dependencies

# # RUN npm install -g yarn

# WORKDIR /usr/app
# COPY tsconfig.json ./
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .

# # Set up a default command
# CMD [ "npm","run","dev" ]

WORKDIR /app
COPY package.json .
RUN npm install
# copy all files
COPY . .
CMD ["npm", "run", "dev", "--debug"]