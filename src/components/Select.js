export function Select({id, text, value, dataForOptions, handleSelect}) {

  return (
    <label className="field-container">
      <p className="field-name">{text}</p>
      <select className="field" id={id} name={id} value={value} onChange={handleSelect}>
        {dataForOptions.map(el => 
          <option className="field-options" key={el} value={el}>{el}</option>
        )}
      </select>
    </label>
  )
}