export function SelectTime({id, time, text, handleSelect}) {
  
  return (
    <>
      <p className="field-name">{text}</p>
      <input className="field time" id={id} type="time" value={time} onChange={handleSelect}></input>
    </>
  )
}