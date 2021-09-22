# Vaadin Experimental Projects (Monica6)
Main Branch is initialized with *Vite* as `npm init vite`, *tsconfig.json* modified for *Lit* compatibility (no ESNext target).
*ESLint* added as dev dependency, *Lit 2.0* installed. *Servor* and *fix* scripts are configured in *package.json*.
- Then initialized the folder for git with Visual Studio Code command `Git: Initialize Repository` 
- Commit the files to the local repo
- and then publish to GitHub with clicking the cloud icon on the bottom left corner next to the master branch name.

## Vaadin App Layout Basic Sample 
This is the remake of [Vaadin's App Layout Samples](https://vaadin.com/docs/latest/ds/components/app-layout) in branch *monica02applayout*
- I had to downgrade TypeScript from 4.4 to 4.3 because of some weird typing issues in the Vaadin library: `npm i -D typescript@4.3` 
- `npm i @vaadin/vaadin-app-layout @vaadin/vaadin-icons @vaadin/vaadin-tabs` These three packages were enough.

## Vaadin Todo Tutorial 
In branch *monica01todo*
