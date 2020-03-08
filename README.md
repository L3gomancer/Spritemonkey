# Spritemonkey

A Tampermonkey user script to download an image from https://www.spriters-resource.com and then click the link to go to the next page when the "d" key is pressed

### Explanation

I wanted to automatically download an image from a website and then click the link to go to the next page in a controllable way. Unfortunately each image is on its own page. If all the images were all on the same page I could download them all with my browser extension DownloadThemAll but I cant. I have to right click, save, scroll down, aim my mouse and click the link "Next Sheet". This gets tiresome. So I turned to user scripts.

[Tampermonkey](https://www.tampermonkey.net) is a user script manager that lives in an extension for Firefox. It has a dashboard to create your scripts and toggle them on or off. It has a configuration syntax or "header" in JS comments, that's where you declare what sites the script runs on, what libraries to link in, metadata for organising, and special functions to do what JavaScript cannot e.g. downloading. The [documentation](https://www.tampermonkey.net/documentation.php) explains what's what.

### Usage

Copy the script into your own Tampermonkey script. Feel free to modify it, I can't stop you, it's out in the wild now.

### A Brief Tour Of The Script

`.click()` clicks a link and `img[alt="Next"]` is the selector \
`GM_download({})` downloads from a URL, `img[src*="/resources/sheets"]` selects the image element and then `.getAttribute()` grabs the URL fragment from the "src" attribute to pass to `GM_download` \
I wrapped the whole thing in an event listener `.addEventListener()` listening for key "d"

### References

[Example sprite sheet](https://www.spriters-resource.com/game_boy_gbc/metroid2/sheet/1778/) \
[Methods for clicking](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click) \
[Get attribute](https://www.w3schools.com/jsref/met_element_getattribute.asp) \
[Keyboard event listener](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) \
[Selector reference. It's for jQuery but applies](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)
