# API Test Suite with Playwright

## Overview
This project implements an API test suite using Playwright, a Node.js library for browser automation. The test suite includes various test cases for CRUD operations on a booking system API.
The name of API is **"restfull-booker"**

## Installation
To run the tests, follow these steps:
1. Clone this repository to your local machine.
2. Install Node.js if you haven't already.
3. Install dependencies by running `npm install`.

## Requirements
- Node.js
- npm
- Playwright
- faker-js

## Folder Structure
- **Pojo**: Contains the `BookingDataGenerator` class for generating mock booking data.
- **Request**: Includes modules for making HTTP requests (`GET`, `POST`, `DELETE`, `PUT`, `PATCH`) and generating authentication tokens (`AuthToken`).
- **Validator**: Contains the `Validation` class for validating API responses.
- **Test**: Houses the test files with test cases for various API operations.

### Files
- **bookingGenerator.ts**: Generates mock booking data using the `faker-js` library.
- **authToken.ts**: Implements the `generateAuthToken` function to obtain authentication tokens.
- **getRequest.ts, postRequest.ts, deleteRequest.ts, putRequest.ts, patchRequest.ts**: Implement functions for making GET, POST, DELETE, PUT, and PATCH requests respectively.
- **validation.ts**: Provides functions for validating API responses.
- **apiTests.spec.ts**: Contains the main test suite with test cases for CRUD operations on the booking API.

## Conclusion
This project demonstrates how to implement an API test suite using Playwright in TypeScript. It covers various aspects such as generating mock data, making HTTP requests, handling authentication, and validating responses.

## Learning
Through this project, I gained practical experience in:
- Setting up and configuring Playwright for API testing.
- Writing test cases for CRUD operations on RESTful APIs.
- Handling authentication and authorization in API testing.
- Validating API responses and asserting expected behavior.
