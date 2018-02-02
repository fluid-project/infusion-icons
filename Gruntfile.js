/*
Copyright 2018 OCAD University

Licensed under the New BSD license.
You may not use this file except in compliance with this Licenses.

You may obtain a copy of the BSD License at
https://github.com/fluid-project/infusion-icons/raw/master/code-LICENSE.txt
*/

/* eslint-env node */
"use strict";

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            build: "build"
        },
        eslint: {
            all: ["**/*.js"]
        },
        jsonlint: {
            all: ["*.json", ".*.json"]
        },
        webfont: {
            options: {
                font: "Infusion-Icons", // Name of the generated font.
                // The following configuration is for the generated CSS file only
                // and not necessary if you setup the CSS manually
                syntax: "bootstrap",
                templateOptions: {
                    classPrefix: "fl-icon-"
                }
            },
            all: {
                src: "svg/*.svg",
                dest: "build/" // Destination path for the font files.
            }
        }
    });

    // Load the plugins:
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("fluid-grunt-eslint");
    grunt.loadNpmTasks("grunt-jsonlint");
    grunt.loadNpmTasks("grunt-webfont");

    // Custom tasks:

    grunt.registerTask("build", ["clean", "webfont:all"]);

    grunt.registerTask("default", ["build"]);

    grunt.registerTask("lint", "Apply eslint and jsonlint", ["eslint", "jsonlint"]);
};
