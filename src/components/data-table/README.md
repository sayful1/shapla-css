## Introduction

A simple responsive data table style

## Usages

#### Basic Usages

&nbsp;1. The Basic layout of data table. Add `shapla-data-table` class to html `table` element. And wrap with css
class `shapla-data-table-container`.

```html

<div class="shapla-data-table-container">
  <table class="shapla-data-table">
    <!-- Table head and body content will go here -->
  </table>
</div>
```

&nbsp;2. Add `is-checkbox-cell` CSS class to HTML `th` or `td` element for checkbox cell. Add `is-numeric-cell` CSS
class to HTML `th` or `td` element for cell containing number.

```html

<thead>
<tr>
  <th class="is-checkbox-cell"><!-- HTML Input Checkbox element --></th>
  <th>Name</th>
  <th class="is-numeric-cell">Age</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="is-checkbox-cell"><!-- HTML Input Checkbox element --></td>
  <td>Jone Doe</td>
  <td class="is-numeric-cell">18</td>
</tr>
</tbody>
```

&nbsp;3. Add `is-selected` css class to `tr` element to select row.

```html

<tr class="is-selected">
  <td class="is-checkbox-cell"><!-- HTML Input Checkbox element --></td>
  <td>Jone Doe</td>
  <td class="is-numeric-cell">18</td>
</tr>
```

#### Make table responsive

&nbsp;1. To make table responsive, add `shapla-data-table--mobile` css class to `table` element.

```html

<div class="shapla-data-table-container">
  <table class="shapla-data-table shapla-data-table--mobile">
    <!-- Table head and body content will go here -->
  </table>
</div>
```

&nbsp;2. Add `column-primary` css class to `th` and `td` element on table primary cell (after checkbox cell).
And also add `data-colname=""` attribute to `td` element on `tbody`

```html

<thead>
<tr>
  <th class="is-checkbox-cell"><!-- HTML Input Checkbox element --></th>
  <th class="column-primary">Name</th>
  <th class="is-numeric-cell">Age</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="is-checkbox-cell"><!-- HTML Input Checkbox element --></td>
  <td class="column-primary" data-colname="Name">
    Jone Doe
    <!-- Add toggle button here -->
  </td>
  <td class="is-numeric-cell" data-colname="Age">18</td>
</tr>
</tbody>
```

```html
<button class="data-table-toggle-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" class="triangle-up"></path>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" class="triangle-down"></path>
  </svg>
</button>
```
