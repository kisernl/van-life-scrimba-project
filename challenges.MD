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

  /** VanDetail page
  * Challenge 7 
  part 1:
  * Re-write what I just wrote and console log the params object (note: useParams from react-router-dom)
  */

  /** APP.jsx
  * Challenge 8: set up the code so we can use a layout route!
  * 
  * 1. Create a folder called "components"
  * 2. Create 2 new component files: Layout.jsx and Header.jsx
  * 3. Move the <header> code below to the Header component file. 
  *    (DON'T import that Header component here!)
  */

  /** Layout.jsx
  * Challenge 9: get the Header working again
  */


/** App.jsx
 * Challenge 10:
 * 1. Add a "Host" link to the Navbar that takes you to the "/host" path
 * 2. Create the following components in the pages/Host folder:
 *    a. Dashboard ("/host")
 *    b. Income ("/host/income")
 *    c. Reviews ("/host/reviews")
 *    These components can just have an h1 for now that says, e.g.
 *    "Host Dashboard here".
 * 3. Set up routes for each of these pages in the Routes below. FOR NOW,
 *    don't worry about nesting anything, you can just put them on the same
 *    level as the "/vans", etc. routes below.
 */

/** App.jsx 
  Challenge 11: 
  1. Turn the "/host" path into a parent route and nest
  "/host/income" and "/host/reviews" as children routes.
  Then try entering "/host/income" in the URL and see what
  happens.
  
  2. See if you can figure out why it did what it did.
  */