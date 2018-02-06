# Electron + React + TypeScript

## Develop

To start app: 
```
npm run start:process
```

To start renderer layout: 
```
npm run start:renderer
```

First recommended start renderer layout.

## Build

To build whole app: 
```
npm run build:app
```

To build only renderer layout:
```
npm run build:renderer
```

After build app in project root folder will be created 2 folders:
- build (contains builded layout and js app entry)
- Electron app-*\*your arch and sys\** (contains .exe file and libs on Windows | only app on MacOS | app and libs on Linux)

## Tests

To run unit tests:
```
npm run tests:unit
```
**If you want testing with renderer layout - start renderer layout first!**

To run unit acceptance tests:
```
npm run tests:e2e
```

