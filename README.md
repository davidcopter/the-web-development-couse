# Week 1

## What is HTML ?

เอชทีเอ็มแอล (อังกฤษ: HTML: Hypertext Markup Language ภาษามาร์กอัปข้อความหลายมิติ) เป็นภาษามาร์กอัปหลักในปัจจุบันที่ใช้ในการสร้างเว็บเพจ หรือข้อมูลอื่นที่เรียกดูผ่านทางเว็บเบราว์เซอร์ ซึ่งตัวโค้ดจะแสดงโครงสร้างของข้อมูล ในการแสดง หัวข้อ ลิงก์ ย่อหน้า รายการ รวมถึงการสร้างแบบฟอร์ม เชื่อมโยงภาพหรือวิดีโอด้วย โครงสร้างของโค้ดเอชทีเอ็มแอลจะอยู่ในลักษณะภายในวงเล็บสามเหลี่ยม [Wiki](https://th.wikipedia.org/wiki/%E0%B9%80%E0%B8%AD%E0%B8%8A%E0%B8%97%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B9%81%E0%B8%AD%E0%B8%A5#:~:text=%E0%B9%80%E0%B8%AD%E0%B8%8A%E0%B8%97%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B9%81%E0%B8%AD%E0%B8%A5%20%28%E0%B8%AD%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%A4%E0%B8%A9:%20HTML:,%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%A7%E0%B8%B4%E0%B8%94%E0%B8%B5%E0%B9%82%E0%B8%AD%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%20%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87)

## What do HTML/CSS/JS do?

![HTML CSS JS](https://qph.fs.quoracdn.net/main-qimg-aea6d70e3db223864d778ee560ec62c0.webp)
![HTML+CSS+JS](https://miro.medium.com/max/1400/1*lXKAoEYXdDvEUV8TeeqeBg.png)

## First page + boilerplate

โดยมาตรฐานไฟล์แรกที่ web server คือไฟล์ชื่อ index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML 5 Boilerplate</title>
  </head>
  <body></body>
</html>
```

## Html Element

> <ชื่อ > เรียนว่าเท็ก tag

The basic elements of an HTML page are:

- A text header, denoted using the `h1`, `h2`, `h3`, `h4`, `h5`, `h6` tags.
- A paragraph, denoted using the `p` tag.
- A horizontal ruler, denoted using the `hr` tag.
- A link, denoted using the `a` (anchor) tag.
- A list, denoted using the `ul` (unordered list), `ol` (ordered list) and `li` (list element) tags.
- An image, denoted using the `img` tag
- A divider, denoted using the `div` tag
- A text span, denoted using the `span` tag

Each element can also have attributes - each element has a different set of attributes relevant to the element. There are a few global elements, the most common of them are:

- id - Denotes the unique ID of an element in a page. Used for locating elements by using links, JavaScript, and more.
- class - Denotes the CSS class of an element. Explained in the CSS Basics tutorial.
- style - Denotes the CSS styles to apply to an element. Explained in the CSS Basics tutorial.
- data-x attributes - A general prefix for attributes that store raw information for programmatic purposes. Explained in detailed in the Data Attributes section.

https://www.learn-html.org/en/Basic_Elements

### Comment

Tag คอมเมนต์มีไว้เพื่อใส่คำอธิบายโค้ด HTML โดยเบราว์เซอร์จะไม่นำไปประมวลผลใดๆ ใช้ในการเตือนความจำ หรือโน๊ตอธิบายโค้ดเพื่อง่ายในการกลับมาอ่านอีกครั้ง

- อธิบายโค้ด

```html
<!-- Write your comments here -->

<p>Example</p>

<!-- Remember to add more information here -->
```

- ซ่อนโต้ดเพื่อไม่ให้เบราว์เซอร์ประมวลผลใดๆ

```html
<!-- <img src="code_th.jpg" alt="code-th.com" width="50" height="50"> -->
```

### Example Html Basic Element

#### Heading

```html
<h1>Page title</h1>
<h2>Subheading</h2>
<h3>Tertiary heading</h3>
<h4>Quaternary heading</h4>
```

#### Paragraph

```html
<p style="text-align: center;">text</p>
```

#### Horizontal Line

```html
<hr />
```

#### Link

```html
<a href="https://htmlg.com/" target="_blank">Click here</a>
```

#### List

Unordered list (ul)

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

Ordered list (ol)

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

#### Image

```html
<img src="/demo.jpg" alt="description" width="100" height="48" />
```

#### Div Section

```html
<div>Block element</div>
```

#### Text Span

```html
<span style="color:blue">blue</span>

<p>My mother has <span style="color:blue">blue</span> eyes.</p>
```

## Chrome Developer Tools คืออะไร ?

Chrome Developer Tools เป็นเครื่องมือตัวหนึ่งที่อยู่ภายใน Chrome ซึ่งมันสามารถช่วยให้เราสามารถ Debug หรือดูองค์ประกอบต่าง ๆ เว็บที่เราเขียนขึ้นมาได้

### ขั้นตอนการใช้งาน

เมื่อเราอยู่ในหน้า Website หนึ่ง ๆ เราสามารถทำการตรวจสอบส่วนประกอบต่าง ๆ ของเว็บนั้น ๆ โดยหลายวิธีดังนี้

1. คลิกขวาที่หน้านั้น ๆ จุดใดจุดนึง → จากนั้นเลือก Inspect
2. กด F12 → More Tools → Developer Tools

https://medium.com/@vitsavavit/chrome-developer-tools-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-c44cee28c670

![Inspect Element](https://wd.imgix.net/image/admin/Iganvpf9K9dEOpSb6wIA.png?auto=format)
