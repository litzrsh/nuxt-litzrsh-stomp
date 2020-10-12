const path = require("path");
const defu = require("defu");
const consola = require("consola");

const logger = consola.withScope("nuxt:litzrsh-stomp");

function stomp(_stompOptions) {
    const options = defu(_stompOptions || {}, {
        host: "http://localhost",
        debug: false,
        globalName: this.nuxt.options.globalName || "nuxt",
    });

    this.addPlugin({
        src: path.resolve(__dirname, "plugin.js"),
        fileName: "litzrsh-stomp.js",
        options
    });
}

module.exports = stomp;
module.exports.meta = require("../package.json");