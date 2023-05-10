import './App.css';
import {useState, useMemo} from "react"
import { Select } from './components/Select';
import { SelectDate } from './components/SelectDate';
import { SelectTime } from './components/SelectTime';
import { Comment } from './components/Comment';
import { Notification } from './components/Notification';


const towers = ["A", "Б"]
const floors = Array(25).fill(0).map((_, i) => i+3)
const rooms = Array(10).fill(0).map((_, i) => i+1)
const initialState = {
  tower: towers[0], 
  floor: floors[0], 
  room: rooms[0], 
  date: "", 
  timeStart: "", 
  timeFinish: "",
  comment: ""
}
const validators = {
  date: (value, values) => {
    if(!value) {
      return false
    }
    let nowDate = new Date()
    let selectDate = new Date(value)
    
    if(nowDate < selectDate) {
      return true
    }
  },
  timeStart: (value, values) => {
    if(!value) {
      return false
    }
    let nowTime = `${new Date().getHours()}:${new Date().getMinutes()}`

    if(nowTime < value) {
      return true
    } else {
      return false
    }
  },
  timeFinish: (value, values) => {
    if(!value) {
      return false
    }

    if(values.timeStart >= value) {
      return false
    }

    return true
  }
}


export function App() {
  const [info, setInfo] = useState(initialState)
  const isValid = useMemo(() => Object.keys(info)
    .filter(key => key in validators)
    .every(key => validators[key](info[key], info)), [info])
  const [isBooking, setIsBooking] = useState(false)
  
  function handleChangeInfo(e) {
    setInfo(prev => ({...prev, [e.target.id]: e.target.value}))
    setIsBooking(false)
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    setIsBooking(true)
    console.log(JSON.stringify(info))
  }
  
  function handleClear() {
    setIsBooking(false)
    setInfo(initialState)
  }

  return (
    <div className="container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h1 className="form-name">Забронировать переговорную</h1>

        <Select id="tower" text="Выберите башню:" value={info.tower} dataForOptions={towers} handleSelect={handleChangeInfo}/>
        <Select id="floor" text="Выберите этаж:" value={info.floor} dataForOptions={floors} handleSelect={handleChangeInfo}/>
        <Select id="room" text="Выберите комнату:" value={info.room} dataForOptions={rooms} handleSelect={handleChangeInfo}/>

        <SelectDate id="date" date={info.date} handleSelect={handleChangeInfo}/>

        <label className="field-container">
          <SelectTime id="timeStart" text="C" time={info.timeStart} handleSelect={handleChangeInfo}/>
          <SelectTime id="timeFinish" text="до" time={info.timeFinish} handleSelect={handleChangeInfo}/>
        </label>
        
        <Comment id="comment" value={info.comment} handleSelect={handleChangeInfo}/>

        <div className="manage-form">
          <input className="form-manage-button clear" type="button" onClick={handleClear} value="Очистить" />
          <input className="form-manage-button submit" disabled={!isValid} type="submit" value="Отправить" />
        </div>
        <Notification isBooking={isBooking} info={info} />
      </form>
    </div>
  );
}