const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const geocode=require('../location/geocode');
const forecast=require('../location/forecast')
const callweather=require('../location/forecast')

const port =process.env.PORT || 3000;



app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'tempelates/views'))

hbs.registerPartials(path.join(__dirname,'tempelates/partials'))
app.get('',(req,res)=>{ 
    res.render('index',{
        'title':'my game', 
        'name':'msd'
    })
})
app.get('/about',(req,res)=>{ 
    res.render('about',{
        'title':'my game' ,
        'name':'kholi'
    })
})
app.get('/help',(req,res)=>{ 
    res.render('help',{
        'title':'my game' ,
        'name':'rahul'
    })
}); 
app.get('/weather',(req,res)=>{
    
    if(!req.query.address){
        
        res.send({
            Error:'please provide an address for the forecast'
           })
   }
    else{
        const address=req.query.address;
        
        
        geocode(address,(err,lat,long)=>{
            if(err)
            return res.send(err);
            forecast(lat,long,(weather ,location)=>{
                const a=JSON.stringify(location);
                const b=JSON.parse(a);
            //     console.log(a);
            //   console.log(weather)
            //   console.log(location)
              res.send({'location':location,'weather':weather})
            })
        })
    }
    
   
})
app.get('/help/*',(req,res)=>{
    res.render('error',{
        'error':'no article found on help'
    })
})
app.get('*',(req,res)=>{
    res.render('error',{
        'error':'404 page not found '
    })
})


app.listen(port);     
