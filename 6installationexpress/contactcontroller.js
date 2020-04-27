//import contact model
contact = require('./contactModel')

//handle index actions
exports.index=function(req,res){
  contact.get(function(err,contacts){
    if(err){
      res.json({
        
      })
    }
  })
}