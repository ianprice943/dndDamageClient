module.exports = {
  devServer: {
    proxy: {
      "/spells" : {
        target: "http://localhost:7000"
      }
    }
  }
};