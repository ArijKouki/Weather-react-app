import { React,useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  
  const url='https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=936b64c942b0afc5dfa40a18f125c577&units=metric'

  const searchLocation=(e)=>{
    if(e.key==="Enter"){

      axios.get(url).then(
        (response)=>{
           setData(response.data)
          //  console.log(response.data)
        }
      )

      setLocation("")

    }
  }

  return (
    <div className="App">

      <div className="search">
        <input type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        onKeyPress={searchLocation}/>
      </div>

      <div className="container">

        <div className="top">
          <div className="city">
            <p>{data.name?data.name+", "+data.sys.country:null}</p>
          </div>
          <div className="temp">
            <h1>{data.main?data.main.temp+" °C":null}</h1>
          </div>
          <div className="description">
            <p>{data.weather?data.weather[0].main:null}</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p className="bold">{data.main?data.main.feels_like+" °C":"--"}</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">{data.main?data.main.humidity+" %":"--"}</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{data.main?data.wind.speed+" Km/h":"--"}</p>
            <p>Wind</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
