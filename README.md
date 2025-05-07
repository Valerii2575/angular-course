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

## Introduction to TypeScript

- Variable declaretion
- Function parameters
- Optional chaining
- Nullish coalescing
- Classes
- Modules

### Variable parameters

When we wants to combine variables, we can use the **spread parameter** syntax, uses the ellipsis **(...)**

```
const category = 'Computing';
const categories = ['Gaming', 'Multimedia'];
const productCategories = [...categories, category];
```

### Function parameters

Functions in JavaScript are the processing machines we use to analyze input, digest information, and apply the neccessary transformations to data.

```
function addToCard(productId, quantity = 1){
    const product = {
        id: productId,
        qty: quantity
    };
}
```

### Nullish coalescing

Nullish coalescing is related to providing a default value when a variable is not set.

```
const quantity = qty ?? 1;
```

Its helps us make our code readable and smaller.

### Classes

Classes allow as to structure our application code and create instances of each class.
A class can have property members, a constructor, methods, and property accessors.

```
class User {
    firstName = '';
    lastName = '';
    #isActive = false;

    costructor(firstName, lastName, isActive = true){
        this.firstName = firstName;
        this.lastName = lastName;
        this.#isActive = isActive;
    }

    getFullname(){
        return `${this.firstName} {this.lastName}`;
    }

    get active(){
        return this.#isActive;
    }
}
```

A class can also extend members and functionality of other classes appending the extends keyword.

### Modules

Modules allow us to separate our application code into single files, enforsing the Single Responsibility Pattern.
Each file is a different module concerned wich a specific feature or functionality.

### Getting start with TypeScript

The TypeScript language is an npm package that can be installed from the npm registry

** npm install -g typescript **

Command ** tsc app.ts ** to compile the TypeScript file into JavaScript
The transpilation process will create an app.js file in the same folder.

Types of TypeScript:

- String 
    ````
        const product: string = 'Keyboard' 
    ```

- Boolean 
    ``` 
        const isactive : boolean = true 
    ```

- Number 
    ``` 
        const price: number = 100 
    ```

- Array 
    ```
        const categories : string[] = ['Computing', 'Multimedia'];
        const categories : Array<string> = ['Computing', 'Multimedia'];
    ```

- any
    ```
        let order : any;
        function setOrderNo(){
            order = '0001';
        }
    ```

- Custom type
    Custom type are an excellent way to add types with a finite number of allowed values

    ```
    type Category = {
        computing : string,
        multimedia: string
    }
    ```
- Functions
- Classes
    ```
        export class User {
            firstName : string = '';
            lastName : string = '';
            private isActive : boolean = false;

            costructor(firstName: string, lastName: string, isActive: boolean = true){
                this.firstName = firstName;
                this.lastName = lastName;
                this.isActive = isActive;
            }

            getFullname(): string{
                return `${this.firstName} {this.lastName}`;
            }

            get active(): boolean{
                return this.isActive;
            }
        }
    ```
    Another great feature is related to classes is the *instanceOff* keyword.

    ```
        class Customer etends User {
            taxNumber: number;

            constructor(firstName: string, lastName: string){
                super(firstName, lastName);
            }
        }

        Create object outside of the class that can be of both the User and Customer type:

        const account: User | Customer = undefined;

        if(account instanceOff Customer){
            const taxNo = account.taxNumber;
        } 
        else {
            const name = account.getFullName();
        }
    ```
    TypeScript classes help us write well-structured code, can be instantiated,  
    contain business logic, and provide static typing in our application.

- Interfaces
    An interface is a code contract that defines a particular schema.

    ```
        interface Product {
            name: string;
            price: number;
            getCategories: () => string[];
        }
    
        class Keyboard implements Product{
            .....
        }
    ```
    We can also use interfaces to change type of a variable from one type to another, called type casting.
    ```
        const product = {
            name: 'Keyboard',
            price: 20
        } as Product;
    ```

- Generics
    Generics are used when we want to use dynnamic types in other TypeScript artifacts, such as methods.

    ```
        function save<T>(data: T){
            localStorage.setItem('Product', Json.stringify(data));
        }

        save<Product>({
            name: 'Microphone',
            price: 20,
            getCategories: () => ['Peripherals', 'Multimedia']
        });
    ```
    Generics are often used in collections becouse they have similar behavior, regardless of the type.

- Utility types

    Utility types are types that help us to derive new types from existing ones.
    The Partial type is used when we want to create an object from an interface where all its
    properties are optional.

    ```
        const mic: Partial<Poduct> = {
            name: 'Microphone',
            price: 67
        };
    ```




