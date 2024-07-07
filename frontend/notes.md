Next.js: Server side rendering

hot reloading - rarely need to kill terminal and restart it

Routing::::
localhost:pppp/<pagename>
You can see the sell page at localhost:7777/sell
Wow! Next.js manages the routing on its own!!! <3
Default route - index.js

server-rendered, ie, if you go to a nextjs website and view page source on it (in production), you can see the entire html for the rendered out production version. Good for SEO and will render it out if someone has JS turned off or someone scrapes the page or google crawls the page.
when it gets to the client (ie browser) then react will come and "rehydrate" it on the frontend and make it a react application. that's gonna give us really slick page transitions, ie it doesn't reload the page on clicks, just swaps out the content that we see.

{props.children} -- will render the child components of that component.
In React, children of a component are passed to it as props.children by default. This allows you to create components that can wrap other components or content.
Can destructure props as { children } in the functional component's argument.
```
export default function Page({ children }) {
    // in case no other props are passed 
}
```
propTypes -- used with Typescript

-------------------------
Do I have to go into each component and wrap its intro para tag inside <Page>?
Is there a way to have each `page` automatically wrapped inside it, like a preset template?

YES!

In next.js there are 2 special files which allow us to get access to 
1 - everything inside of the BODY
2 - evthing in the HEAD of the document

Special stuff in next.js --
a. you must have a pages directory with your pages in it
b. if u wanna control anything a little higher than the Page component you can do it in `pages/_app.js` file.
_app.js shows what to do!

        Note: gotta do a refresh after adding the _app.js or _document.js for changes to show up!

        Page.js has the page definition. It'll always render an h2 intro and then the respective page content (ie children of the page)

        _app.js says any component page will be rendered as <Page><Component itsProps></Page>
        So the render of a page like sell will show the Page's definition followed by the component page's stuff

c. custom html document layout - `pages/_document.js`
need a custom doc to do custom html attributes and the ability to stick our css inside of the head

-------------------------------------
Putting the Header Text (Sick Fits) inside a <a href="/"> while cause page refresh on each click. 
But what we want is to move from page to page as fast as poss w/o having to refresh the entire page.
NextJS uses a combination of HTML5 push state (changing the URL) AND the ability to trigger a rerender of the page on URL change.
So instead of using the traditional <a href> tag, we'll use <Link href> tag from nextjs

SEXY STUFF - 
multi-line editing in vs code!
(ref Nav.js)
write 4 words in separate lines
bring cursor to beginning of first line first word
cmd+opt+down to select all 4
start typing <Link href="
shift+opt+right to select the entire word
cmd+c copy the word
right arrow
type ">
cmd+v paste the word
shift+opt+left to select word again
left arrow to come to start of the word
shift+right to select the first char
ctrl+opt+u (added key binding to turn to uppercase!!!!)

!!!!!!!!!!!!!

Anytime you wanna link to sth that is part of your website, use the <Link> tag.
wanna link to sth that is outside of your website, use a regular <a>

Note::: Use class instead of function in _document because the project is using a version of next that might not support function. We'll see if it breaks.

--------------------------------------
Styled Components: CSS in JS
Scoped CSS

define all CSS in components as well
can use JS values inside CSS

create an h1 component with the styles already attached to it rather than giving it a class and writing styles there.
that would immediately scope all of those styles to that h1

* var is to create a variable in css.
`var(--nameOfVariable, fallbackValueOfVariable)`

Right now, there's a flicker showing base styles on refresh. Will be fixed using server-side rendering.


Global Styles: for basic stuff like colors fonts sizing etc which u want set globally.
Use GlobalStyles API in Page.js

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```
*, *:before, *:after {
  box-sizing: inherit;
}
```
*, *:before, *:after: This is a CSS selector that targets all elements (*), as well as their :before and :after pseudo-elements.

box-sizing: inherit: This sets the box-sizing property of the selected elements to inherit.

Inheritance: By setting box-sizing: inherit, you're telling all elements (*) and their :before and :after pseudo-elements to inherit the box-sizing property from their parent element. This creates a consistent box-sizing behavior across the entire document.

Global Consistency: Typically, developers will set a box-sizing value on the root element (like html or body), and then use this rule to ensure that all elements inherit that value. 

This helps to avoid common issues with width calculations and ensures a more predictable layout behavior.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~