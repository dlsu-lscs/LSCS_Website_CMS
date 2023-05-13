# Use Node v16 LTS on top of Alpine Linux
FROM node:16-alpine

# [CHACHED] Set the working directory to `/lscs_website_cms`
WORKDIR /lscs_website_cms

# [CACHED] Copy the package.json and yarn.lock files to the container at `/lscs_website_cms`
COPY package.json yarn.lock ./

# [CACHED] Install yarn globally
RUN npm install --global yarn

# [CACHED] Install Gridsome globally
RUN yarn global add @gridsome/cli
# or use npm: npm install --global @gridsome/cli

# [CACHED] Install dependencies
RUN yarn install

# Copy the current directory contents into the container at `/lscs_website_cms`
COPY . .

# Expose port 8080
EXPOSE 8080

CMD ["yarn", "dev"]