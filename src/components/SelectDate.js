export function SelectDate({id, date, handleSelect}) {

  return (
    <label className="field-container">
      <p className="field-name">Выберите дату: </p>
      <input className="field date" id={id} type="date" value={date} onChange={handleSelect}></input>
    </label>
  )
}