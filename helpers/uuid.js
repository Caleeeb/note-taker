// Creates a Universally Unique Identifier (uuid) 
module.exports = () =>
    Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);