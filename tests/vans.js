module.exports ={
'before': browser=>{
    vans = browser.url.vansObjects(),
    vans.navigate()
},
'after': browser=>{
    vans.end()
},

}