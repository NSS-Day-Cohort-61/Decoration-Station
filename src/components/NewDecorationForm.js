export const NewDecorationForm = ({
  userChoices,
  setUserChoices,
  seasons,
  categories,
  setItems,
  setSeasonChoice,
}) => {
  const handleSaveDecoration = (event) => {
    event.preventDefault() // When a button element inside of a form element is clicked, html's default functionality is to make a request to the current url (localhost). This will refresh the page. We don't want that, so we prevent the default functionality

    // Empty strings and the value 0 are falsy values, meaning they equate to false.
    // Therefore, if the user has not entered in a value for one of these properties,
    // the if statement will return false and not pass the condition.
    if (
      userChoices.name &&
      userChoices.imageUrl &&
      userChoices.seasonId &&
      userChoices.categoryId
    ) {
      fetch('http://localhost:8088/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userChoices),
      }).then(() => {
        fetch('http://localhost:8088/items') // After posting a new item, we made a fetch call to get the items from out database
          .then((res) => res.json())
          .then((data) => {
            setItems(data) // After the new items from the database comes back, we will set our items state variable with the new list of items
            setSeasonChoice(userChoices.seasonId) // Here we are setting the season choice to the season id of the new item the user added. This will set the season dropdown to the selected season and the user can see the newly created item in the seasonal items.
            setUserChoices({
              name: '',
              imageUrl: '',
              seasonId: 0,
              categoryId: 0,
            }) // Here we are resetting the user choices to empty values so that the form will reset
          })
      })
    } else {
      alert('Please complete the form')
    }
  }

  return (
    <form>
      <h2 className="decoration-form-title">Add a decoration to the catalog</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            required
            id="name"
            type="text"
            className="form-control"
            placeholder="Item"
            value={userChoices.name} // This binds the value of the input to the userChoices.name value. If userChoices ever changes, this will update to reflect the new value
            onChange={(event) => {
              const copy = { ...userChoices }
              copy.name = event.target.value
              setUserChoices(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL: </label>
          <input
            required
            id="imgUrl"
            type="text"
            className="form-control"
            placeholder="https://www.example.com"
            value={userChoices.imageUrl} // This binds the value of the input to the userChoices.imageUrl value. If userChoices ever changes, this will update to reflect the new value
            onChange={(event) => {
              const copy = { ...userChoices }
              copy.imageUrl = event.target.value
              setUserChoices(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>
            Season:
            {/* How do I display all the seasons as radio buttons? */}
            {seasons.map((season) => {
              return (
                <div key={season.id} className="radio">
                  <label>
                    <input
                      type="radio"
                      name="season"
                      value={season.id}
                      checked={userChoices.seasonId === season.id} // The checked attribute accepts a true of false value. Here we say this should be checked if the userChoices.seasonId matched the id of the season this radio button represents
                      onChange={(event) => {
                        const copy = { ...userChoices }
                        copy.seasonId = parseInt(event.target.value)
                        setUserChoices(copy)
                      }}
                    />
                    {season.name}
                  </label>
                </div>
              )
            })}
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Category: </div>
          {categories.map((category) => {
            return (
              <div key={category.id} className="radio">
                <label>
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={userChoices.categoryId === category.id}
                    onChange={(event) => {
                      const copy = { ...userChoices }
                      copy.categoryId = parseInt(event.target.value)
                      setUserChoices(copy)
                    }}
                  />
                  {category.name}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset>
      <button
        className="btn"
        onClick={(event) => {
          handleSaveDecoration(event)
        }}
      >
        Add Decoration
      </button>
    </form>
  )
}
