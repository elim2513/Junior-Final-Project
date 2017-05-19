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
exports.distance2= function(a,v,t){
  let d= 0.5*a*t*t+v*t;
  return d;
};
exports.velocity2= function(v1,a,t){
  let v2= v1+a*t;
  return v;
}
exports.time2= function(v2,v1,a){
  let t2=(v2-v1)/a;
  return t2;
}
exports.acceleration= function(v2,v1,t){
  let a= (v2-v1)/t;
  return a;
}
exports.acceleration2= function(d,v,t){
  let a2= (2*(d-v*t)/(t*t));
  return a2;
}
