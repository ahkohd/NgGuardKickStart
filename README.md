# NgGuardKickStart 🚀🔥
A simple boilerplate to demo Angular's Router, Guards.
I created this angular boilerplate to kick start my angular projects.

## ✨ Features
- Angular router is set up
- Route guards are set up
- Rolebased guards are set up (Admin & User)
- Simple example of Route parameter

# 🛣 Routes
- `/` redirects to `/home`
- `/home`- Homepage of the app
- `/login` - If user is logged in, it redirects Users back to `/dashboard`
- `/dashboard` redirects to `/dashboard/home`
- `/dashboard/home` - Dashboard home (Both User and Admin can view)
- `/dashboard/admin` -  Admin specific dashboard
- `/dashboard/products/:id`
- `/404` - 404 page 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
