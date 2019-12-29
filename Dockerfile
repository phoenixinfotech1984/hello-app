FROM node:lts-alpine
LABEL maintainer="Vishal Patel"
# Timezone
RUN apk add --no-cache tzdata
ENV TZ=Asia/Kolkata
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Bundle app source
COPY . .

EXPOSE 5000
ENV PORT 5000

CMD [ "npm","start" ]