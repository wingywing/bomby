//Neocities push
var NeoCities = require('neocities')
var api = new NeoCities('bomby', '^mUzNTVqh9z*8!')

api.upload([
    {name: '/public', path: '../'}
  ], function(resp) {
    console.log(resp)
  })
