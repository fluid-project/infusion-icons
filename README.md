# infusion-icons #
SVG icons which can be used directly or compiled into an icon font.
The icons have been created based on the [Infusion Icons Visual Style Guide](https://wiki.fluidproject.org/display/fluid/Infusion+Icons+Visual+Style+Guide).


## Documentation ##

The documentation containing best practices for creating the SVG icons as well as compiling them into an icon font can be found on the [Standard workflow in maintaining and creating icon fonts](https://wiki.fluidproject.org/display/fluid/Standard+workflow+in+maintaining+and+creating+icon+fonts) wiki page.

### Compiling Icon Fonts ###

Infusion-Icons comes with a grunt task for compiling all of the SVGs into an icon font.

The following dependencies are required to be installed first.

* Node.js
* Grunt
* ttfautohint
* fontforge

After all of the above dependencies are installed, run `npm install` to install the remaining node based dependencies.

```bash
npm install
```

To compile the font icon simply run `grunt` from the project root.

```bash
grunt
```

This will create the icon fonts in the `build` directory. Additionally CSS and HTML files will be generated alongside the fonts. The CSS file can be used for adding the icons to your web page; however, you can manually write your own CSS if preferred. The HTML file can be used to verify the output of the font generation.

_**NOTE**: Prior builds will be removed when a new build is run. Make sure to copy out any files needed before running a new build._

#### Custom Icon Fonts ####

For most projects you will not need all of the icons. For these cases it is recommended to create a custom icon font that includes only the icons needed. This will reduce the size of the font file generated.

To create a custom font you can run the `grunt build` command and provide a JSON config file.

```bash
grunt build --config="path/to/config.json"
```

The JSON config file may contain any of the settings listed for [grunt-webfont](https://github.com/sapegin/grunt-webfont). The config file must contain a `src` path(s) specifying the icons to be compiled into the font. It is also recommended to include a `codepoints` object containing the mapping between the icons and their generated codepoint. This will make it easier to maintain consistent codepoints for each icon in the font. In particular this is useful if you need to add additional icons later and don't want to have to change any of the markup or CSS for the existing icons used in your project. It is recommended that you version this config file in your project for future use and reference.

The following shows an example of a config file and can also be found in the repo as `configTemplate.json`.

```json
{
    "src": [
        "svg/iconName.svg"
    ],
    "options": {
        "font": "My-Icons",
        "codepoints": {
            "iconName": "0xE00e"
        }
    }
}
```

_**NOTE**: codepoints can take the form of an integer or a string representation of a hexadecimal number. It is typically easier to work with the hexidecimal string because this is the value typically used in the content property of the CSS declaration for the icon._


## License ##

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Licensed under the <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a> unless otherwise specified.
