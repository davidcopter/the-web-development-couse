# Week 2

## Introduction to CSS

![CSS Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/100px-CSS3_logo_and_wordmark.svg.png)

Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. - [Wiki](https://en.wikipedia.org/wiki/CSS)

Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. - [Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS)

## CSS Syntax

![CSS syntax](https://www.w3schools.com/css/img_selector.gif)

- The **selector** points to the HTML element you want to style.
- The **declaration** block contains one or more declarations separated by semicolons.
- Each declaration includes a CSS **property** name and a value, separated by a colon.
- Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

[w3school](https://www.w3schools.com/css/css_syntax.asp)

## Selectors

### Element Selector

all `<p>` elements on the page will be center-aligned, with a red text color:

```html
<p>Hello, World</p>
<p>Second message</p>
```

```css
p {
  text-align: center;
  color: red;
}
```

### ID Selector

The CSS rule below will be applied to the HTML element with id="para1":

```html
<p>Hello, World</p>
<p id="para1">Red Text</p>
```

```css
#para1 {
  text-align: center;
  color: red;
}
```

### Class Selector

In this example all HTML elements with class="center" will be red and center-aligned:

```html
<h1 class="center">This text will be center and red</h1>
/* more than one class */
<p class="center large">This paragraph refers to two classes.</p>
```

```css
.center {
  text-align: center;
  color: red;
}
```

### Universal Selector

The CSS rule below will affect every HTML element on the page:

```css
* {
  text-align: center;
  color: blue;
}
```

### Grouping Selector

```css
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}

/* to */
h1,
h2,
p {
  text-align: center;
  color: red;
}
```

## Colors

Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

## CSS Backgrounds

In these chapters, you will learn about the following CSS background properties:

- background-color
- background-image
- background-repeat
- background-attachment
- background-position
- background (shorthand property)

## Box model

![Box Modal](https://miro.medium.com/max/967/0*1OLTAZ4K7osAZ0hM.png)

- Border: https://www.w3schools.com/css/css_border.asp
- Margin: https://www.w3schools.com/css/css_margin.asp
- Padding: https://www.w3schools.com/css/css_margin.asp

# Height, Width and Max-width

The height and width properties may have the following values:

- auto - This is default. The browser calculates the height and width
- length - Defines the height/width in px, cm etc.
- % - Defines the height/width in percent of the containing block
- initial - Sets the height/width to its default value
- inherit - The height/width will be inherited from its parent value

Set the height and width of a <div> element:

```css
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```

## Typography properties

- Text Color:

```css
body {
  color: blue;
}

h1 {
  color: green;
}
```

- Text Alignment:

```css
h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
```

## Fonts

- Font Families:

```css
.p1 {
  font-family: 'Times New Roman', Times, serif;
}

.p2 {
  font-family: Arial, Helvetica, sans-serif;
}

.p3 {
  font-family: 'Lucida Console', 'Courier New', monospace;
}
```

- Font Style

```css
p.normal {
  font-style: normal;
}

p.italic {
  font-style: italic;
}

p.oblique {
  font-style: oblique;
}
```

- Font Size

```css
h1 {
  font-size: 40px;
}

h2 {
  font-size: 30px;
}

p {
  font-size: 14px;
}
```

## Introduction bootstrap

![Bootstrap Css Framework](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/100px-Bootstrap_logo.svg.png)

https://getbootstrap.com/

Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components. - [Wiki](<https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)>)
