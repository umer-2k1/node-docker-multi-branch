# Use Node 20 alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock first
COPY package*.json ./
# Install dev dependencies too, needed for tsc
RUN yarn install

# Copy all source files
COPY . .

# Build TypeScript
RUN yarn build

# Expose port
EXPOSE 3000

# Run compiled app
CMD ["yarn", "start"]
