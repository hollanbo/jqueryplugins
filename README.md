# jQuery Plugins
### General setup
Just include the desired .js file after the jQuery link, preferably in the &lt;head&gt; of the document.

## Multitext
Multitext is a jQuery plugin which replaces multi-line textarea or text fields by automatically appending new inputs when the previous has been filled or when enter is pressed, depending on your design.

### Usage
1. Add the multitext="enter|input|both" attribute to your text inputs and place them in the desired container.
Make sure to define the name of your input as an array, so the server receives all lines and not just the last one.
    * enter: appends a new input when enter is pressed and focuses on that element
    * input: appends a new input when the last element has content without focusing on that element
    * both: appends a new input when the last element has content and focuses on that element

```html
<div class="container">
    <input type="text" multitext="enter" name="enter[]">
    OR
    <input type="text" multitext="input" name="input[]">
    OR
    <input type="text" multitext="both" name="both[]">
</div>
```

2. Call the multitext() method on the jQuery instance of your container.
```javascript
$('div.container').multitext();
```
