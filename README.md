# Structure of the Scheduler

angular-app/
│── src/
│   ├── app/
│   │   ├── core/                # Core module (Singleton services, global components)
│   │   │   ├── guards/          # Route guards
│   │   │   ├── interceptors/    # HTTP interceptors
│   │   │   ├── services/        # Global services
│   │   │   ├── core.module.ts   # CoreModule definition
│   │   │   ├── http.service.ts  # Centralized HTTP service
│   │   │   ├── auth.guard.ts    # Example: Authentication guard
│   │   ├── shared/              # Shared module (Reusable components, pipes, directives)
│   │   │   ├── components/      # Shared UI components (e.g., buttons, modals)
│   │   │   ├── pipes/           # Custom pipes
│   │   │   ├── directives/      # Custom directives
│   │   │   ├── shared.module.ts # SharedModule definition
│   │   ├── features/            # Feature modules (Lazy-loaded modules)
│   │   │   ├── home/            # Example: Home feature module
│   │   │   │   ├── components/  # Home-specific components
│   │   │   │   ├── pages/       # Home pages
│   │   │   │   ├── home.module.ts
│   │   │   │   ├── home-routing.module.ts
│   │   │   ├── auth/            # Authentication module (Login, Register)
│   │   │   ├── dashboard/       # Example: Dashboard feature
│   │   ├── app-routing.module.ts # Main app routing
│   │   ├── app.module.ts         # Root module
│   ├── assets/                   # Static assets (images, styles)
│   ├── environments/              # Environment configs
│   │   ├── environment.ts        # Development environment
│   │   ├── environment.prod.ts   # Production environment
│   ├── main.ts                   # Entry point
│   ├── styles.scss                # Global styles
│── angular.json                   # Angular project configuration
│── package.json                    # Dependencies and scripts
│── tsconfig.json                    # TypeScript config

# Scheduler

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
