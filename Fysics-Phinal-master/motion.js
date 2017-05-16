var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
  let d= v*t;
  return d;
};
exports.time= function(d,v){
  let t= d/v;
  return t;
};
exports.velocity= function(d,t){
  let v= d/t;
  return v;
};
exports.acceleration= function(d,v,t){
  let a= 0.5*a*t*t+v*t;
  return a;
};
