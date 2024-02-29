# Ravenhill vineyard management app

Hello there, this is a personnal project I am building to learn and add to my portfolio.
There is a lot to do and it is open source. I still have to figure out wich license I want to use.
But in the meantime, do or take whatever you need as long as it is not for commercial use. 

The goal of this application is to manage a vineyards.
Concepts:
- tasks
- users
- fields
  - vines
  - blocks (set of vines of the same variety in one yard)
- varieties
  
I'll do my best to add documents to outline the project scope in the `doc` folder.

Everything you need for the web-client is in `web-app`. 
It is a simple angular application that interact directly with a firestore database as of right now.
once it is functionnal, the next step will be to integrate an api that acts as a middle man between the client and the database.

## Contribute

Make sure you have @angular/cli installed 1st

`npm i` in `web-app` folder and `ng-serve` to launch the app in development. 

`src/app/modules` folders contain all the different pages/routes
*modules can contain components used only once. if it is used In another modules, move it to components*

`src/app/components` folder contain all the reused component accross the app

### TODO
  visit `web-app/TODO.md` for TODOs in the web-app.
    put `x` in the '[]' to mark a TODO as done. 

### localization
  `ng generate-i18n --output-path src/locale` to generate message.xlf
    copy `src/locale/message.xlf` and to `src/locale/message.<your locale>.xlf` to add a new locale.
    change all translation in that new file.