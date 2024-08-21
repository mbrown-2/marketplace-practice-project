# Video Game Marketplace - Practice Project

### Goal:

A web development, programming project based on curriculum provided by [Code with Mosh](https://codewithmosh.com/). The goal of this project is to utilize various React tools to construct an application that parses [RAWG's video game API database](https://rawg.io/) and dynamically render an interactive website filled with numerous components.

The primary focus of this application is to allow the user to search through a unique catalogue of video games using either a custom input or mix of pre-determined filters. Each action will query the RAWG API and dynamically render a series of video game results. Each result can be clicked to view its respective details.

The information below includes a list of subjects and tools that were used/applied in this project, a personal roadmap of custom features I want to implement next, and installation steps should you wish to download and run the code locally.

---

### Implementation - Part 1

- <ins>Summary:</ins> Organizing the skeleton of the DOM, creating core custom components, and utilizing state objects to handle early API requests.
- <ins>Languages:</ins> HTML, CSS, JavaScript, TypeScript
- <ins>Tools:</ins> React, Vite, Bootstrap, Chakra-UI, Axios

### Implementation - Part 2

- <ins>Summary:</ins> Expanding upon the previous part by replacing/encapsulating interfaces and state objects with generic-type API request handlers and querying for dynamic fetching/rendering. Meanwhile, applying routing to navigate users between pages and caching to minimize reloading search results.
- <ins>Languages:</ins> HTML, CSS, JavaScript, TypeScript
- <ins>Tools:</ins> React Router, Tanstack Query, Zustand

---

### Personal roadmap:

- [ ] Turn "(#) reviews" into a custom component that appears as a mini pop-up modal should the user click/hover over the Metacritic badge.
- [ ] Update the webp logo in the top-right of the application (will use Figma for editing and exporting).
- [ ] Create additional Figma designs and patterns to customize the borders of the screen.
- [ ] Create custom Light Mode color scheme.
- [ ] Add translation animation to selected Genre in the Genre pane.
- [ ] Refactor spacing of content beneath image for each video game tile.
- [ ] Implement "Favorites functionality"
  - [ ] Add clickable heart emote on game tile and detail page.
  - [ ] Apply a "Favorites" dropdown component in navbar. Click/hover over to show list of favorites.
  - [ ] Click a favorite game to jump immediately to its details page.
  - [ ] Favorite tiles should have a different highlight.
- [ ] Add dynamic shadow/border highlight (still deciding what specifically) when mouse hovers over a game tile.
- [ ] Add fallback text for when 0 search results appear.
- [ ] Improve 404 Error page.

---

### How to Install and Run

Alright, so you've made it this far down the README...

### Software utilized
- Vite
- React
- Chakra-UI

### Other
- Axios
- Rawg.io (API)
- Vercel

### Languages
- Typescript
- JavaScript
- CSS
- HTML

## Part 1

### Steps for running.

1. Be sure to cd into the 'marketplace' directory before making any of the following local installations.

```
> npm i vite
> npm i axios
> npm i bootstrap
> npm i @tanstack/react-query@4.28
```

For UI components with Chakra-UI, run the following.
```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
[Click here for documentation on Chakra-UI installation + more](https://v2.chakra-ui.com/getting-started)

### Primary lessons and implementations

React hooks
- useState
- useEffect
- useRef


2. ...


## Part 2

Software utilized:
- @tanstack/react-query
- JQuery
- Zustand

Topics:
- Back-End Data Retrieval and Querying
  - useQuery
  - useInfiniteQuery
- Client-side State Management
  - Reducers
  - Contexts
  - ContextProviders

## Part 3

- Router Providers for dynamic rendering

### Key goals

- Encapsulating layers of application
  - Components : using hooks to fetch and update data
  - Custom Hooks: using HTTP services to fetch/update both data and caching
  - HTTP Services : instances of API clients required for working with objects
  - API Clients : where HTTP requests are handled and sent to the backend


## Personal Notes

For any inline comments found scattered across my code, feel free to ignore. These are merely
notes-to-self that I left behind for the case of studying/reviewing the core fundamentals and
details of my code.
