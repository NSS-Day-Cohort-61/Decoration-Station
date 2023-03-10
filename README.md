#### Part 1:

- Use State
- Use Effect
  - Initial state
  - Dependency array
- Fetch (Get)
- JSX
  - Can only return one element
  - mapping
  - key attribute
- Event Handling
- Styling
- React Dev Tools

#### Part 2:

- Forms
- Fetch (Post)
- Event Handling
- Breaking things into smaller components
- Props
  - dot notation vs destructuring
- React Dev Tools

#### Part 3:

- Router
  - \<BrowserRouter>
  - \<Routes>
  - \<Route>
  - Path
  - Element
  - Nested routes and <Outlet>
  - Must have a root path route
  - The \* path
  - Navbar
    - \<Link>
    - To
- useNavigate()
- Fetch with parameters, expand
- Optional Chaining
- Route parameters
- React Dev Tools

## Setup

Clone this repo and make an api directory with a database.json file.
Add the following data to the database.json file:

In your api directory in your terminal, run:

`json-server database.json -p 8088`

<details>
  <summary>json data</summary>

```json
{
  "items": [
    {
      "id": 1,
      "name": "Skeleton Plates",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/279661?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 1,
      "categoryId": 4
    },
    {
      "id": 2,
      "name": "Books Stack Picture",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/251568?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 1,
      "categoryId": 1
    },
    {
      "id": 3,
      "name": "Sherpa Pumpkin",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/279301?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 1,
      "categoryId": 2
    },
    {
      "id": 4,
      "name": "Christmas Tree Plates",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/281351?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 2,
      "categoryId": 4
    },
    {
      "id": 5,
      "name": "Pumpkin Cat Picture",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/279651?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 1,
      "categoryId": 1
    },
    {
      "id": 6,
      "name": "Gray Skull",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/279642?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 1,
      "categoryId": 2
    },
    {
      "id": 7,
      "name": "Vintage Reindeer",
      "imageUrl": "https://target.scene7.com/is/image/Target/GUEST_f5214958-e775-4450-be16-50e460f6c668?qlt=85&fmt=webp&hei=325&wid=325",
      "seasonId": 2,
      "categoryId": 2
    },
    {
      "id": 8,
      "name": "Skull Stack",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/279717?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 1,
      "categoryId": 2
    },
    {
      "id": 9,
      "name": "Christmas Carol Village",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/269351?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 2,
      "categoryId": 2
    },
    {
      "id": 10,
      "name": "Mr. & Mrs. Clause Tree",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/277305?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 2,
      "categoryId": 2
    },
    {
      "id": 11,
      "name": "Pumpkin Stack",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/279643?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 1,
      "categoryId": 2
    },
    {
      "id": 12,
      "name": "Vintage TV Screen",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/287612?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 2,
      "categoryId": 2
    },
    {
      "id": 13,
      "name": "Post Card Art",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/271720?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 2,
      "categoryId": 1
    },
    {
      "id": 14,
      "name": "Candy Cane Pillow",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/281029?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 2,
      "categoryId": 3
    },
    {
      "id": 15,
      "name": "Wooden Trees",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/267578?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 2,
      "categoryId": 2
    },
    {
      "id": 16,
      "name": "Ghost Dish",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/278565?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 1,
      "categoryId": 4
    },
    {
      "id": 17,
      "name": "Train Station Village Piece",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/269212?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 2,
      "categoryId": 2
    },
    {
      "id": 18,
      "name": "Trick or Treat Pillow",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/279649?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 1,
      "categoryId": 3
    },
    {
      "id": 19,
      "name": "Snowy Cabin Picture",
      "imageUrl": "https://images.kirklands.com/is/image/Kirklands/277008?hei=300&qlt=85,1&wid=300&fmt=jpeg&resMode=bicub&op_sharpen=1",
      "seasonId": 2,
      "categoryId": 1
    }
  ],
  "seasons": [
    {
      "id": 1,
      "name": "Halloween"
    },
    {
      "id": 2,
      "name": "Christmas"
    },
    {
      "id": 3,
      "name": "Thanksgiving"
    }
  ],
  "categories": [
    {
      "id": 1,
      "name": "Wall Art"
    },
    {
      "id": 2,
      "name": "Figure"
    },
    {
      "id": 3,
      "name": "Pillows & Blankets"
    },
    {
      "id": 4,
      "name": "Kitchenware"
    },
    {
      "id": 5,
      "name": "Misc"
    }
  ]
}
```

</details>
