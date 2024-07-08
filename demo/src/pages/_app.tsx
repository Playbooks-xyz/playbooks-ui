import "src/styles/globals.css";
import '@playbooks/interface/dist/styles.css';
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

export default App;