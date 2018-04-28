'use strict';

var shell = require("shelljs");
var argv = require("yargs").argv;
var config = require("./config/config.js");



(function(args) {
    if (args.say) {
        shell.echo("say." + args.say);
    } else {
        shell.echo("say." + args.say);
    }

    // Print env from config
    console.log("env." + config.env);
    console.log("port." + config.server.port);
})(argv);
