# Vaadin Experimental Projects (Monica6)

Application from main branch is on [Azure](https://polite-bay-067491603.azurestaticapps.net/) 

Main Branch is initialized with *Vite* as `npm init vite`, *tsconfig.json* modified for *Lit* compatibility (no ESNext target).
*ESLint* added as dev dependency, *Lit 2.0* installed. *Servor* and *fix* scripts are configured in *package.json*.
- Then initialized the folder for git with Visual Studio Code command `Git: Initialize Repository` 
- Commit the files to the local repo
- and then publish to GitHub with clicking the cloud icon on the bottom left corner next to the master branch name.

## Mobile App Layout
This is the remake of [Vaadin's App Layout for Small Touchscreens](https://vaadin.com/docs/latest/ds/components/app-layout/#bottom-navbar-on-small-touchscreens) in branch *monica03mobileapp*
As explained on [the documentation page](https://cdn.vaadin.com/vaadin-web-components/22.0.0-alpha5/#/elements/vaadin-app-layout)
- Touch optimized - App Layout has a pseudo-slot touch-optimized in order to give more control of the presentation of elements with slot[navbar]. Internally, when the user is interacting with App Layout from a touchscreen device, the component will search for elements with *slot[navbar touch-optimized]* and move them to the bottom of the page.

## Vaadin App Layout Basic Sample 
This is the remake of [Vaadin's App Layout Samples](https://vaadin.com/docs/latest/ds/components/app-layout) in branch *monica02applayout*
- I had to downgrade TypeScript from 4.4 to 4.3 because of some weird typing issues in the Vaadin library: `npm i -D typescript@4.3` 
- `npm i @vaadin/vaadin-app-layout @vaadin/vaadin-icons @vaadin/vaadin-tabs` These three packages were enough.

## Vaadin Todo Tutorial 
In branch *monica01todo*
