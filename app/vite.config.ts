import {defineConfig} from "vite"
import WindiCSS from 'vite-plugin-windicss'
import pugPlugin from 'vite-plugin-pug'
import mpa from 'vite-plugin-mpa' 

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  
  plugins: [
    pugPlugin(),
    WindiCSS(),
    mpa({open:false, scanFile:"index.html"})
    
  ],
})