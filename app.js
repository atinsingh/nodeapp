 const express = require('express');
 const app = new express();
 const os = require('os')

 const appname = process.env.APP_NAME||'DEFAULT NAME';

 app.get('/', (req, res) => {
    res.send({
        data: appname,
        server: os.hostname()
    }); 
    res.end();
 });

 app.listen(4000, () => {
     console.log(`Server started on port`);
 });