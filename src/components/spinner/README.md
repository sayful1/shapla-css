## Introduction

Spinner

## Usages

&nbsp;1. Layer markup: You need to add 4 layer.

```html

<div class="shapla-spinner__layer shapla-spinner__layer-1">
    <div class="shapla-spinner__circle-clipper shapla-spinner__left">
        <div class="shapla-spinner__circle"></div>
    </div>
    <div class="shapla-spinner__gap-patch">
        <div class="shapla-spinner__circle"></div>
    </div>
    <div class="shapla-spinner__circle-clipper shapla-spinner__right">
        <div class="shapla-spinner__circle"></div>
    </div>
</div>
```

Remember to change layer number `shapla-spinner__layer-1` from 1 to 4.

&nbsp;2. Basic structure

```html

<div id="shapla-spinner-container" class="shapla-spinner-container is-fixed">
    <div class="shapla-spinner-inner">
        <div class="shapla-spinner">
            <!-- Add layer 1 -->
            <!-- Add layer 2 -->
            <!-- Add layer 3 -->
            <!-- Add layer 4 -->
        </div>
    </div>
</div>
```

To show single color, you can add `shapla-spinner--single-color` with `shapla-spinner`

&nbsp;3. Spinner with text

```html

<div id="shapla-spinner-container" class="shapla-spinner-container is-fixed">
    <div class="shapla-spinner-inner has-text">
        <div class="shapla-spinner">
            <!-- Add layer 1 -->
            <!-- Add layer 2 -->
            <!-- Add layer 3 -->
            <!-- Add layer 4 -->
        </div>
        <div class="shapla-spinner-text">Loading...</div>
    </div>
</div>
```

&nbsp;3. Example

```html

<div id="shapla-spinner-container" class="shapla-spinner-container is-fixed">
    <div class="shapla-spinner-inner">
        <div class="shapla-spinner is-default">
            <div class="shapla-spinner__layer shapla-spinner__layer-1">
                <div class="shapla-spinner__circle-clipper shapla-spinner__left">
                    <div class="shapla-spinner__circle"></div>
                </div>
                <div class="shapla-spinner__gap-patch">
                    <div class="shapla-spinner__circle"></div>
                </div>
                <div class="shapla-spinner__circle-clipper shapla-spinner__right">
                    <div class="shapla-spinner__circle"></div>
                </div>
            </div>
            <div class="shapla-spinner__layer shapla-spinner__layer-2">
                <div class="shapla-spinner__circle-clipper shapla-spinner__left">
                    <div class="shapla-spinner__circle"></div>
                </div>
                <div class="shapla-spinner__gap-patch">
                    <div class="shapla-spinner__circle"></div>
                </div>
                <div class="shapla-spinner__circle-clipper shapla-spinner__right">
                    <div class="shapla-spinner__circle"></div>
                </div>
            </div>
            <div class="shapla-spinner__layer shapla-spinner__layer-3">
                <div class="shapla-spinner__circle-clipper shapla-spinner__left">
                    <div class="shapla-spinner__circle"></div>
                </div>
                <div class="shapla-spinner__gap-patch">
                    <div class="shapla-spinner__circle"></div>
                </div>
                <div class="shapla-spinner__circle-clipper shapla-spinner__right">
                    <div class="shapla-spinner__circle"></div>
                </div>
            </div>
            <div class="shapla-spinner__layer shapla-spinner__layer-4">
                <div class="shapla-spinner__circle-clipper shapla-spinner__left">
                    <div class="shapla-spinner__circle"></div>
                </div>
                <div class="shapla-spinner__gap-patch">
                    <div class="shapla-spinner__circle"></div>
                </div>
                <div class="shapla-spinner__circle-clipper shapla-spinner__right">
                    <div class="shapla-spinner__circle"></div>
                </div>
            </div>
        </div>
    </div>
</div>
```