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

https://github.com/AnthonyAssayah/food-delivery/assets/92322613/203b041b-fa41-4283-a462-4833793bd3f4


| Admin - Add | Admin - List | Admin - Orders  |
| --- | --- | ---  |
| ![Admin - Add](https://github.com/AnthonyAssayah/food-delivery/assets/92322613/5fbca89d-9cd4-4347-98d0-3058b8b265d5)  | ![Admin - List](https://github.com/AnthonyAssayah/food-delivery/assets/92322613/5d82b081-af33-4814-9fdb-5389535d6b73)| ![Admin - Orders](https://github.com/AnthonyAssayah/food-delivery/assets/92322613/0152ec69-b157-4f62-a1e5-d2eace3c4f04)
