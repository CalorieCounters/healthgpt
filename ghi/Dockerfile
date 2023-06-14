# Use an official Node.js runtime as a parent image
FROM node:18

ENV REACT_APP_SAMPLE_SERVICE_API_HOST="https://healthgpt-production.up.railway.app"
# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm i

RUN npm install -g serve

# Copy the rest of the application code to the container
COPY . /app

# Expose port 3000 for the server to listen on
EXPOSE 3000

RUN npm run build

# Start the server using npm start
CMD ["serve", "-s", "build"]
