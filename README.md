# JeBouquine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##Integration javascript
import main.js execute le fichier immediatement alors que script  src=main.js non.
dons attention au erreur  undefined ou null
attention à l ordre des fichier js ,ca peut génerer beaucoup d'erreur
ne faire import js que quand le fichier sera  utiliser par le component


## css
introduire les fichiers css dans le cli d'angular ne sert a rien ,
il faut les importer dans le styles.css du projet angular @import url("csspath")

##font 

j'ai telecharger monterrat j 'ai copier ses fonts dans mon dossier fonts