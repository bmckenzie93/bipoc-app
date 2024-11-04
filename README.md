# BIPOC Business Directory

## Overview
The **BIPOC Business Directory** is a web application designed to showcase BIPOC-owned businesses, inspired by platforms like Zillow but geared towards promoting and supporting diverse business owners. This application allows users to browse, discover, and potentially connect with BIPOC-owned businesses within their area.

## Tech Stack
- **Front End**: React (with Vite)
- **Back End**: Laravel
- **Database**: MySQL (using MAMP for local development)
- **Hosting**: To be determined (e.g., cloud hosting for production)

## Features
- **Business Directory**: Search and view BIPOC-owned businesses in various categories.
- **User Favorites**: Logged-in users can save businesses to their favorites list.
- **Admin Panel**: Admin users can manage listings and user data.
- **Monetization**: Potential for ads, premium listings, or other revenue models.

## Project Setup

### Prerequisites
- **Node.js** and **npm** (for React and Vite)
- **Composer** (for Laravel)
- **MAMP** (for MySQL and local server setup)

### Installation

#### 1. Clone the Repository
- git clone https://github.com/bmckenzie93/bipoc-app.git
- cd bipoc-app

#### 2. Set Up the Front End
Navigate to the client directory and install dependencies:
- cd client
- npm install


#### 3. Set Up the Back End
Navigate to the server directory and install dependencies:
- cd ../server
- composer install

#### 4. Configure the Database
- Use MAMP to spin up a MySQL database, as described above.
- Copy the .env.example file in the server directory to .env
- cp .env.example .env
- Update the .env file with your database credentials (DB name, username, password).

#### 5. Run Migrations
With the database set up, navigate to the server directory and run:
- php artisan migrate

### Running the Application
#### 1. Start the front end:
- cd client
- npm run dev

#### 2. Start the back end:
- cd server
- php artisan serve
