This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with `TypeScript` template.

## Project in a Nutshell

This is a shopping cart build with React in TypeScript, with `redux-saga` to handle the side effect where a function return promise as Mock API. `redux` as the centralized store to keep state flows within the application. `reselect` for process/directly get the data from redux store.

## Folder Structures

```
.
├── node_modules
├── public
├── src
├── .gitignore
├── .prettierrc.json
├── package-lock.json
├── package.json
├── tsconfig.json
└── README.md
```

## Techniques

`RamdaJS`: JavaScript utils for functional programming

`Reselect`: Selector for interact with redux store.

`Redux-actions`: Create redux actions to follow [Redux-duck](https://github.com/erikras/ducks-modular-redux) structure.

`husky`: Git pre-commit and pre-push utils to keep the project consistency

`prettier`: Code formatter

## Naming Rules

`*.component.tsx`: Component actual get rendered in App.

`*.container.tsx`: Interface for redux and reselect to interact with

`*.styled.tsx`: Wrapper to keep all styled components.

`*.utils.tsx`: Pure function wrapper for process in any purpose

`*.duck.tsx`: Redux wrapper which keep both actions and reducers

`*.selector.tsx`: Where keep all selector per redux state

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
