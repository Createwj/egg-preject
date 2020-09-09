module.exports = app => {
  app.cache = new Cache();
  console.log('缓存对象')
};