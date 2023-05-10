export function Comment({id, value, handleSelect}) {

  return (
    <label className="field-container">
      <p className="field-name">Комментарий</p>
      <textarea className="field comment" 
        id={id} name={id} 
        value={value} 
        onChange={handleSelect} 
        placeholder="комментарий...">
      </textarea>
    </label>
  )
}