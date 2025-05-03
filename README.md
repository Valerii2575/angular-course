# angular-course

## CLI command
- ng [command] [options]

commands:

- new (n) - creates a new Angular CLI workspace from scratch
- build (b) - compiles an Angular application and outputs generated files in a predefined folder
- generate (g) - create new files that comprise an Angular application
- serve (dev) - builds an Angular application and serves it using a pre-configured web-server
- test (t) - runs the unit tests
- add - install an Angular library
- update - update an Angular application to the latest Angular version

## Creating new project

run the command

-  ng new [name_App]
When finished, it will have created folder called [name_App]
Angular CLI downloads and installs all necessary packages and create default files for Angular application.

The workspace contains various folders and configuration files that the Angular CLI needs to build and test the application:

- .vscode - includes VSCode configuration file;
- node_modules - includes installed npm packages that need to develop and run the application;
- public - contains static assets such as fonts, images, and icons;
- src - source files of the application;
- .editorconfig - defines coding styles for the default editor;
- .gitignor - specifies the filesand folders that Git should not track;
- angular.json - the main configuration file of the Angular CLI workspace;
- package.json, package-lock.json - provide defenitions of npm packages, along with their exact version;
- README.md - that is automatically generated from the Angular CLI;
- tsconfig.app - a TypeScript configuration that is specific to the application;
- tsconfig.json - a TypeScript configuration that is specific to the Angular CLI workspace;
- tsconfig.spec - a TypeScript configuration that is specific to unit tests of the Angular app.

run command - ng serve
The Angular CLI compiles the project and start a web server that watches for changes in project files.

## The structure of an Angular application

Expand the src folder
- app - all the Angular-related files of the application;
- index.html - the main HTML page of the application;
- main.ts - the main entry point of the application;
- style.css - CSS styles that apply globally to the application.

app folder contains next files:

- app.component.css - CSS styles specific to the simple page;
- app.component.html - HTML content of the simple page;
- app.component.spec.ts - unit tests for the simple page;
- app.component.ts - defines the presentation logic  of the simple page;
- app-routing.modules.ts - defines the routing configuration of the Angular app;
- app.module.ts 

### Bootstrapping

The startup method of Angular application is called bootstrapping, and it is defined in the main.ts file
and define the components that will be loaded at application startup

```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

```