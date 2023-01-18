export const SeasonFilter = ({ seasonChoice, setSeasonChoice, seasons }) => {
  return (
    <div id="filter-bar">
      <select
        className="filter-box"
        value={seasonChoice}
        id="season-select"
        onChange={(event) => {
          setSeasonChoice(parseInt(event.target.value))
        }}
      >
        <option value="0">All Seasons</option>
        {seasons.map((season) => {
          return (
            <option key={season.id} value={season.id}>
              {season.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
