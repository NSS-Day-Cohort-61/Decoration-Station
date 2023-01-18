/*
  ItemsList will accept props. Props are ALWAYS passed as one object with key/value pairs
  
  props object: {
    seasonsArray: seasons,
    seasonChoiceId: seasonChoice,
    filteredItemsArray: filteredItems
  } 

  On line 14 we are destructuring this object by pulling out the keys. This way we don't have to use dot notation to access the values. This is common practice.

*/

export const ItemsList = ({
  seasonChoiceId,
  seasonsArray,
  filteredItemsArray,
}) => {
  return (
    <div
      id="items-container"
      className={`${seasonsArray
        .find((seasonObj) => seasonObj.id === seasonChoiceId)
        ?.name.toLowerCase()}`}
    >
      {filteredItemsArray.map((decorItem) => {
        return (
          <div key={decorItem.id} className="item-card">
            <img
              src={decorItem.imageUrl}
              alt={decorItem.name}
              className="item-img"
            />
            <div className="item-name">{decorItem.name}</div>
          </div>
        )
      })}
    </div>
  )
}

// A little lesson in object destructuring

/*

const Jerry = {
  name: 'Jerry',
  age: 36,
  sign: "Cancer"
}

const displayDetails = ({name, age, sign}) => {
  return `
    <div>${name}</div>
    <div>${age}</div>
    <div>${sign}</div>
  `
}


displayDetails(Jerry)

*/
