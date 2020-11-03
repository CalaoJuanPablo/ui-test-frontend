# Rules of Thumbs.

This is the solution of a technical test provided by [Zemoga](https://www.zemoga.com/). It is a simple voting app to choose weather you are in favor or against some public figures.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This repository contains the frontend and the backend of the project. API was built with [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) and uses [MongoDB](https://www.mongodb.com/) for the database.

## Stack

#### For development

- NextJS
- SASS
- Typescript
- NodeJS
- MongoDB
- Redux [(@redux-toolkit)](https://redux-toolkit.js.org/)

#### Deployment tools

- Vercel
- MongoDB Atlas

#### Additional utilities

- ESLint
- Prettier
- Husky, lint-staged

## Demo

- [Development environment](https://rule-of-thumb-git-develop.calaojuanpablo.vercel.app/)
- [Production environment](https://rule-of-thumb.vercel.app/)

## Run locally

1. Clone the repo

```bash
git clone git@github.com:CalaoJuanPablo/ui-test-frontend.git
```

2. Change to project directory

```bash
cd ui-test-frontend
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open in browser

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

`database` directory contains all the related files for the database connection and CRUD operations.

I designed a logo for the app. The logo is in `public/assets/logo/rules-of-thumbs-logo.svg`
![logo](public/assets/logo/rules-of-thumbs-logo.svg)

All frontend code (besides the pages routes) is in `src` directory.

All routes inside `pages/api` are the API routes.

The bottom votes percentage bar does not render until the first vote up or down (See Mark Zuckerberg card on Production environment).
