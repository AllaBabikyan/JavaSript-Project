# JavaSript-Project
How to build your Javascript-Project
----------------------------

Clone a copy of the main Javascript-Project git repo by running:

```bash
git clone https://github.com/AllaBabikyan/JavaSript-Project.git
```

Enter the jquery directory and run the build script:
```bash
cd jquery && npm run build
```
The built version of jQuery will be put in the `dist/` subdirectory, along with the minified copy and associated map file.

If you want to create custom build or help with jQuery development, it would be better to install [grunt command line interface](https://github.com/gruntjs/grunt-cli) as a global package:

```
npm install -g grunt-cli
```
Make sure you have `grunt` installed by testing:
```
grunt -V
```
Now by running the `grunt` command, in the jquery directory, you can build a full version of jQuery, just like with an `npm run build` command:
```
grunt
```

There are many other tasks available for jQuery Core:
```
grunt -help
