# Student Dashboard Application

This project is a full-stack application that presents student quizzes and announcements data for the current semester.

## Features

- **User Authentication**: Basic log-in/log-out functionality, allowing users to view the dashboard only when logged in.
- **Protected Routes**: using HOC pattern
- **Announcements & Quizzes**: Fetch and display announcement and quiz data for the current semester.
- **CRUD Operations**: Backend API supports all CRUD operations for announcements and quizzes.
- **Responsive Design**: The app is fully responsive and works on any screen size.
- **Reusable Components**: The frontend uses reusable components, making the code more maintainable.
- **Future i18n Support**: The app is ready for future internationalization (i18n) using popular packages.

## Technologies Used

- **Frontend**:
  - **React** (with TypeScript)
  - **Redux** for client state management
  - **RTK query** for data fetching and caching state management
  - **Material UI** for UI components
  - **React Router** for routing
  - **i18next** for future translation support
- **Backend**:
  - **Express.js** for the API
  - **MongoDB** for database storage
  - **Mongoose** for ODM
  - **http-errors** for Error handling
  - **zod** for validation

## Installation

```bash
git clone https://github.com/nourkhaled2650/anywareTask.git

cd ./anywareTask

npm run install

cd ./backEnd
npm start

# in another terminal
cd ./frontEnd
npm run dev

```

### Prerequisites

Make sure you have the following installed:

- Node.js >= 20
- MongoDB (or use a cloud service like MongoDB Atlas)
