import '../styles/globals.css';
import { useEffect } from 'react';

const createUserGuidingScript = () => `
  YOUR_USERGUIDING_CONTAINER_CODE
`;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    try {
      window.eval(createUserGuidingScript());
      window.userGuiding.identify(`test_foo`);
    } catch (e) {
      // no-op
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
