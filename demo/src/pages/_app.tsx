import "src/styles/globals.css";
import '@playbooks/interface/dist/styles.css';
import '@playbooks/interface/dist/fa-icons';
import { InterfaceProvider } from '@playbooks/interface/context';
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const Favicon = '/favicon.ico';

  // Render
  return (
    <InterfaceProvider meta={{
      type: '',
      favicon: Favicon,
      photo: '',
      title: 'Playbooks | Interface Library',
      description: 'Lorem ipsum...',
      author: '@playbooks-xyz',
      siteUrl: process.env.next_PUBLIC_WEB_DOMAIN,
      allowRobots: true
    }}>
      <Component {...pageProps} />
    </InterfaceProvider>
  )
}

export default App;