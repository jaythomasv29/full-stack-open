# Full Stack Open Progress

## Part 0 — Fundamentals of Web Apps

**Status:** ✅ Completed
**Date Completed:** August 24, 2026
**Time Spent:** 1.5 hours

### Completed

- Reviewed the fundamentals of how web applications communicate between the browser and server.
- Reviewed HTTP requests and responses.
- Reviewed traditional web application behavior.
- Reviewed Single Page Application (SPA) behavior.
- Completed the required sequence diagrams using Mermaid syntax.

### Exercises

- ✅ 0.4 — New note
- ✅ 0.5 — Single page app
- ✅ 0.6 — New note in Single page app

### Key Takeaways

I can distinguish between the request flow of a traditional web application and a Single Page Application.

For a traditional form submission:

`Form submit → POST request → server saves data → redirect → browser reloads resources`

For an SPA:

`JavaScript handles the interaction → data is sent to the server → UI updates without a full page reload`

I also gained more practice reading browser/server interactions and representing HTTP request flows using Mermaid sequence diagrams.

In a traditional web application, user actions such as submitting a form typically send a request to the server, which processes the data and then redirects the browser to another page. The browser reloads the HTML and may also request supporting files such as CSS, JavaScript, and updated data before displaying the new page.

In a Single Page Application (SPA), JavaScript running in the browser handles much of this interaction directly. Instead of reloading the entire page, the browser can send data to the server in the background, receive a response, and update only the necessary parts of the user interface. The key difference is that traditional applications rely more heavily on full page reloads and server-driven navigation, while SPAs use client-side JavaScript to provide a faster, more dynamic experience without refreshing the whole page.

---

## Part 1 — Introduction to React

**Status:** ✅ Completed
**Date Completed:** August 27, 2026
**Time Spent:** ~4 hours

### Completed

- Learned the fundamentals of React components.
- Practiced passing data between components using props.
- Worked with JavaScript objects and arrays inside React applications.
- Used `map` to dynamically render collections of components.
- Used `reduce` to calculate derived values from collections.
- Learned how React state works with the `useState` hook.
- Built event handlers for user interactions.
- Practiced updating state based on previous state.
- Learned the importance of immutable state updates.
- Practiced lifting state and determining where state should live.
- Used derived values instead of storing unnecessary duplicate state.
- Built applications with multiple pieces of state.
- Practiced conditional rendering.
- Learned how React re-renders components in response to state changes.
- Completed the Course Information, Unicafe, and Anecdotes exercises.

### Exercises

#### Course Information

- ✅ 1.1 — Course information, step 1
- ✅ 1.2 — Course information, step 2
- ✅ 1.3 — Course information, step 3
- ✅ 1.4 — Course information, step 4
- ✅ 1.5 — Course information, step 5

#### Unicafe

- ✅ 1.6 — Unicafe, step 1
- ✅ 1.7 — Unicafe, step 2
- ✅ 1.8 — Unicafe, step 3
- ✅ 1.9 — Unicafe, step 4
- ✅ 1.10 — Unicafe, step 5
- ✅ 1.11 — Unicafe, step 6

#### Anecdotes

- ✅ 1.12 — Anecdotes, step 1
- ✅ 1.13 — Anecdotes, step 2
- ✅ 1.14 — Anecdotes, step 3

### Key Takeaways

Part 1 introduced the core mental model behind React: the user interface is a function of application state. Components receive data through props, state changes cause React to re-render, and event handlers allow users to change that state.

I gained experience breaking applications into reusable components, deciding where state should live, passing functions between components, rendering collections with `map`, calculating derived data with `reduce`, and updating state without directly mutating existing values.

The Course Information exercises focused on component structure and passing data through props. Unicafe introduced state, event handling, statistics, and conditional rendering. Anecdotes combined these concepts by working with multiple pieces of state, voting, selecting data, and determining the anecdote with the most votes.

---

## Current Status

**Full Stack Open**

**Part 0:** ✅ Complete — 1.5 hours
**Part 1:** ✅ Complete — ~4 hours

**Completed exercises:** 0.4–0.6 and 1.1–1.14

**Total time invested:** ~5.5 hours

**Next:** Part 2 — Communicating with Server
