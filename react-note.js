/**
 * Node
 *
 * package.json
 * package-lock.json
 * node_modules
 *
 * webpack - bundler
 * babel -  transpiler
 *
 * npx - execute the command, create the resources using the package, remove the package
 * create-react-app
 *
 * React
 *
 * component based architecture
 * DOM rendering optimization - virtual DOM
 * one way data flow - predictable
 *  app -> navbar/sideNav/content -> buttons/text
 *
 *
 * .jsx -> javascript
 * .tsx -> typescript
 *
 * react -> handles component logic, provides APIs -> virtual DOM
 * react-DOM -> render components to actual DOM
 * react-native-DOM
 *
 *
 * react 16.8 -> functional components, hooks
 *
 * class components
 *
 * how to trigger component rerender
 * 1. state update
 * 2. props update
 * 3. forceUpdate() // don't use this
 *
 * children prop
 *
 * key prop
 *
 * virtual DOM
 * a representation of components, a copy of the actual DOM
 *
 * when there is an update, react will use diffing algorithm to compare the previous version of the virtual DOM with the updated version of the virtual DOM, identify the differences
 *
 * once the differences are identified, react will do the minimal changes to the actual DOM
 *
 * react will not reload the entire page -> SPA
 *
 * reconciliation: the process of 1. render new virtual DOM 2. diffing 3. mark what needs to be updated 4. apply changes to actual DOM
 *
 *
 *
 *                                 hoc                                        hook
 *
 * what     function that returns a class component         function that returns values
 * how                 class/functional, wrapper                       functional, use directly
 * debugging            harder                                          cleaner
 *
 *
 *
 *
 * Typescript
 *
 * superset of Javascript
 * Provides static typing to Javascript
 *
 * maintainability, readability, scalability
 *
 * allow developers to write better code
 *
 *
 *
 * Redux
 *
 * redux-core: base
 * react-redux: connect redux with react
 * redux-toolkit: modern redux code
 *
 * FLUX: pattern, architecture
 * unidirectional data flow
 * view -> action -> reducer -> store
 *
 */
