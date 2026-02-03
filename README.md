# Node Docker Multi-Branch

A simple Node.js Express application built with TypeScript, demonstrating Dockerization and multi-branch configuration support.

## ❓ The Problem

Managing multiple deployment environments (like staging, production, or feature-specific branches) often leads to configuration drift. Developers frequently struggle with:

- Port conflicts between different microservices.
- Hardcoded branch-specific logic that makes the code less portable.
- Inconsistent environments between local development and production.

## ✅ The Solution

This project provides a boilerplate that solves these issues by:

- **Environment Isolation**: Uses `.env` files to manage port and branch-specific configurations dynamically.
- **Dockerization**: Standardizes the environment using Docker and Docker Compose, ensuring "it works on my machine" translates to production.
- **TypeScript Type Safety**: Prevents runtime errors related to missing or incorrect configuration.

## 🚀 Features

- **TypeScript**: Typed JavaScript for better developer experience.
- **Express**: Fast, unopinionated, minimalist web framework.
- **Docker**: Containerized application for consistent environments.
- **Environment Driven**: Configurable via `.env` files.

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)

## 🏗 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd node-docker-multi-branch
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Copy the example environment file and update the variables:

```bash
cp .env.example .env
```

Default variables:

- `PORT`: The port the server will listen on (default: `8080`).
- `BRANCH_NAME`: Custom name to identify the deployment branch.

## 🏃 Running the Application

### Local Development

To run the server in development mode with hot-reloading:

```bash
npm run dev
```

### Production Build

To build and start the production server:

```bash
npm run build
npm start
```

### Docker

To build and run the application using Docker:

#### Build Image

```bash
docker build -t node-docker-app .
```

#### Run Container

```bash
docker run -p 8080:8080 --env-file .env node-docker-app
```

### Docker Compose

To run using Docker Compose:

```bash
docker-compose up --build
```

## 📜 Available Scripts

- `npm run dev`: Starts the application in development mode using `nodemon` and `ts-node`.
- `npm run build`: Compiles TypeScript files to JavaScript in the `dist/` folder.
- `npm start`: Runs the compiled application from `dist/app.js`.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm test`: Runs the test suite using Jest.

## 📄 License

This project is licensed under the MIT License.
