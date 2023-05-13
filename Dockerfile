# Use Node v16 LTS on top of Alpine Linux
FROM node:16-alpine

# Set the working directory to `/lscs_website_cms`
WORKDIR /lscs_website_cms

# Copy the current directory contents into the container at `/lscs_website_cms`
COPY . .

# Install yarn globally
RUN npm install --global yarn

# Install Gridsome globally
RUN yarn global add @gridsome/cli
# or use npm: npm install --global @gridsome/cli

# Install dependencies
RUN yarn install

# Expose port 8080
EXPOSE 8080

CMD ["yarn", "dev"]