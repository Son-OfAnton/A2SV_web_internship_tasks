# Profile Card App

A simple React app built with TypeScript and Vite that displays profile cards with information about users. This app utilizes core React concepts such as components, props, state, and JSX.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Start the development server by running `npm run dev`.

The app should now be running on `http://localhost:5173`.

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the source code for the app.
  - `components/`: Contains reusable components used to display the profile cards.
  - `data/`: Contains dummy data for the profile cards.
  - `App.tsx`: The main component that renders the profile cards.
- `public/`: Contains static images.

## Components

The app is broken down into the following reusable components:

- `Card`: Renders a profile card with user information.
- `Avatar`: Displays the user's avatar image.
- `Info`: Displays the user's name, bio, and website (if available).

## Data

The app uses dummy data for the profile cards. You can find the data in the `data/` directory, where each profile is represented by an object with properties like `name`, `bio`, `avatar`, and `website`.

## Styling

The app is styled using CSS. The main styling file is `App.css`, located in the root directory.

## Features

- Display profile cards with user information.
- Conditionally show the website only if it exists.
- Beautiful styling with a clean and modern design.

