import './App.css'
import { useState } from 'react'

function App() {
  let [lat, set_lat] = useState()
  let [lon, set_lon] = useState()
  let [accuracy, set_accuracy] = useState()
    navigator.geolocation.getCurrentPosition((position) => {
      const t =  position.coords.latitude;
      const lon = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      set_lat(t)
      set_lon(lon)
      set_accuracy(accuracy)
    });

  return (
    <div>
      <p>위도: {lat}</p>
      <p>경도: {lon}</p>
      <p>정확도: {accuracy} 미터</p>
    </div>
  )
}

export default App
