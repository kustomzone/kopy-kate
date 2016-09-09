# kopy-kate v0.7

## Install instructions:

## 1. Simply go on ZeroNet and clone a ZeroTalk site. Then download this source code, copy all of the files contained inside the folder, and paste them inside your newly created ZeroTalk clone folder. Your private key will be inside data/users.json in your ZeroNet folder.

## 2. Go to the content.json inside the main folder and find the "ignore": command. Make sure it looks like this:
 "ignore": "(data/users/.*db|data/users/.*/.*|.*.py)",

## 3. Now add these files to the "files": list:

  "js/all.js": {
   "sha512": "",
   "size":
  },
  "js/search-a.js": {
   "sha512": "",
   "size":
  },
  "js/share.js": {
   "sha512": "",
   "size":
  },

## 4. Go to your site on ZeroNet and then login with your username by creating a first post. 

## 5. Try signing and publishing all of your files inside the web-browser (drag the ZeroNet menu button to the left with your mouse.)

## 6. Congrats! You now have a working clone of kopy-kate. All of the .js files have been unminified for ease of editing.
