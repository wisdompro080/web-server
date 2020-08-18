const express=require("express");
const app=express();
const request=require('request');
const chalk=require('chalk');

const url="http://api.weatherstack.com/current?access_key=17a4892219672010337f5190adca3526&query=Coonoor&units=f";
const geourl="https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?access_token=pk.eyJ1Ijoid2lzZG9tcHJvIiwiYSI6ImNrZGtjNmVleTBuZGEyeHEzZ2o4b3V4OGIifQ.cD1bNFVgA5yi9Pcny2Ln1Q";
const gurl="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid2lzZG9tcHJvIiwiYSI6ImNrZGtjNmVleTBuZGEyeHEzZ2o4b3V4OGIifQ.cD1bNFVgA5yi9Pcny2Ln1Q";
const userinput=require('./geocode');



if(userinput===undefined){console.log('enter a data')}
else{
}
