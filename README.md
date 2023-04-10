# Taste It

![tutorial thumbnail](src/assets/taste-it-gif.gif)

Application for searching variety of recipes, using spoonacular API. Allows for searching recipes according to diets, cuisines, meal types and also ingredients which you will type in search bar.

https://taste-it-fe2f6.web.app

## Technologies

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/Scss-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Typescript](https://img.shields.io/badge/Typescript-323330?style=for-the-badge&logo=Typescript)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## Details

- created with the Vite and Typescript
- using absolute path to files
- routing with React Router
- custom hooks for repeated actions
- css modules for styling components
- page animation by Framer Motion
- lazy loading for multiple components and for images
- responsive website design

## Information

This is my first project where i used typescript.

## Tutorial and project structure

Inside of project, you'll see the following folders and files:

```
PROJECT_ROOT
├── public              # static assets
└── src
    ├── assets          # images
    ├── components
    │   ├── bar         # main bar files
    │   ├── pages       # page files
    │   ├── UI          # reusable components
    ├── hooks           # custom hooks
    ├── models          # typescript interfaces
    ├── styles          # general styles
    └── utils           # reusable functions
```

## Starting

Download the repository to your local machine and run to download all missing dependencies:

```
npm install
```

After that you can run this project using:

```
npm run dev
```

**To manage the app content you need to create your own spoonacular API account.**

https://spoonacular.com/food-api/console#Dashboard

When you get your own api key, create .env file and type it in there in the following way:

```
VITE_API_KEY = your api key
```
