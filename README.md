# Infusion-Icons

SVG icons which can be used directly or compiled into an icon font.
The icons have been created based on the
[Infusion Icons Visual Style Guide](https://wiki.fluidproject.org/display/fluid/Infusion+Icons+Visual+Style+Guide).

## Documentation

The documentation containing best practices for creating the SVG icons as well as compiling them into an icon font can
be found on the [Standard workflow in maintaining and creating iconfonts](
https://wiki.fluidproject.org/display/fluid/Standard+workflow+in+maintaining+and+creating+icon+fonts) wiki page.

## Available Icons

The original icons can be found at the root of the the svg directory. Additional fonts from third party sources may be
pulled in as subdirectories of svg.

### Third Party Icons

#### Font Awesome

The free [Font Awesome](https://fontawesome.com/icons?d=gallery&s=brands,regular,solid&m=free) icons are available for
use when compiling custom icon fonts.

### Compiling Icon Fonts

#### On a Local Machine

Infusion-Icons comes with a `grunt` task for compiling all of the SVGs into an icon font.

The following dependencies must be installed first:

* [Node.js](https://nodejs.org/en/)
* [Grunt](https://gruntjs.com)
* ttfautohint
* fontforge

_**NOTE**: See the [Installation documentation](https://github.com/sapegin/grunt-webfont#installation) from
`grunt-webfont` for how to install `ttfautohint` and `fontforge` on your platform._

After installing the above dependencies, run `npm install` to install the remaining node based dependencies.

```bash
npm install
```

To compile the font icon simply run `grunt` from the project root.

```bash
grunt
```

This will create the icon fonts in the `build` directory. Additionally CSS and HTML files will be generated alongside
the fonts. The CSS file can be used for adding the icons to your web page; however, you can manually write your own CSS
if preferred. The HTML file can be used to verify the output of the font generation.

_**NOTE**: Prior builds will be removed when a new build is run. Make sure to save any needed files before running a new
build._

#### In a Vagrant Virtual Machine

You can also build the fonts in a Vagrant VM that has all the required libraries.  Before you can do this, you will need
to:

1. Install [Vagrant](https://www.vagrantup.com) and [VirtualBox](https://www.virtualbox.org).
2. Install the [Vagrant CI Plugin](https://github.com/gpii-ops/vagrant-gpii-ci) using a command like:
   `vagrant plugin install vagrant-gpii-ci`

Once you have satisifed these requirements, you can build the fonts in a VM using commands like:

```bash
vagrant up
vagrant ci test
```

When this process completes, you should see console output like the following:

```bash
==> linux: Font Infusion-Icons with 49 glyphs created.
==> linux: Done.
```

The resulting font files and CSS file can be found in the `build` subdirectory of your repository on the host machine.  
If you have already run these commands and want to rebuild the font, you can skip the initial provisioning and just
rebuild the fonts using a command like the following:

```bash
vagrant ci test --stage build
```

Once you have provisioned the VM by running `vagrant up` and then `vagrant ci test`, you can also use the VM to build a
custom font (see below).  Before you can run those commands, you need to run `vagrant ssh` to login to the VM.  Once you
have done this, navigate to the `/vagrant` subdirectory.  You should then be able to continue as outlined in the next
section.  

```bash
vagrant ssh

cd /vagrant
grunt build --config="path/to/config.json"
```

_**NOTE**: To build [Custom Icon Fonts](#custom-icon-fonts) you will either need to create a config file in the
repository directory, or copy it to the VM using a program like `scp` or `sftp`._

### Custom Icon Fonts

For most projects you will not need all of the icons. For these cases it is recommended to create a custom icon font
that includes only the icons needed. This will reduce the size of the font file generated.

To create a custom font you can run the `grunt build` command and provide a JSON config file.

```bash
grunt build --config="path/to/config.json"
```

The JSON config file may contain any of the settings listed for [grunt-webfont](
https://github.com/sapegin/grunt-webfont). The config file must contain a `src` path(s) specifying the icons to be
compiled into the font. It is also recommended to include a `codepoints` object containing the mapping between the icons
and their generated codepoint. This will make it easier to maintain consistent codepoints for each icon in the font.
This is particularly useful if you need to add additional icons later and don't want to change any of the markup or CSS
for the existing icons used in your project. It is recommended that you version this config file in your project for
future use and reference.

The following shows an example of a config file and can also be found in the repo as `templates/configTemplate.json`.

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

_**NOTE**: Codepoints can take the form of an integer or a string representation of a hexadecimal number. It is
typically easier to work with the hexidecimal string because it is similar to what is used for the content property in
the CSS declaration for the icon._

## Third Party Icons in Infusion-Icons

### CC-BY-4.0

* [Font Awesome v5.5.0](https://fontawesome.com)

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
    <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
</a>
<br />Licensed under the <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons
Attribution 4.0 International License</a> unless otherwise specified.
