# FitLog — Workout Planner

A responsive workout library and daily planner built with Next.js and React. Explore exercises, build today's plan, and save workouts for later.

[Live demo](https://fitlog-workout-planner.vercel.app/) · [Source code](https://github.com/shanajtech/fitlog-workout-planner)

## Highlights

- Search workouts by name or muscle group and sort by duration, calories, or rating.
- Explore exercise details, equipment, difficulty, sets, reps, and step-by-step instructions.
- Add up to five workouts to today's plan, mark exercises as done, and remove them.
- Save workouts for later with live navigation counters and toast feedback.
- Review planned exercise totals, minutes, and calories.
- Keep plans and saved workouts after refresh using browser localStorage.
- Browse layouts for mobile, tablet, and desktop, with loading states and a custom 404 page.

## Built with

Next.js App Router, React, JavaScript, Tailwind CSS, React Context API, and React Toastify.

## Run locally

Install a Node.js version compatible with the Next.js version in `package.json`, then:

```bash
git clone https://github.com/shanajtech/fitlog-workout-planner.git
cd fitlog-workout-planner
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm start` | Serve a completed production build |

## Pages and data

- **Workout library:** `/`
- **Workout details:** `/workouts/[id]`
- **Today's plan:** `/my-plan`
- **Workout API:** [FitLog API](https://api.abcz.workers.dev/api/fitlog)

The workout library depends on the external API being available. Plans and saved workouts stay in the current browser; they are not synchronized to an account or database.

## Portfolio focus

API-driven interfaces, reusable React components, shared state, browser persistence, and interactive planning workflows.
