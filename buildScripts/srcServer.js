const express = require('express');
const path = require('path');
const open = require('open');
const PORT = 3000;
const app = express();

import webpack from 'webpack';
import config from '../webpack.config.dev';
const compiler = webpack(config);

/*eslint-disable no-console*/


app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(PORT,function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + PORT);
  }
});
