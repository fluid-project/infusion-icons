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

## License ##

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Licensed under the <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a> unless otherwise specified.
