## Introduction

The Shapla checkbox component is an enhanced version of the standard HTML `<input type="checkbox">` element

## Usages

&nbsp;1. The checkbox structure is very simple. To check the checkbox, just add the `is-checked` modifier on
the `.shapla-checkbox` container. To add focus style, add `is-focused` modifier class. To add hover style,
add `is-hovered` modifier class. To add disabled style, add `is-disabled` modifier class.

```html
<label class="shapla-checkbox">
  <input class="shapla-checkbox__input" type="checkbox">
  <span class="shapla-checkbox__label">Checkbox Label</span>
  <span class="shapla-checkbox__focus-helper"></span>
  <span class="shapla-checkbox__box-outline">
    <span class="shapla-checkbox__tick-outline"></span>
  </span>
</label>
```
