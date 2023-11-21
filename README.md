# Journee Frontend Coding Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![userflow.png](public%2Fassets%2Freadme%2Fuserflow.png)

![typography.png](public%2Fassets%2Freadme%2Ftypography.png)

![desktop.png](public%2Fassets%2Freadme%2Fdesktop.png)

![task.png](public%2Fassets%2Freadme%2Ftask.png)

![mobile-landing.png](public%2Fassets%2Freadme%2Fmobile-landing.png)

## Things I fixed

- Initially the app didnt run. I had to fix it to run properly.
- Designed a user flow diagram using Figma - illustrating the desired and expected user flow and actions required for an expected user objective outcome. 
- Designed and conceptualised the UI in Figma.
- Reworked the ToDo App that was initially broken.
- Added additional and missing functionality in the ItemList.tsx.
- Fixed the Redux Reducer and Actions files to implement new functionality and fix existing functionality.
- I implemented a basic flex layout that displays well across all devices.
- Used basic media queries to ensure all devices have conditional logic to ensure they display correctly.
- Added a Basic Layout & OffCanvas system.
- Added Meterial UI Icons to the ToDo App.

## Things I would still like to do

- Abstract out the styled components into their own files
- Add ESlint and Prettier to improve the developer experience.
- Update the package libraries
- Improve the Build process
- Setup Storybook
- Add styled components setup as a macro through webpack.
- Add a styled system for theming. Add a flexbox styled components library like rebass or something. Or more specifically add styled system as a enterprise level design system styled components react implementation.
- Re-work redux to rather use context api or recoil.
- Rework the component library to rather use atomic based components.
- Create HOC layout components using hooks and react Functional components.
- Add in Sentry or some sort of Javascript debugging environment.
- Add in an Error Boundry component.
- Create more dynamic components using more flexible props.

## Requirements

- Node.js v16

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
