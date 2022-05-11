aliases: [vite template notes]
tags: [HTML, CSS, typescript]
note type: Main

---

# Backroads Tour Company

This is a project that is a basic tour site. This comes from john smilga's course. This is my implementation of it using vite and windicss.

- The colors used for this project are

  - blue 50-900
  - slate 50-900

  - white

The config for this project is

```js
export default defineConfig({
	theme: {
		extend: {
			boxShadow: {
				"bottom-right-5|15-20": "0 5px 15px hsla(0,0,0,0.2)",
				"bottom-right-5|15-90": "0 5px 15px hsla(0,0,0,0.9)",
			},
			fontFamily: {
				primary: ["Lato", "sans-serif"],
			},
		},
	},
});
```

To start up the server use the following command.

```bash
docker-compose up -d server
```

To download packages use this one

```bash
docker-compose run --rm npm install
```

The npm service is a _utility container_ that is used to access the node package manager called npm.

The config file for vite looks like this

```javascript
export default defineConfig({
	server: {
		host: "0.0.0.0",

		port: 3000,

		watch: {
			usePolling: true,
		},
		plugins: [
			pugPlugin(),
			WindiCSS(),
			mpa({ open: false, scanFile: "index.html" }),
		],
	},
});
```

> [!Warning]
> I could not get hmr to work at all automatically it might be that im using windows but please don't get rid of watch at all or the use polling setting that put in it is very important. This means that every time you make a change you must save the file to see any changes. **Don't change any of the settings for the mpa options if you get rid of the open option you'll get a bug if you get rid of the scanFile option it will expect to find a `main{.ts?x.js?x} file in each page folder`**

## Folders and Files

| Folder  | Files                                                         |
| ------- | ------------------------------------------------------------- |
| app     | package.json, package-lock.json, tsconfig.json vite.config.ts |
| layouts | main.pug, home.pug                                            |
| mixins  | navbar.pug                                                    |
| src     | main.ts, style.css                                            |
| pages   | index/index.html,home/index.html                              |
