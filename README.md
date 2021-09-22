# Vaadin Experimental Projects (Monica6)
Main Branch is initialized with *Vite* as `npm init vite`, *tsconfig.json* modified for *Lit* compatibility (no ESNext target).
*ESLint* added as dev dependency, *Lit 2.0* installed. *Servor* and *fix* scripts are configured in *package.json*.
- Then initialized the folder for git with Visual Studio Code command `Git: Initialize Repository` 
- Commit the files to the local repo
- and then publish to GitHub with clicking the cloud icon on the bottom left corner next to the master branch name.

## Vaadin Todo Tutorial 
This is a remake of the [Vaadin Quick Start Tutorial](https://vaadin.com/docs/latest/fusion/tutorials/quick-start-tutorial) in branch *monica01todo* The main ide is to remove the Java server parts and mimic the server communication with a mock.
- The tutorial starts with downloading a [fusion-tutorial](https://start.vaadin.com/?preset=fusion-tutorial&dl) zip.
    - I copied th vaadin-todo folder from the zip into a folder then I ran *mvnw* from that folder.
- As a first step, I copied the content from *vaadin-todo/frontend* into my projects *src*
    - Since vaadin uses webpack, the *src/index.html* has no explicit reference to the *index.ts*. I don't need this index.html, and I renamed it to index_origfromvaadintodo.html.
    - This app used a router, I installed it `npm i @vaadin/router`
    - Then I renamed the original main.ts to main_origfrommonica6.ts, and I renamed index.ts to main.ts, VSC automatically updated the references to index.ts in generated/vaadin.ts and views/main-layout.ts
    - views/view.ts required @adobe/lit-mobx so I installed `npm i @adobe/lit-mobx` and I corrected some typings and the reference to the *../generated/theme.js*
    - views/main-layout.ts imports @vaadin/vaadin-app-layout so I installed that module, too `npm i @vaadin/vaadin-app-layout`
- After changing a number of files, not that hard, I managed to compile and build the application but when I strted I received
**Uncaught ReferenceError: Cannot access 'routes' before initialization at main.ts:7** 
So, at this stage I gave up this branch.
