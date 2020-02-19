# paginateJson 📖

This small library allows you to easily page an array.

### Install

```
npm i paginatejson
```

### Arguments:

* array: Array that needs to be paginated.
* page: Page you need to access.
* perPage: Number of records per page.


### Example Use

```js
let paginate = require('paginatejson')

let posts = [
    {
        "id": 1,
        "title": "One",
        "author": "I"
      },
      {
        "id": 2,
        "title": "two",
        "author": "I"
      },
      {
        "id": 3,
        "title": "three",
        "author": "I"
      },
      {
        "id": 4,
        "title": "three",
        "author": "I"
      },
      {
        "id": 5,
        "title": "three",
        "author": "I"
      },
      {
        "id": 6,
        "title": "three",
        "author": "I"
      },
      {
        "id": 7,
        "title": "three",
        "author": "I"
      },
      {
        "id": 8,
        "title": "three",
        "author": "I"
      },
      {
        "id": 9,
        "title": "three",
        "author": "I"
      }
]

let result = paginate.paginate(posts, 1, 5)

console.log(result)
/* 
    {
    items: [
        { id: 1, title: 'One', author: 'I' },
        { id: 2, title: 'two', author: 'I' },
        { id: 3, title: 'three', author: 'I' },
        { id: 4, title: 'three', author: 'I' },
        { id: 5, title: 'three', author: 'I' }
    ],
    next: 2,
    current: 1,
    first: 1,
    last: 2
    }
*/

```