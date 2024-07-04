# The Script Tag

> **The Script tag is used to write JS code inside HTML.** > **It can be inserted anywhere in the code.** > **The code inside the script tag runs automatically while processing the tags.**

```html

<script>
// Write Js Code here
<script>

```

## The Type attribute

## type

> **In earlier the type="text/javascript" was used in older code but now the meaning of this has completly changed.**(Will see later.)

```html

<scirpt type="text/javascript"><script>

```

## language

> **This attribute was used to show the language of the script.But we all know that the javascript is the language of the script.**

```html

<scirpt language="javascript"><script>

```

## src

> **To embed external jsCode the src attribute is used.The source can either be from a network or local.**

```html
<scirpt src="./script.js"
  ></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js">
  </script>

```

**Note: If external source is used the code inside the script tag is ignored**

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js">
    // Code written here will never be executed
  console.log("Hello");
</script>
```
