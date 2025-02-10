# Weather App - React & Tailwind CSS

<img width="899" alt="Image" src="https://github.com/user-attachments/assets/0ebdbe60-0dba-4bda-94ff-2ca3bd17d43e" />

This is a weather app built using **React** and **Tailwind CSS**. The app fetches real-time weather data and a 4-day forecast from the OpenWeatherMap API.

## Features

- Display current weather and forecast for the next 4 days.
- Built with **React** and styled using **Tailwind CSS**.
- Responsive design that works on both desktop and mobile devices.
- Search functionality to check the weather of any location.

## Setup Instructions

To get the project up and running locally, follow these steps:

### 1. Clone the repository

Open your terminal and run the following command:

```bash
git clone https://github.com/yourusername/weather-app-react-tailwind.git
cd weather-app-react-tailwind
```

### 2. Install Dependencies

Run the following command to install all the required dependencies:

```bash
npm install
```

### 3. Create a `.env` File

In the root directory of the project, create a `.env` file and add your **OpenWeatherMap API Key** like this:

```bash
VITE_API_KEY=your-api-key-here
```

You can obtain an API key by signing up at [OpenWeatherMap](https://openweathermap.org/).

### 4. Run the Development Server

Start the development server using the following command:

```bash
npm run dev
```

This will start the app locally on your machine.

### 5. Open the App

Once the server is running, open your browser and navigate to:

```bash
http://localhost:5173
```

You should see the app running locally!

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **API**: OpenWeatherMap API
- **Build Tool**: Vite
- **Version Control**: Git

## Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Forecast.jsx
│   │   └── Weather.jsx
│   ├── App.jsx
│   └── main.js
├── .env
├── package.json
└── README.md
```

## Contributing

Feel free to fork the repository and contribute! If you find any issues or want to suggest new features, please create a pull request or open an issue.

---

### About the Developer

I am a **Frontend Developer** and a **React Enthusiast** with a passion for building clean, responsive, and user-friendly applications. I am constantly learning new technologies and am excited to contribute to open-source projects. If you're interested in working together or have any feedback, don't hesitate to reach out!
