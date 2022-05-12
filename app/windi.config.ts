import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
	
	theme: {
		content: {
			blank: "''"
		},
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
;
