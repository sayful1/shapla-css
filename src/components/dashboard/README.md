## Introduction

A simple way to build dashboard layout.

## Usages

&nbsp;1. The Basic layout of dashboard. Add `has-shapla-dashboard` class on `<body>` tag to disable overflow.

```html

<div class="shapla-dashboard">

  <div class="shapla-dashboard-header">
    <!-- Dashboard Header Content -->
  </div>

  <div class="shapla-dashboard-content">
    <div class="shapla-dashboard-content__inner">
      <!--Dashboard Content-->
    </div>
  </div>

  <!-- Sidenav (optional) -->
  <div class="shapla-sidenav">
    <div class="shapla-sidenav__background"></div>
    <div class="shapla-sidenav__body">
      <div class="shapla-sidenav__content">
        <!-- Sidenav profile header -->
        <!-- Sidenav menu -->
      </div>
    </div>
  </div>
  <!-- Sidenav end -->

</div>
```

&nbsp;2. Header layout. Header layout supports three color theme. Add `theme-default`, `theme-primary`
or `theme-secondary` on `shapla-dashboard-header` class.

```html

<div class="shapla-dashboard-header theme-default">
  <div class="shapla-dashboard-header__burger">
    <span class="shapla-icon is-hoverable">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"></path>
      </svg>
    </span>
  </div>
  <div class="shapla-dashboard-header__title">Dashboard</div>
  <!-- Extra content on left side -->
  <div class="shapla-dashboard-header__spacer"></div>
  <!-- Extra content on right side -->
</div>
```

&nbsp;3. Sidenav profile header structure.

```html

<div class="shapla-dashboard-sidenav-profile theme-default">
  <div class="shapla-dashboard-sidenav-profile__avatar">
    <img src="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?s=80" alt="Sayful Islam">
  </div>
  <div class="shapla-dashboard-sidenav-profile__name">
    <span>Hello,</span><b>Sayful Islam</b>
  </div>
</div>
```

&nbsp;4. Sidenav menu structure.

```html

<div class="shapla-dashboard-sidenav-menu">
  <ul class="sidenav-list">
    <li class="sidenav-list__item"><a href="#" class="sidenav-list__link">Menu item 1</a></li>
    <li class="sidenav-list__item"><a href="#" class="sidenav-list__link">Menu item 2</a></li>
  </ul>
</div>
```