module.exports = [
    require(`helmet`)(), //add security headers to response
    require(`compression`)(), //compresses response
    require(`cors`)()
]
