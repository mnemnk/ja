import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'
import navbar from './config/navbar'
import sidebar from './config/sidebar'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar,
				sidebar,
				github: 'https://github.com/mnemnk/mnemnk-app',
				logo: '/mnemnk.png',
				preBuildIconifyIcons: {
					'streamline-emojis': [
						'floppy-disk',
						'locked-with-key',
						'woman-technologist-2',
					],
				},
				themeColor: {
					light: '#f2f2f2',
					dark: '#18181b',
					primary: '#00c4a0',
					hover: '#00eceb',
					gradient: {
						start: '#00c4a0',
						end: '#00eceb'
					}
				},
				ga: 'G-XD0FENENSL',
			}),
			siteConfig: {
				title: 'Mnemnk',
				description: 'A multi-agent lifelogging platform',
			},
		}),
	],
})

export default config
