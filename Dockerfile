# Specify the base image
FROM node:14

# Install JDK
RUN apt-get update && apt-get install -y default-jdk

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Start the Node.js application
CMD [ "npm", "start" ]
