## Introduction

An interactive dropdown menu for discoverable content.

## Structure
The `shapla-dropdown` component is a container for a dropdown button and a dropdown menu.
* `shapla-dropdown` the main container
  * `shapla-dropdown-trigger` the container for a button
  * `shapla-dropdown-menu` the toggable menu, hidden by default
    * `shapla-dropdown-menu__inner` the dropdown box, with a white background and a shadow
      * `shapla-dropdown__content` the container for menu items
        * `shapla-dropdown-item` each single item of the dropdown, which can either be a a or a div
        * `shapla-dropdown-divider` a horizontal line to separate dropdown items

> The `shapla-dropdown` component has an additional modifier. `is-hoverable`: the dropdown will show up when hovering the `shapla-dropdown-trigger`

## Usages

&nbsp;1. Basic dropdown

```html
<div class="shapla-dropdown">
    <span class="shapla-dropdown-trigger">Dropdown</span>
    <div class="shapla-dropdown-menu">
        <div class="shapla-dropdown-menu__inner">
            <!-- Some other content before menu. e.g. search input-->
            <div class="shapla-dropdown-menu__content">
                <span class="shapla-dropdown-item">Item 1</span>
                <a class="shapla-dropdown-item is-link">Item 1</a>
                <a class="shapla-dropdown-item is-link is-active">Item 1</a>
                <span class="shapla-dropdown-divider"></span>
            </div>
            <!-- Some other content after menu. e.g. search input-->
        </div>
    </div>
</div>
```

&nbsp;2. **Toggable**: to control the display of the dropdown with JavaScript, add `is-active` modifier to `shapla-dropdown-menu`

```html
<div class="shapla-dropdown-menu is-active">
  <!-- Other content-->
</div>
```

&nbsp;3. **Right aligned**: You can add the `is-right` modifier to have a right-aligned dropdown.

```html
<div class="shapla-dropdown-menu is-right">
  <!-- Other content-->
</div>
```

&nbsp;4. **Dropup**: You can add the `is-up` modifier to have a dropdown menu that appears above the dropdown button.

```html
<div class="shapla-dropdown-menu is-up">
  <!-- Other content-->
</div>
```

&nbsp;4. **Scrolling**: To enable scrolling for a long list of items, you can add `has-max-items` modifier.

```html
<div class="shapla-dropdown">
  <div class="shapla-dropdown-menu has-max-items">
    <!-- Other content-->
  </div>
</div>
```

If the number of items is more than 10, it will show scroll. You change the number by using css custom property `--max-menu-items`

```html
<div class="shapla-dropdown" style="--max-menu-items: 5">
  <div class="shapla-dropdown-menu has-max-items">
    <!-- Other content-->
  </div>
</div>
```
