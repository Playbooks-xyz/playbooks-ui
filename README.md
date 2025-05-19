# Overview
 An interface library for Playbooks

## Prerequisites
- React
- Next
- Font Awesome
- Google Maps API Key
- Tailwind

## Quick start
- npm install @playbooks/ui
-

## Development
- npm install
- npm install -g yalc
- npm start
- switch to project
- yalc add @playbooks/ui (simulates NPM)
- yalc remove @playbooks/ui (when finished)

## Usage
- npm install @playbooks/ui
- add `import '@playbooks/ui/dist/styles.css' to app entry point;
- then `import { Accordion } from '@playbooks/ui/accordions';
- or `import { Accordion } from '@playbooks/ui';

## Deployment
- npm version [major|minor|patch]
- npm run build
- npm publish
- npm run git

## Setup Husky
- npm run husky
- create .husky/pre-commit
- add `npm run clean`