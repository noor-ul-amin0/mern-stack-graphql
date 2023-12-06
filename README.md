# MERN Stack App with GraphQL

This is a MERN (MongoDB, Express.js, React, Node.js) stack application with GraphQL.

## Directory Structure

```
mern-stack/
|-- client/        # React App
|-- server/        # Node App
|-- package.json   # Project configuration
```

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/your-username/mern-stack.git](https://github.com/noor-ul-amin0/mern-stack-graphql.git)
   cd mern-stack
   ```

2. **Install Dependencies:**

   Run the following command to install dependencies for both the client and server:

   ```bash
   npm run setup
   ```

   This will install dependencies in the `client` and `server` directories.

3. **Setup MongoDB Connection:**

   In the `server/.env` file, provide your MongoDB connection URI:

   ```env
   MONGODB_URI=your-mongodb-connection-uri
   ```

4. **Start the Application:**

   Run the following command to start both the client and server concurrently:

   ```bash
   npm start
   ```

   - Client: [http://localhost:3000](http://localhost:3000)
   - Server: [http://localhost:5000](http://localhost:5050)

## Scripts

- **`npm run setup`**: Install dependencies for both the client and server.
- **`npm start`**: Start the client and server concurrently.

## Author

Noor Ul Amin

## Acknowledgments

- [Concurrently](https://www.npmjs.com/package/concurrently) - Used for running multiple commands concurrently.
