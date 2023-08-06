console.log("this is express server hello world")


import express from 'express';
import cors from 'cors';
import path  from 'path';
const __dirname = path.resolve();
const app = express()
app.use(cors())


app.get('/weather/:cityName', (req, res) => {
  console.log("hello world", new Date());

  let weatherData = {
    karachi: {
      city: 'karachi',
      tempInC: 30,
      humidity: 56,
      high: 32,
      low: 18

    },
    london:{
      city: 'london',
      tempInC: 30,
      humidity: 56,
      high: 32,
      low: 1
    },
  }

  let userInputCityName = req.params.cityName.toLowerCase();

  let weatherDataToSend = weatherData[userInputCityName]


  if(weatherDataToSend ){
    res.send(weatherDataToSend);

  }else{
    res.send(404).send(`weather data is not available for ${req.params.cityName}`);
  }

    
  res.send();

})


app.use(express.static(path.join(__dirname, 'public')))



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})