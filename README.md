# Overview
 An interface library for Playbooks

## Prerequisites
- React
- Next
- Font Awesome
- Tailwind

## Quick start
- npm install @playbooks/ui

## Installation
Wrap your application with the <InterfaceProvider /> and make sure to pass in the `@playbooks/theme` or a separate theme of your choosing.

```tsx
# _app.tsx

import { AppProps } from 'next/app';
import * as theme from '@playbooks/theme';
import '@playbooks/ui/styles.css';
import { InterfaceProvider } from '@playbooks/ui/context';

const App = ({ Component, pageProps }: AppProps) => {

	// Render
	return (
		<InterfaceProvider meta={meta} theme={theme}>
      <Component ssr={pageProps} {...contexts} />
		</InterfaceProvider>
	);
};

export default App;
```

## Usage
Import the components you want to use and compose from there.

```tsx
import { Accordion, AccordionBody, AccordionText, AccordionTitle, AccordionToggle } from '@playbooks/ui/accordions';
import { Span } from '@playbooks/ui/html';
import { FarIcon } from '@playbooks/ui/icons';

const FaqAccordion = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  // Methods
  const onToggle = () => setOpen(!open);

  // Render
  return (
    <Accordion open={open} border='border' borderRadius='rounded-md' spacing='mb-4'>
      <AccordionToggle size='' open={open} onClick={onToggle} borderRadius='' spacing='p-6'>
        <Span display='flex-start' space='space-x-4'>
          <FarIcon icon='circle-question' fontSize='text-lg' />
          <AccordionTitle fontSize='text-base'>{title}</AccordionTitle>
        </Span>
      </AccordionToggle>

      <AccordionBody open={open} spacing='px-4 py-6' animate>
        <AccordionText>{text}</AccordionText>
      </AccordionBody>
    </Accordion>
  )
}

export { FaqAccordion }
```


## Optionals
- Google Maps

## Development
- git clone
- npm install
- npm install -g yalc
- npm start
- switch to project
- yalc add @playbooks/ui (simulates NPM)
- yalc remove @playbooks/ui (when finished)

## Deployment
- npm version [major|minor|patch]
- npm run build
- npm publish
- npm run git

## Setup Husky
- npx husky init
- add `npm run clean` to `.husky/pre-commit.sh`