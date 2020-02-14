var assert    = require("chai").assert;
var paginate = require("../index");
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

describe("Paginate tests using ASSERT interface from CHAI module: ", function() {

    it("Check the returned value using: assert.lengthOf(value,'value'): ", function() {
        result = paginate.paginate(posts, 1, 5);
        assert.lengthOf(result.items, 5);
    });

    it("Check the returned value using: assert.equal(value,'value'):  ", function() {
        result = paginate.paginate(posts, 1, 5);
        assert.equal(result.current, 1);
    });

});