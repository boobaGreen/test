# Backend API

This project demonstrates the creation of an Express.js API that interacts with smart contracts to fetch data such as balances and owner addresses.

## Installation and Usage

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   MORALIS_API_KEY=your_moralis_api_key
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Run the tests:
   ```bash
   npm test
   ```

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

### Modifying `package.json`

To include the test script, add the following to your `package.json` file:

```json
"scripts": {
  "test": "jest"
}
```

## Project Structure

- `routes/claudio_api.js`: Defines the routes for the new API.
- `routes/index.js`: Added my new endpoint to the index of the protected area of the project.
- `controllers/ClaudioController.js`: Contains the logic for fetching data from smart contracts.
- `tests/claudio_api.test.js`: Contains tests for the new API routes.

## Routes

### Claudio API

- **GET /**: Returns a welcome message.
- **GET /balances/:address**: Returns the balance of the given address.

## Example Usage

```bash
curl http://localhost:3000/claudio_api
curl http://localhost:3000/claudio_api/balances/0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326
```

## Challenges and Learnings

### Using Moralis

I chose to use Moralis for fetching data from the blockchain because I noticed a pre-configured API key in the `.env` file. Although I had never used Moralis before, I took the opportunity to explore its documentation and understand its high-level features. I found Moralis to be a powerful tool for blockchain interactions, especially for medium to large projects. However, I also noted that the free tier has limited API calls, which is something to consider for scaling.

### Route Integration

Initially, I added my route directly to `server.js`, but it did not integrate well with the rest of the project. After further analysis, I decided to add it to `index.js` to ensure it followed the project's organization and authorization flow. This change made the route function correctly and integrate seamlessly with the existing structure.

### Testing

I created simple tests using `supertest` to verify the functionality of my new routes. These tests helped ensure that the routes were working as expected and provided valuable debugging information.

## Conclusion

This project provided a valuable learning experience, particularly in integrating new tools like Moralis and ensuring proper route management within an Express.js application. The challenges faced and overcome have strengthened my understanding of API development and testing.
