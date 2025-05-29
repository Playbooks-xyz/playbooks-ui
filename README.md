# Overview
 An interface library for Playbooks

## Prerequisites
- React
- Next
- Font Awesome
- Tailwind

## Quick start
- npm install @playbooks/ui

## Usage
- add `import '@playbooks/ui/dist/styles.css' to app entry point;
- then `import { Accordion } from '@playbooks/ui/accordions';
- or `import { Accordion } from '@playbooks/ui';

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