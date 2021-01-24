# vue-component-library

Vue library with tailwind based components.

## Project setup

```
npm install @justijndepover/vue-component-library
```

## PurgeCss

This project doesn't export a css file. To make sure the classes aren't purged in production add the following path to your purge configuration:
```
'./node_modules/vue-component-library/src/**/*.vue'
```

## Usage

To prevent conflicts, all components have the prefix `x`

```vue
import UI from 'vue-component-library';
Vue.use(UI);

<x-alert>Hi this is an alert</x-alert>
```

### roadmap

-   [x] x-alert
-   [x] x-button
-   [ ] x-dropdown
-   [x] x-select
-   [x] x-field
-   [x] x-text
-   [x] x-email
-   [x] x-password
-   [ ] x-date
-   [ ] x-time
-   [ ] x-datetime
-   [ ] x-daterange
-   [x] x-textarea
-   [ ] x-editor
-   [ ] x-table
-   [x] x-toggle
-   [ ] x-color-picker
