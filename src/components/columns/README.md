## Introduction

A simple way to build responsive columns.

## Usages

Building a *columns* layout with Shapla is very simple.

* Add a `shapla-columns` container.
* Add as many `shapla-column` elements as you want. Each `shapla-column` will have an equal width, no matter the number
  of columns.

```html
<div class="shapla-columns">
  <div class="shapla-column">First column</div>
  <div class="shapla-column">Second column</div>
  <div class="shapla-column">Third column</div>
  <div class="shapla-column">Fourth column</div>
</div>
```

#### Column sizes

To define the size of each column individually, you can use `{grid_number}` from 1 to 12 column grid system.

* `is-{grid_number}`: to define size for *tablet* onward.
* `is-{grid_number}-mobile`: to define size for *mobile* only device.
* `is-{grid_number}-tablet`: to define size for *tablet* onward.
* `is-{grid_number}-desktop`: to define size for *desktop* onward.
* `is-{grid_number}-widescreen`: to define size for *widescreen* onward.
* `is-{grid_number}-fullhd`: to define size for *fullhd* onward.

```html
<div class="shapla-columns is-mobile">
  <div class="shapla-column is-6-mobile is-4-tablet is-3-desktop is-2-widescreen"></div>
</div>
```

#### Multiline

Whenever you want to start a new line, you can close a `shapla-columns` container and start a new one. But you can also
add the `is-multiline` modifier and add more column elements than would fit in a single row.

```html
<div class="shapla-columns is-multiline">
  <!-- All columns -->
</div>
```

#### Centering columns

While you can use empty columns (like `<div class="shapla-column"></div>`) to create horizontal space
around `.shapla-column` elements, you can also use `.is-centered` on the parent `.shapla-columns` element:

```html
<div class="shapla-columns is-mobile is-centered">
  <div class="shapla-column is-half">
    <!-- Some content -->
  </div>
</div>
```

#### Vertical alignment

To align your columns vertically, add the `is-vcentered` modifier to the `shapla-columns` container.

```html
<div class="shapla-columns is-vcentered">
  <!-- All columns -->
</div>
```

### Column gap

Each column has a default value of 0.75rem. Since the gap is on each side of a column, the gap between two adjacent
columns will be twice (1.5rem) by default. To modify default gap, you can add css variable `--shapla-column-gap`.

```html
<div class="shapla-columns" style="--shapla-column-gap: 2rem;">
  <!-- All columns -->
</div>
```

### Column Gapless

If you want to remove the space between the columns, add the `is-gapless` modifier on the `shapla-columns` container:

```html
<div class="shapla-columns is-gapless">
  <!-- All columns -->
</div>
```

### Nesting columns

You can nest columns to have more flexibility in your design. You only need to follow this structure:

* `shapla-columns`: top-level columns container
  * `shapla-column`
    * `shapla-columns`: nested columns
      * `shapla-column` and so on…

```html
<div class="shapla-columns">
  <div class="shapla-column">
    <div class="shapla-columns">
      <div class="shapla-column"></div>
    </div>
  </div>
  <!-- All columns -->
</div>
```

### Mobile columns

By default, columns are only activated from *tablet* onwards. This means columns are stacked on top of each other on *
mobile*. If you want columns to work on *mobile too*, just add the `is-mobile` modifier on the `shapla-columns`
container:

```html
<div class="shapla-columns is-mobile">
  <div class="shapla-column">1</div>
  <div class="shapla-column">2</div>
  <div class="shapla-column">3</div>
  <div class="shapla-column">4</div>
</div>
```

### Desktop only columns

If you only want columns on *desktop* upwards, just use the `is-desktop` modifier on the `shapla-columns` container:

```html
<div class="shapla-columns is-desktop">
  <div class="shapla-column">1</div>
  <div class="shapla-column">2</div>
  <div class="shapla-column">3</div>
  <div class="shapla-column">4</div>
</div>
```
