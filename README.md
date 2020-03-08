# Spritemonkey

A Tampermonkey user script to download an image from https://www.spriters-resource.com and then click the link to go to the next page when the "d" key is pressed

### Explanation
I wanted to automatically download an image from a website and then click the link to go to the next page in a controllable way. Unfortunately each image is on its own page. If all the images were all on the same page I could download them all with my browser extension DownloadThemAll but I cant.  I have to right click, save, scroll down, aim my mouse and click the link "Next Sheet". This gets tiresome. So I turned to user scripts.

[Tampermonkey](https://www.tampermonkey.net) is a user script manager that lives in an extension for Firefox. It has a dashboard to create your scripts and toggle them on or off. It has a configuration syntax or "header" in JS comments, that's where you declare what sites the script runs on, what libraries to link in, metadata for organising, and special functions to do what JavaScript cannt e.g. downloading. The [documentation](https://www.tampermonkey.net/documentation.php) explains what's what.
