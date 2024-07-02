## Overview
This is a React Vite web app template project for Mile Hi Labs.


## Prerequisites
- Git
- Node
- NPM
- Cert Files
- Env Files


## Quick Start
- add cert files
- npm install
- npm start
- visit localhost:4200 (or locally provisioned domain)


## Local Certs
- brew install mkcert
- mkdir certs
- cd certs
- mkcert www.project.local localhost
- add www.project.local to your host file
- Update env file with path to cert


## Deployment
Deployment pipelines automatically run when we merge into staging or production branches.
- Code storage is handled by Github
- CI / CD pipeline is handled by Buddy
- Cloud computing is handled by Digital Ocean.
- Each server is responsible for building & deploying the application separately.


## Testing



## Notes


#### ESLint
- https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
- https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin


#### Tailwind
Tailwind has specific needs / instructions
https://tailwindcss.com/docs/guides/create-react-app


#### React Spring
- https://react-spring.io/
- https://blog.logrocket.com/animations-with-react-spring/


#### Vite
- https://vitejs.dev/
- https://vitejs.dev/guide/
- https://vitejs.dev/guide/cli.html
- https://vitejs.dev/guide/troubleshooting.html


#### Rollup
- https://rollupjs.org/introduction/
- https://rollupjs.org/troubleshooting/


## Author
- Eric Hubbell
- eric@erichubbell.com
