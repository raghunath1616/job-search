const envConstants = {
  API_URL: "https://staging.agentdesks.com/v1.0/",
  API_V2_URL: "https://staging.agentdesks.com/v2.0/",
}

//DefinePlugin of Webpack needs stringified values, so that's why this process
;(() => {
  Object.keys(envConstants).map((item) => {
    envConstants[item] = JSON.stringify(envConstants[item])
  })
})()

module.exports = envConstants
