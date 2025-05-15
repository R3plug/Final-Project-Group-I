# Password Manager 
The Password manager will build on the provided user management and authentication project provided. The core fucntionality includes allowing users to add remove and change passwords and store those passwords which are stored in MongoDB Atlas.

## Roadmap
* password sharing
* adding friends
* groups for shared passwords
* password complexity suggestions
* password generator
* password change history

## Project Presentation

## Project Breakdown

### Initial Implementation

#### Models
* Update User
* Password

#### Views
* Change provided views to match new site
* All passwords view

#### Partials
* Individual passwords view

#### Controllers
* Password controller

#### Middleware
* Update Error Handling

#### Routes
* Add password routes

## Project Structure(future)

```
.
├── app.js                     # Application entry point
├── controllers/               # Route controllers
│   ├── authController.js      # Authentication logic
│   ├── userController.js      # User-related logic
|   └── passwordController.js  # Password-related logic
├── middlewares/               # Custom middleware
│   ├── auth.js                # Authentication middleware
│   ├── error-handler.js       # Error handling middleware
│   └── locals.js              # Template locals middleware
├── models/                    # Database models
│   ├── User.js                # User model with password hashing
|   └── Password.js            # Password model with encryption
├── public/                    # Static assets
│   ├── css/
│   ├── js/
│   └── images/
├── routes/                    # Express routes
│   ├── auth.js                # Authentication routes
│   ├── index.js               # Public routes
│   ├── user.js                # Protected user routes
|   └── password.js
└── views/                     # EJS templates
    ├── partials/              # Reusable template parts (header, footer, etc.)
    ├── auth/                  # Authentication templates
    ├── user/                  # User-related templates
    └── password/              # Password-related templates
```
## Contributions:




### Brosil Bajracharya:
Redesigned the header section and nav bar. Added hover effect and active class stage to let the user know which webpage they are using. Rebuilt the design in passwords page, adding multiple transparent layers. Also maintained the consistent space with in the elements.  Vertically realigned field elements in the table. Relocated the button and, added design and transition. Also, added the slight touch of border. All these things made the page really attractive. Added a menu button on the right side which will allow to either edit or delete the data and will also reflect on the front and back end on the real time. When user clicks on the edit, the field insertion display will pop up with preloaded respective datas. Then made the website more mobile friendly. The layout of the table datas will change on the mobile view to display the data in a better way. Also, same with the header bar, if there is not enough space then the menu icon will replace the nav elements and they are all available with in the menu icon on the right which will pop up on click. Added necessary HTML elements, CSS and JS functions to deliver excellent user experience.


### Jonathan Pacheco:








### Phillip Davis:
Mostly worked on the backend. Setup the Atlas account, Create the password route, model, and controller for get and post. Created the skeleton for list.ejs to test the backend to the database. Also worked on encrypting the passwords in the database, but was not able to get the implementation to work. Setup the client side form validation






### Tyler Duong: 
Setting up the render.com account and server to deploy the web app. Mostly worked on the list.ejs file, which is the password page for the website. Within this added the functionality to the “add new” button, which created a darkened overlay and pop-up to show, allowing you to fill out the form to submit a “website, email, and password”. I created the cancel button within the popup to change both the overlay and the popup to display: none. Needed help on creating an updated format, and was able to get help from Brosil. Did the CSS and JS necessary for this as well. Tried my best to keep the team on top of things and communicated as efficiently as possible.





## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd user-authentication-template
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   cp .env.example .env
   ```

4. Modify the `.env` file with your configuration:
   ```
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/auth_template
   SESSION_SECRET=your_secure_secret_key
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000`