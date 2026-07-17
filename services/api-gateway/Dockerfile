# Use Node.js 22 LTS on Alpine Linux
FROM node:22-alpine

# Create the application directory
WORKDIR /usr/src/app

# Copy only dependency manifests first
COPY package*.json ./

# Install exactly the locked dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Document the listening port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
