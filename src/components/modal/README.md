## Introduction

A classic modal overlay, in which you can include any content you want.

## Usages

&nbsp;1. The modal structure is very simple. To activate the modal, just add the `is-active` modifier on
the `.shapla-modal` container.

```html
<div class="shapla-modal">
  <div class="shapla-modal-background"></div>
  <span aria-label="close" class="shapla-delete-icon is-large is-fixed"></span>
  <div class="shapla-modal-content">
    <!-- Content should go here -->
  </div>
</div>
```

&nbsp;2. Code snippet for image modal

```html
<div class="shapla-modal is-active">
  <div class="shapla-modal-background is-dark"></div>
  <span aria-label="close" class="shapla-delete-icon is-large is-fixed"></span>
  <div class="shapla-modal-content is-medium">
    <img src="https://via.placeholder.com/600x600.png?text=1280x960" alt="Placeholder image (600x600)">
  </div>
</div>
```

&nbsp;3. Code snippet for box modal

```html
<div class="shapla-modal is-active">
  <div class="shapla-modal-background is-dark"></div>
  <span aria-label="close" class="shapla-delete-icon is-large is-fixed"></span>
  <div class="shapla-modal-content is-medium shapla-modal-box">
    <!-- Content should go here-->
  </div>
</div>
```

&nbsp;4. Code snippet for card modal

```html
<div class="shapla-modal is-active">
  <div class="shapla-modal-background is-dark"></div>
  <div class="shapla-modal-content is-medium shapla-modal-card">
    <div class="shapla-modal-card__header">
      <p class="shapla-modal-card__title">Card Title</p>
      <span aria-label="close" class="shapla-delete-icon is-medium"></span>
    </div>
    <div class="shapla-modal-card__body">
      <!-- Content should go here-->
    </div>
    <div class="shapla-modal-card__footer is-pulled-right">
      <button class="shapla-button">Cancel</button>
    </div>
  </div>
</div>
```

&nbsp;5. Code snippet for confirm modal

```html
<div class="shapla-modal is-active">
  <div class="shapla-modal-background is-light"></div>
  <div class="shapla-modal-content is-small shapla-modal-confirm">
    <div class="shapla-modal-confirm__content">
      <div class="shapla-modal-confirm__icon is-primary">
        <div class="shapla-modal-confirm__icon-content">!</div>
      </div>
      <div class="shapla-modal-confirm__message">Are you sure?</div>
    </div>
    <div class="shapla-modal-confirm__actions">
      <button class="shapla-button">Cancel</button>
      <button class="shapla-button is-primary"> Ok</button>
    </div>
  </div>
</div>
```
