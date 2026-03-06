# Portfolio Website

Personal portfolio website built using **React (Vite)**.  
This website showcases my academic background, projects, and experience in **Machine Learning, Deep Learning, Computer Vision, and Data Science**.

## Features

- Brittany Chiang inspired layout
- React based frontend
- Project popup with image carousel
- GitHub / LinkedIn / Email links
- Responsive design
- Easily extendable project list

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Project Structure

```
portfolio
│
├── public
│   ├── images
│   │   ├── profile.jpg
│   │   └── projects
│   │        └── project_name
│   │            ├── img1.png
│   │            └── img2.png
│   │
│   └── resume.pdf
│
├── src
│   ├── components
│   ├── data
│   ├── styles
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

The application will start at:

```
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

This will create a production build inside:

```
dist/
```

## Deployment

This project can be deployed using **GitHub Pages**.

Install deployment dependency:

```bash
npm install gh-pages --save-dev
```

Deploy:

```bash
npm run deploy
```

The website will be available at:

```
https://yourusername.github.io/portfolio
```

## Updating Projects

Projects can be updated by modifying:

```
src/data/projects.js
```

Add project images to:

```
public/images/projects/
```

Then redeploy the website.

To redeploy,
git add .
git commit -m "update portfolio"
git push

and then

npm run build
npm run deploy
## Author

Akshay Raj M  
M.Tech Data Science and Artificial Intelligence  
IIT Tirupati