# nodejs express api starter kit
Very basic nodejs express project starter kit. Meant as a starter for a backend/api kind of project. Mainly saved here for my own reference.

## Tech stack
- express for setting up api in nodejs
- eslint and prettier for linting
- nodemon for auto reloading server when you edit files

## Requirements
- nodejs 16.10 or higher
- run `corepack enable`

## Setup project
This project has been set up using the following commands, if cloning this you don't have to redo these, they're just here for reference.

- `yarn init -2`
- Update .yarnrc.yml to include `enableGlobalCache: true` and `nodeLinker: node-modules` if you want to use traditional node_modules folder instead of the new plug and play.
- `yarn add express`
- `yarn add --dev nodemon`
- `npm init @eslint/config`
- `yarn add --dev eslint-config-prettier eslint-plugin-prettier prettier`
- Set up prefered linting settings in .eslintrc.json, create .prettierrc.json and .prettierignore files
- Update package.json to include main and scripts.start
- Write basic express server in index.js
