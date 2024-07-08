# playbooks-interface
 An interface library for Playbooks

## Prerequisites
- React
- Next
- Tailwind

## Quickstart
- npm start
- or `npm run build && npm run build:ts`

## Development
- npm install -g yalc
- yalc publish @playbooks/interface
- Go to consuming application
- yalc link @playbooks/interface
- yalc add @playbooks/interface (simulates NPM)
- yalc remove @playbooks/interface (when finished)

## Usage
- npm install @playbooks/interface
- add `import '@playbooks/interface/dist/styles.css' to app entry point;
- then `import { Accordion } from '@playbooks/interface/accordions';
- or `import { Accordion } from '@playbooks/interface';