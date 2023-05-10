export function Notification({isBooking, info}) {
  let date
  if(info.date !== "") {
    const options = {weekday: "long", year: 'numeric', month: 'long', day: 'numeric'}
    date = new Intl.DateTimeFormat("ru-Ru", options).format(new Date(info.date))
  }

  return (
    <div className="notification">
      <p>{isBooking && `Вы забронировали переговорную ${info.room} 
      на ${info.floor} этаже 
      в башне ${info.tower} 
      на ${date} 
      c ${info.timeStart} до ${info.timeFinish}`}</p>
    </div>
  )
}