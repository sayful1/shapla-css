## Introduction

Simple responsive horizontal navigation tabs, with different styles

## Usages

&nbsp;1. Basic structure.

```html

<div class="shapla-tabs">
  <div class="shapla-tabs__tab">
    <ul class="shapla-tabs__nav">
      <li class="shapla-tabs__nav-item is-active"><a href="#tab-1">Tab 1</a></li>
      <li class="shapla-tabs__nav-item"><a href="#tab-2">Tab 2</a></li>
    </ul>
  </div>
  <div id="tab-1" class="shapla-tabs__panel is-active">
    Tab One Content
  </div>
  <div id="tab-2" class="shapla-tabs__panel">
    Tab Two Content
  </div>
</div>
```

&nbsp;2. Alignment: To align the tabs list, use the `is-centered` or `is-right` modifier on the `.shapla-tabs__tab`
container:

```html

<div class="shapla-tabs">
  <div class="shapla-tabs__tab is-centered">
    <!-- Tab nav -->
  </div>
  <!-- Tab panels -->
</div>
```

&nbsp:3. Sizes: You can choose between 3 additional sizes: `is-small` `is-medium` and `is-large`

```html

<div class="shapla-tabs">
  <div class="shapla-tabs__tab is-small">
    <!-- Tab nav -->
  </div>
  <!-- Tab panels -->
</div>
```

&nbsp;4. Style borders: If you want a more classic style with borders, just append the `is-boxed` modifier.

```html

<div class="shapla-tabs">
  <div class="shapla-tabs__tab is-boxed">
    <!-- Tab nav -->
  </div>
  <!-- Tab panels -->
</div>
```

&nbsp;5. Style toggle: If you want mutually exclusive tabs (like radio buttons where clicking one deselects all other
ones), use the `is-toggle` modifier. If you use both `is-toggle` and `is-toggle-rounded`, the first and last items will
be rounded.

```html

<div class="shapla-tabs">
  <div class="shapla-tabs__tab is-toggle">
    <!-- Tab nav -->
  </div>
  <!-- Tab panels -->
</div>
```

&nbsp;5. Fullwidth: If you want the tabs to take up the whole width available, use `is-fullwidth`.

```html

<div class="shapla-tabs">
  <div class="shapla-tabs__tab is-fullwidth">
    <!-- Tab nav -->
  </div>
  <!-- Tab panels -->
</div>
```