FROM --platform=linux/amd64 node:current-alpine

WORKDIR /home/node

COPY setup.sh package.json package-lock.json src/ test/ *.json .

RUN chmod +x setup.sh

CMD ./setup.sh 

# npm run start
