## About The Project

- [Qwik School](https://qwikschool.com/)
- [Builder - Performance Insights](https://www.builder.io/c/performance-insights)
- [Twitter - shai_reznik](https://twitter.com/shai_reznik)
- [Twitter - mhevery](https://twitter.com/mhevery)
- [qwik-intro-app](https://github.com/hirezio/qwik-intro-app)

&nbsp;

---

&nbsp;

## Why Qwik

- **User Experience**
  - Waiting for the app to **load**
  - Waiting for the app to **respond**
  - Time spent on redoing work
- **Developer Experience**
  - Structure
  - Do more with less
  - Simple to understand

```
  ┌───────────────────────────────────────────────────────────────┐
  │              Web Development Evolution Timeline               │
  └───────────────────────────────────────────────────────────────┘

Static Pages                 ┌─────────────┐
                             │    1990s    │
                             └──────┬──────┘
                                    │
                                    │
                                    │
Dynamic Pages (MPA)          ┌─────────────┐
                             │  Late 1990s │
                             └──────┬──────┘
                                    │
                                    │
                                    │
MPA + JS                     ┌─────────────┐
                             │ Early 2000s │
                             └──────┬──────┘
                                    │
                                    │
                                    │
RIA                          ┌─────────────┐
                             │  Mid-2000s  │
                             └──────┬──────┘
                                    │
                                    │
                                    │
SPA                          ┌─────────────┐
                             │    2010s    │
                             └──────┬──────┘
                                    │
                                    │
                                    │
HYBRID                       ┌─────────────┐
                             │    2020s    │
                             └──────┬──────┘
                                    │
                                    │
                                    │
IWA (Instant Web Apps)       ┌─────────────┐
                             │    2020s    │
                             └─────────────┘
```

1. **Static Pages:** Simple, non-interactive websites with fixed content written in plain HTML, used in the early days of the web.
2. **Dynamic Pages (MPA):** Introduced server-side scripting to create personalized, interactive web experiences (e.g., PHP, ASP, JSP). Examples include online forums and e-commerce sites.
3. **MPA + JS:** Added JavaScript to enhance user experience with client-side interactivity, making partial page updates possible. Examples include AJAX-powered forms and simple web apps.
4. **RIA:** Rich Internet Applications provided desktop-like experiences in web browsers using technologies like Adobe Flash and Silverlight. Examples include online games and multimedia platforms.
5. **SPA:** Single Page Applications focused on seamless user experiences by relying heavily on JavaScript and avoiding full-page reloads. Examples include Gmail and Trello.
6. **Hybrid:** Combined the best aspects of MPAs and SPAs, using server-side rendering for initial page loads and client-side rendering for subsequent interactions. Examples include Next.js and Nuxt.js.
7. **IWA (Instant Web Applications):** Web applications that emerged in the 2020s, offering fast, responsive user experiences similar to native apps by utilizing progressive web app (PWA) technologies.

- [Google Web Vitals](https://web.dev/vitals/)
- SEO Ranking
- Customer Satisfaction
- Conversions

&nbsp;

---

&nbsp;

## What makes Qwik different

- **SPA**
  - **Build:** Optimizing using static tree shaking
  - **Server:** Empty `index.html` needs to run JavaScript
  - **Client:** Rendering using the the downloaded JavaScript
- **SSR + Hydration**
  - **Build:** Same as SPA
  - **Server:** Send rendered html to client but user cannot interact with it
  - **Client:** Hydration gives the interactivity but it can be expensive

&nbsp;

- **Lazy Loading:** Route chunking at build stage using code splitting by route
  - Manual import so that the bundle knows how to split it up
- **Resumability:** JavaScript streaming using Qwik
  - **Build:**
    - Same as the other two
    - But code splitting using closure chunking using Qwik optimizer (build time tool)
  - **Server:**
    - Qwik render can pause to take a snapshot (Store in the html)
    - Hydration needs to replay (rebuilding) to handle state
    - Context and information required
      - Components Boundaries
      - Event Listeners
      - Page's App State
    - **Dynamic Tree Shaking** using pointers (URLs)
  - **Client:**
    - Prefetching/ buffering all the interaction points using service worker and store chunks in browser cache
    - Lazy execution using Qwik loader to load JIT using the browser cache stored

&nbsp;

---

&nbsp;

- Static and dynamic tree shaking are techniques used in the optimization process of bundling JavaScript applications. Tree shaking is the process of eliminating dead or unused code from the final bundle. This not only reduces the overall size of the application but also helps improve performance. Let's compare the two approaches:

1. **Static Tree Shaking:**
   - Static tree shaking is the more common and widely used approach. It relies on the static analysis of the codebase to identify and eliminate dead code. This technique makes use of ES6 modules and their import/export statements. Since the import and export statements are statically analyzable, build tools like Webpack and Rollup can easily identify which parts of the code are being used and which are not. Any unused code is then eliminated from the final bundle.
   - **Pros:**
     - More effective in reducing bundle size, as it analyzes the entire codebase.
     - Compatible with popular build tools like Webpack and Rollup.
     - Works well with ES6 modules and their import/export statements.
   - **Cons:**
     - Limited to the capabilities of static analysis, meaning it might not be able to identify some cases of dead code.
     - May not work effectively with code that has side effects or dynamic imports.
2. Dynamic Tree Shaking:
   - Dynamic tree shaking, on the other hand, relies on runtime analysis to identify and eliminate dead code. This approach tracks the usage of code during the execution of the application and removes the unused portions. Dynamic tree shaking can be more accurate in identifying dead code, but it comes with performance overheads due to runtime analysis.
   - **Pros:**
     - Can potentially identify more cases of dead code, as it analyzes code usage during runtime.
     - Can work with code that has side effects or dynamic imports.
   - **Cons:**
     - Less popular and not as well-supported as static tree shaking.
     - Performance overhead due to runtime analysis.
     - Not as effective in reducing the initial bundle size, since the elimination of dead code happens during runtime.

- In conclusion, static tree shaking is the more popular and widely used technique due to its effectiveness in reducing bundle sizes and compatibility with modern build tools. Dynamic tree shaking, although potentially more accurate in identifying dead code, comes with performance overheads and is not as well-supported.

&nbsp;

---

&nbsp;

- `npm create qwik@latest`
- `npx qwik add`

```tsx
// `$` indicates the lazy loading boundary for both the optimizer and developers
// Lazy loading boundary means it is asynchronous
// 2 `$` means each closure will get extracted into its own file
export default component$(() => {
  return <div>Llamas</div>;
});
```

- [The dollar $ sign](https://qwik.builder.io/docs/advanced/dollar/)

```js
// Setup mock server using vite
// Copy to `vite.config.ts`
// `npm i --save-dev vite-plugin-simple-json-server` if required
// `http://localhost:5173/api/beers`
import jsonServer from 'vite-plugin-simple-json-server';
jsonServer({ delay: 500, mockDir: 'mock-server' });
```

&nbsp;

---

&nbsp;
