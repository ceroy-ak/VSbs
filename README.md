![Logo](VSbs/res/128.png)

VitalSource Bookshelf e-book copier [BETA]

***
>Note: Illegal distribution of copyrighted material is a punishable offence including any Vitalsource content or books 
***
>Note: Each Screenshot takes 10 secs of extra time to let the image load, so total time will be 10 seconds x No.of pages
***
# Why?
I was kinda frustated by the fact that Vitalsource only allows to print 2 Pages at a time and considering my e-book being 2590 Pages, it becomes virtually impossible to print it one by one. So I made this Chrome extension which takes screenshot of all the pages one by one. The extension is currently having quite many issues, but at the end of day it works.

# How to use it?

It's quite simple
 1. Load the unpacked folder in the chrome://extensions page once you have enabled developer mode
 2. Now only have the e-book opened and close rest of the tabs
 3. Click on the VSbs logo and enter any number, it doesn't matter just click the button
 4. Once you have reached the end of the e-book just refresh the plugin in the chrome://extensions page or close the tab or do anything you like
 5. Use any of the open source bulk image crop tools to crop the images
 
 # Bugs
 
 - The input in the popup page is pretty much useless
 - The extension deosn't stop even after it reaches the last page of the e-book
 - The screenshot image is not cropped and hence you need to use any bulk cropping software
 - Many of the pages might be missing so have to manually use snipping tool or PrtScr(windows)
 - Each Screenshot takes 10 secs of extra time to let the image load
 
 >If you are a developer then I would request you to please fork this project and rectify these bugs
 
 # How is it working?
 
 The extension is using the captureVisibleTab API of chrome to capture the available content in the the tab and is iterating one by one to next page by manipulating the url every 10 secs
