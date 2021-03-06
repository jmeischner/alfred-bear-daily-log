# What's this?
This is a template which could be used in combination with [alfred](https://www.alfredapp.com), [bear](https://bear.app) and the [alfred-bear workflow](https://github.com/jmeischner/alfred-bear).

This should serve as a starting point to build an own template to work with a daily log.

This script part of this template basically checks if it's monday or another day of the week to link back to the note of the last workday.

## How it looks
With the *Panic Mode* theme it could look like
![Screenshot](https://github.com/jmeischner/alfred-bear-daily-log/blob/public/screenshot.png?raw=true)

## Possible Placeholders
- today
- next
- last

# Installation
Clone or download this repository and put it e.g. into your *bearTemplateDirectory* - `~/.bear-templates` - which is usually the place where your *bearTemplateIndex* - `index.yml` - file is located.
Open a *terminal window* in this directory and execute `npm install`.

Then put the following lines to your *index.yml*

```yml
  - title: Daily Log
    file: "<PathToRepo>/Daily Log.md"
    script: "<PathToRepo>/script.js"
    newWindow: <DisplayInANewWindow>
    var:
      DATE_FORMAT: "<DateFormat>"
```

### Variables
**PathToRepo**
Path where you put the source code of this repository to. Either absolute or relative to the `index.yml`.

**DisplayInANewWindow**
Should the note be displayed in a new bear window.

**DateFormat**
The date format for the note title. For the title of the screenshot it was `ddd., DD MMM. YYYY` used. For more information see [the docs](https://www.npmjs.com/package/date-and-time#api).