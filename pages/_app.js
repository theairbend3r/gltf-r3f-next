// pages/_app.js
import GlobalStyles from "./../components/GlobalStyles";

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
);

export default App;
