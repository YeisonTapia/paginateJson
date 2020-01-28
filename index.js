const utils = require('./utils')

const posts = [
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

const page = utils.getPage(posts, 1, 5)

console.warn(page)




