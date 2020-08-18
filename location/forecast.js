const request=require("request");

const forecast=(lat,long,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=17a4892219672010337f5190adca3526&query="+lat+","+long;
   request.get({url,json:true},(error,res)=>{
     if (error) {
          callback('Unable to connect to weather service!', undefined)
      } else if (res.body.error) {
          callback('Unable to find location', undefined)
      }else
        callback(res.body.current.weather_descriptions,res.body.location)
   })
}
module.exports=forecast;