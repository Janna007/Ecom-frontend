    # Use a Node.js base image
    FROM node:20-alpine

    # Set the working directory inside the container
    WORKDIR /app

    # Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    # Copy the rest of the application code
    COPY . .

    # Expose the port Vite typically uses for development
    EXPOSE 5173

    # Command to run the Vite development server
    CMD ["npm", "run", "dev"]