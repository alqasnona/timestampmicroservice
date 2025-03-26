# Timestamp Microservice

This is a simple timestamp microservice that converts between Unix timestamps and UTC date strings. It was built as part of the FreeCodeCamp API and Microservices certification.

## Features

- Convert date strings to Unix timestamps and UTC strings
- Convert Unix timestamps to UTC strings
- Get current time in both Unix timestamp and UTC string format
- Handle invalid dates with appropriate error messages

## API Endpoints

- `GET /api/:date?` - Convert a date parameter to both Unix timestamp and UTC string format
  - If no date parameter is provided, returns the current time
  - If the date parameter is a valid date string, converts it to Unix timestamp and UTC string
  - If the date parameter is a valid Unix timestamp (all digits), converts it to UTC string
  - If the date parameter is invalid, returns an error message

## Examples

- `/api/2015-12-25` returns `{"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`
- `/api/1451001600000` returns `{"unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`
- `/api` returns the current time in both formats
- `/api/invalid-date` returns `{"error":"Invalid Date"}`

## Technologies Used

- Node.js
- Express.js
- CORS middleware

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server
4. Access the API at `http://localhost:3001`

## Development

- Run `npm run dev` to start the server with nodemon for automatic restarts during development

## License

ISC
