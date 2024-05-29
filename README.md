# Tomato Food Delivery
<br/>

## Table of Contents  

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Demo](#demo)
- [Technologies](#technologies)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Architecture ](#architecture)

## Introduction

Welcome to our full-stack food delivery website, a modern and intuitive platform built with React.js, MongoDB, Express, and Node.js, integrated with Stripe 
for seamless payments. This comprehensive application allows users to explore diverse menus, create accounts, log in, and manage their orders conveniently 
within their cart. Additionally, an admin panel is provided for efficient food management operations, such as adding and listing all available dishes. 
The entire system is backed by a robust MongoDB database, ensuring secure and reliable data storage and retrieval. Dive in to experience a seamless food 
ordering and management experience.

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

## Demo


| Home | Menu | Cart  |
| --- | --- | ---  |
| ![Home](https://github.com/AnthonyAssayah/food-delivery/assets/92322613/42f89b66-d69a-4250-9ad5-ab7f702d0b44)  | ![Events page](https://github.com/AnthonyAssayah/AstronomicBigData/assets/92322613/566e1961-e8e2-4496-821e-426e12f44981)| ![Asteroids page](https://github.com/AnthonyAssayah/AstronomicBigData/assets/92322613/0a9c2f75-2822-432b-9c23-75feb6999dde)

| Login | Orders | Admin  |
| --- | --- | ---  |
| ![Dashboard page](https://github.com/AnthonyAssayah/AstronomicBigData/assets/92322613/91e60e04-aba6-4dd5-b95a-0c821a82c6d8)| ![Sun page](https://github.com/AnthonyAssayah/AstronomicBigData/assets/92322613/89431a96-b7f6-4d05-a892-6de0c6fbe590)  | ![Weather page](https://github.com/AnthonyAssayah/AstronomicBigData/assets/92322613/6ca92a4f-0743-41b8-baa5-66a6777c5769)
