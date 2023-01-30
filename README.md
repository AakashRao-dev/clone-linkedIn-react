# Important notes & Code snippets

```css
.header__left img {
  object-fit: contain;
  height: 40px;
}
```

- Here the **object-fit** specifies how the contents of a replaced element (such as an <img>) should be fitted to the box established by its used height and width.

- The **contain** value scales the object's aspect ratio while fitting the entire object within the box, this means that the image will be resized to fit within a 40px height box while maintaining its aspect ratio.

- The **height** property sets the height of the image to 40px, this means that the image will be displayed at that height, this may result in cropping of the image if its aspect ratio doesn't match the 40px height.
