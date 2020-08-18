const geocode=require('./geocode');
const forecast=require('./forecast')

geocode(add,(lat,long,callback)=>{
    forecast(lat,long,(d)=>{
      callback(d)
    })
})