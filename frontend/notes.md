Next.js: Server side rendering

hot reloading - rarely need to kill terminal and restart it

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

