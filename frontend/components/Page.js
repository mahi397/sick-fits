import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2'); // absolute URL referencing static file
    font-weight: normal;
    font-style: normal;
}
html {
  --red: #ff0000;
  --black: #393939;
  --grey: #3a3a3a;
  --gray: var(--grey);
  --lightGrey: #e1e1e1;
  --lightGray: var(--lightGrey);
  --offwhite: #ededed;
  --maxWidth: 1000px;
  --bs: 0 12px 24px 0 rgba(0,0,0,0.09); // box-shadow
  box-sizing: border-box; // The width and height properties (and min/max properties) include the content, padding, and border, but not the margin.
}
*, *:before, *:after { 
  box-sizing: inherit;
}
body {
  font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
}
a {
  text-decoration: none;
  color: var(--black);
}
a:hover {
  text-decoration: underline;
}
button {
  font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; // have to set again because body font does not apply to buttons...
}
`;

export default function Page({ children, cool }) {
  return (
    <div>
      <GlobalStyles /> {/** simply inject the component */}
      <Header />
      <h2>I am the page component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
}
/** for error that comes up in props argument */
Page.propTypes = {
  cool: PropTypes.string,
  // children: PropTypes.arrayOf(PropTypes.node), --- if we want multiple nodes as the children
  children: PropTypes.any,
  /* --- better alternative cause children can be anything! */
};
