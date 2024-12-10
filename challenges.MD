/\*\* main.jsx

- Challenge 1: set up the BrowserRouter and Routes!
- Note: nothing will render to the page yet.
  \*/

/\*\* main.jsx

- Challenge 2:
- 1.  Create an "About" component (just render another h1 that says
- "About page" or something more interesting of your choosing).
- 2.  Create a new Route to render the About component when the path
- is /about
  \*/

/\*\*

- Challenge 3:
- Bootstrap the VanLife project by creating the first 2 routes:
- Home and About.
-
- Also include the navbar that can link between the two routes.
- For now, you'll either need to copy/paste the navbar code
- to both Home and About pages, or you'll need to find a place
- to put it where it can be shared between the two pages.
- (Don't overthink this part - just do whatever is easiest for
- you because we'll learn a better approach very soon)
-
- Review challenge: do all the CSS yourself based on the design
- linked in the slides.
  \*/

  /**
 * Challenge 4: Create the Vans list page, Route, and Link
 * 
 * 1. Create a Vans component in the "pages" directory. For now,
 *    just render <h1>Vans page goes here 🚐</h1>
 * 2. Create a Route for the Vans page on the /vans route
 * 3. Add a Link in the nav bar to the Vans route
 */

/**
 * Challenge 5: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */

 /**
 * Challenge 6: Wrap the contents of the "van-tile" div in a 
 * Link that sends the user to `/vans/${van-id-here}`.
 */