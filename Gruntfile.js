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
            build: "build",
            dependencies: ["svg/fontawesome"]
        },
        copy: {
            dependencies: {
                files: [{
                    src: "node_modules/@fortawesome/fontawesome-free/svgs/brands/*.svg",
                    dest: "svg/fontawesome/brands/",
                    expand: true,
                    flatten: true
                }, {
                    src: "node_modules/@fortawesome/fontawesome-free/svgs/regular/*.svg",
                    dest: "svg/fontawesome/regular/",
                    expand: true,
                    flatten: true
                }, {
                    src: "node_modules/@fortawesome/fontawesome-free/svgs/solid/*.svg",
                    dest: "svg/fontawesome/solid/",
                    expand: true,
                    flatten: true
                }]
            }
        },
        eslint: {
            all: ["**/*.js"]
        },
        jsonlint: {
            all: ["*.json", ".*.json"]
        },
        lintAll: {
            sources: {
                md: [ "*.md"],
                js: ["*.js"],
                json: ["*.json", "templates/*.json"],
                other: ["./.*"]
            }
        },
        webfont: {
            options: {
                font: "Infusion-Icons", // Name of the generated font.
                // The following configuration is for the generated CSS file only
                // and not necessary if you setup the CSS manually
                syntax: "bootstrap",
                templateOptions: {
                    classPrefix: "fl-icon-"
                },
                htmlDemoTemplate: "templates/demo.html"
            },
            all: {
                src: "svg/*.svg",
                dest: "build/" // Destination path for the font files.
            },
            // to be filled based on a config file provided at run time
            custom: {
                dest: "build/"
            }
        }
    });

    // Load the plugins:
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("gpii-grunt-lint-all");
    grunt.loadNpmTasks("grunt-webfont");

    // Custom tasks:

    // task for generating the icon font, either all or custom.
    grunt.registerTask("build", "Compiles the icon font", function (target) {
        var configPath = grunt.option("config");
        target = target === "all" ? target : "custom";

        if (configPath) {
            // set the custom task settings from the config file
            var config = grunt.file.readJSON(configPath);

            if (config.options && config.options.codepoints) {
                for (var codepoint in config.options.codepoints) {
                    var codeNumber = config.options.codepoints[codepoint];
                    codeNumber = typeof codeNumber === "number" ? codeNumber : Number.parseInt(codeNumber, 16);
                    config.options.codepoints[codepoint] = codeNumber;
                }
            }

            for (var key in config) {
                var settingPath = ["webfont", "custom", key].join(".");
                grunt.config.set(settingPath, config[key]);
            }

        } else if (target === "custom") {
            grunt.fail.fatal("A config path must be supplied. Run grunt build --config=\"pathToConfig.json\"");
        }

        var tasks = [
            "clean:build",
            "lint",
            "webfont:" + target
        ];
        grunt.task.run(tasks);
    });

    grunt.registerTask("default", ["build:all"]);
    grunt.registerTask("lint", "Perform all standard lint checks.", ["lint-all"]);
    grunt.registerTask("loadDependencies", "Load lib files from node_modules", ["clean:dependencies", "copy:dependencies"]);
};
