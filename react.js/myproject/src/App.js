import React from 'react'
import axios from 'axios'
function App() {
  const[city,setCity]=React.useState("")
  const[result,setResult]=React.useState("")
  const cityfun=(event)=>{
    setCity(event.target.value)
  }
  const show=async ()=>{
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=53704c684b61746f1d2f76eecdfdb680`
    await axios.get(apiurl).then((res)=>{
      setResult(res.data)
      console.log(res.data)
    }).catch((err)=>{
      setResult(err.response.data)
      console.log(err.response.data)
    })
    

 // console.log(apiurl)
  }
  return (
    <div>
      <h1><center>Weather Report for all over world</center></h1>
      <h1><center>By Using Entering City Name</center></h1>
      <h2><center>Developed By Maadhesh B</center></h2>
      <hr size="10" color='black'></hr><br></br>
      <input type="text" value={city} onChange={(e)=>cityfun(e)} name="city" placeholder='Enter City Name'></input><br></br><br></br>
      <input type="button" value="Get Weather Report" onClick={show}></input><br></br>
      <br></br><hr size="10" color='black'></hr>
      {result!==null && result.cod===200 &&<><h2>Country - city : {result.sys.country}-{result.name}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Weather : {result.weather[0].main}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Description : {result.weather[0].description}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Wind Speed : {result.wind.speed}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Temperature : {result.main.temp}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Humidity : {result.main.humidity}</h2></>}
      {result!==null && result.cod===200 &&<><h2>Pressure : {result.main.pressure}</h2></>}
      {result!==null && result.cod==="404" &&<font color="red" ><h1>City : {result.message}</h1></font>}
    </div>
  )
}
export default App