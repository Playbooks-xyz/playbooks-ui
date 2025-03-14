# Overview
 An interface library for Playbooks

## Prerequisites
- React
- Next
- Font Awesome
- Tailwind

## Quickstart
- npm install
- npm install -g yalc
- npm start
- switch to project
- yalc add @playbooks/interface (simulates NPM)
- yalc remove @playbooks/interface (when finished)

## Usage
- npm install @playbooks/interface
- add `import '@playbooks/interface/dist/styles.css' to app entry point;
- then `import { Accordion } from '@playbooks/interface/accordions';
- or `import { Accordion } from '@playbooks/interface';

## Deployment
- npm version [major|minor|patch]
- npm run build
- npm publish
- npm run git

## Setup Husky
- npm run husky
- create .husky/pre-commit
- add `npm run clean`