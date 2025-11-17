    # Use a Node.js base image
    FROM node:20-alpine As builder

    # Set the working directory inside the container
    WORKDIR /app

    # Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    # Copy the rest of the application code
    COPY . .

    RUN npm run build


    # Use a Node.js base image
    FROM nginx:alpine

    # Copy package.json and package-lock.json (or yarn.lock) to leverage Docker cache
    COPY --from=builder /app/dist /usr/share/nginx/html

    # Copy the rest of the application code
    EXPOSE 5173

    CMD ["nginx", "-g", "daemon off;"]