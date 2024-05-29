# Tomato Food Delivery
<br/>

## Table of Contents  

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Demo](#demo)
- [Technologies - Librairies](#technologies-librairies)
- [Installation](#installation)
<br/>

## Introduction

Welcome to our full-stack food delivery website, a modern and intuitive platform built with React.js, MongoDB, Express, and Node.js, integrated with Stripe 
for seamless payments. This comprehensive application allows users to explore diverse menus, create accounts, log in, and manage their orders conveniently 
within their cart. Additionally, an admin panel is provided for efficient food management operations, such as adding and listing all available dishes. 
The entire system is backed by a robust MongoDB database, ensuring secure and reliable data storage and retrieval. Dive in to experience a seamless food 
ordering and management experience.

<br/>

## Project Structure

1 - Backend:
- The server-side logic and database interactions, built with Node.js, Express, and MongoDB.
- Handles API calls, processing requests and sending responses, ensuring seamless communication between the client and server.
- Data storage and management are efficiently handled using MongoDB, ensuring robust and scalable data persistence.
- Utilizes Nodemon for automatic server restart during development, improving efficiency and speeding up the development process.
  
2 - Frontend:
- The client-side user interface, developed with React.js, where users interact with the application.
- Users can browse menus, place orders, create accounts, log in, and view their orders in the cart.
- Contains various pages such as Home, Cart, My Orders, Place Order, and Verify.
- Includes multiple components like ExploreMenu, FoodDisplay, FoodItem, Navbar, LoginPopup, and more, providing a dynamic and interactive user experience.
- Uses Vite as the build tool, offering a faster and leaner development experience with rapid hot module replacement and optimized production builds.
  
3 - Admin Panel:
- A specialized interface within the application for administrative tasks.
- Allows admins to manage food items, view and process orders, and perform other essential operations to maintain and update the food delivery system.
- Ensures that administrative users have the tools they need to efficiently oversee and control the platform, ensuring smooth and effective operations.
<br/>

## Demo

https://github.com/AnthonyAssayah/food-delivery/assets/92322613/203b041b-fa41-4283-a462-4833793bd3f4


| Admin - Add | Admin - List | Admin - Orders  |
| --- | --- | ---  |
| ![Admin - Add](https://github.com/AnthonyAssayah/food-delivery/assets/92322613/5fbca89d-9cd4-4347-98d0-3058b8b265d5)  | ![Admin - List](https://github.com/AnthonyAssayah/food-delivery/assets/92322613/5d82b081-af33-4814-9fdb-5389535d6b73)| ![Admin - Orders](https://github.com/AnthonyAssayah/food-delivery/assets/92322613/0152ec69-b157-4f62-a1e5-d2eace3c4f04)
<br/>

## Technologies-Librairies
<br/>
**express**: A fast and minimalist web framework for Node.js used to build the backend API, handling routing, middleware, and server-side logic.

**mongoose**: An ODM (Object Data Modeling) library for MongoDB, facilitating schema-based data modeling and interaction with the MongoDB database.

**axios**: A promise-based HTTP client used for making API calls to communicate between the frontend and backend of the application.

**react-router-dom**: A routing library for React that allows the creation of navigation and dynamic routing within the application, providing a seamless user experience across different pages.

**react-toastify**: A library for displaying notifications and alerts within the React application, enhancing user feedback with customizable toasts.

**bcrypt**: A library for hashing passwords, used in the backend to securely store and verify user credentials during account creation and login processes.

**cors**: A middleware for Express to enable Cross-Origin Resource Sharing, allowing the backend server to handle requests from different origins, including the frontend.

**dotenv**: A module that loads environment variables from a .env file into process.env, ensuring sensitive information like API keys and database credentials are securely managed.

**jsonwebtoken**: A library to create and verify JSON Web Tokens (JWTs), used for secure user authentication and authorization in the application.

**stripe**: A library for handling payment processing, enabling secure and seamless transactions within the application.

**validator**: A library for validating and sanitizing strings, used to ensure that input data from users is correctly formatted and safe to use.


## Installation

Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

 - Git
 - Node.js
 - npm 

1- Cloning the Repository

```
    https://github.com/AnthonyAssayah/food-delivery.git
```
2- Installation

Install the project dependencies using npm in both ```frontend```, ```backend```and ```admin``` folders:

```
npm install
```
3-Set Up Environment Variables

Create a new file named .env in the root directory of your project and add the following content:

```
JWT_SECRET=""
STRIPE_SECRET_KEY=""
```

Replace the placeholder values with your actual secret keys. Ensure that these keys are kept secure and not exposed publicly. If you don't have a JWT secret yet, generate a secure random string for it. For Stripe, you can obtain the secret key by signing up on the Stripe website and creating an API key.

4- Run the server and the frontend

```
C:\Users\Desktop\food-del\backend>npm run server
C:\Users\Desktop\food-del\frontend>npm run server
```
Open http://localhost:5173 in your browser to view the project.

