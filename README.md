# Shapla CSS

Apply helper classes to almost any element, in order to alter their style.

> This document is incomplete. Fell free to improve this document.

## Why?
We need some prebuild components that are easy to customize and easy to manage.
Most of the components are modified version from [Bulma](https://bulma.io) and [Material Design Lite](https://getmdl.io) 
components. We use these css class to build React, Vue and Web components.

## Features

* Easy color customization via SCSS or CSS custom property.
* All elements/components are exported via SCSS mixin, so you can use only what you need.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

### Installation

```
npm install --save shapla-css
```

### Usage

#### Color Theme Customization
```scss
// file style.scss
@use "shapla-css/src/index.scss" as shapla with (
  $color--primary: #00d1b2;
  $color--secondary: #9c27b0;
  $color--success: #48c774;
  $color--error: #f14668;
  $color--warning: #ffdd57;
);

@include shapla.button;
@include shapla.checkbox;
@include shapla.data-table;
// include other components as your requirement 
```

# List of Components

**Elements**: do not have nested element. Mostly one css class with modifier css class.
* Box Shadow
* [Button](/src/elements/button/README.md)
* Cross/Delete Icon
* Icon Container
* Image Container

**Components** have multiple nested element.
* [Chip](/src/components/chip/README.md)
* [Dashboard](/src/components/dashboard/README.md)
* [Data Table](/src/components/data-table/README.md)
* [Dropdown](/src/components/dropdown/README.md)
* File Uploader
* [Modal](/src/components/modal/README.md)
* Notification
* Pagination
* Popover
* Progress Bar
* [Sidenav](/src/components/sidenav/README.md)
* Spinner
* [Tabs](/src/components/tabs/README.md)
* Toggles
* Tooltip

**Grid System**
* [Columns](/src/grid/README.md)

**Form Elements**
* [Checkbox](/src/form/checkbox/README.md)
* Radio
* Search
* Select
* Range Slider
* Star Rating
* Switch
* Text Field

**Utilities**
* Screen Reader Only
* Mini reset
