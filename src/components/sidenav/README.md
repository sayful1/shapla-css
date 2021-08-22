## Introduction

Simple side navigation.

## Usages

&nbsp;1. Basic structure. To make sidenav active, add class `is-active` to the `shapla-sidenav` container. To change
sidenav position, add css class `shapla-sidenav--{POSITION}` replacing `{POSITION}` with `left`, `right`, `top`
or `bottom`.

```html

<div class="shapla-sidenav shapla-sidenav--left" style="--shapla-side-navigation-width:300px">
  <div class="shapla-sidenav__background"></div>
  <div class="shapla-sidenav__body">
    <div class="shapla-sidenav__content">
      <!-- Nav Content -->
    </div>
  </div>
</div>
```
