import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'
import navbar from './config/navbar'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar,
				sidebar: {
					'/guide': [
						{
							title: 'はじめに',
							collapsible: true,
							items: [
								{
									title: 'イントロダクション',
									to: '/guide/introduction/',
								},
								{
									title: 'インストール',
									to: '/guide/installation/',
								},
								{
									title: 'Getting Started',
									to: '/guide/getting-started/',
								},
								{
									title: 'Mnemnkのインストール',
									to: '/guide/installation/',
								},
								{
									title: 'Lifelogging Agents',
									to: '/guide/lifelogging-agents/',
								},
							]
						},
						{
							title: 'Core Concepts',
							collapsible: true,
							items: [
								{
									title: 'Agents',
									to: '/guide/agents/',
								},
								{
									title: 'Flow and Channel',
									to: '/guide/flow-and-channel/',
								},
							]
						},
					],
				},
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
