# Full Stack Open Progress

## Part 0 — Fundamentals of Web Apps

**Status:** Completed
**Date Completed:** August 24, 2026
**Time Spent:** 1.5 hours

### Completed

- Reviewed the fundamentals of how web applications communicate between the browser and server.
- Reviewed HTTP requests and responses.
- Reviewed traditional web application behavior.
- Reviewed Single Page Application (SPA) behavior.
- Completed the required sequence diagrams using Mermaid syntax.

### Exercises

- 0.4 — New note
- 0.5 — Single page app
- 0.6 — New note in Single page app

### Key Takeaways

I can distinguish between the request flow of a traditional web application and a Single Page Application.

For a traditional form submission:

`Form submit → POST request → server saves data → redirect → browser reloads resources`

For an SPA:

`JavaScript handles the interaction → data is sent to the server → UI updates without a full page reload`

I also gained more practice reading browser/server interactions and representing HTTP request flows using Mermaid sequence diagrams. In a traditional web application, user actions such as submitting a form typically send a request to the server, which processes the data and then redirects the browser to another page. The browser reloads the HTML and may also request supporting files such as CSS, JavaScript, and updated data before displaying the new page. In a Single Page Application (SPA), JavaScript running in the browser handles much of this interaction directly. Instead of reloading the entire page, the browser can send data to the server in the background, receive a response, and update only the necessary parts of the user interface. The key difference is that traditional applications rely more heavily on full page reloads and server-driven navigation, while SPAs use client-side JavaScript to provide a faster, more dynamic experience without refreshing the whole page.

---

## Current Status

**Full Stack Open**

**Part 0:** ✅ Complete
**Time invested:** 1.5 hours
**Next:** Part 1 — Introduction to React
