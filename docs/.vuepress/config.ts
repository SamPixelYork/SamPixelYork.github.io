import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'en-US',
    title: 'Sam Pixel York',
    description: 'Personal website',
    base: '/',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            {
                text: 'Blog',
                link: '/blog/'
            },
            {
              text: 'Portfolio',
              children: [
                  {
                      text: 'Calculator',
                      link: '/portfolio/calculator/'
                  },
                  {
                      text: 'Todo List',
                      link: '/portfolio/todolist'
                  }
              ]
            },
            {
                text: 'About',
                link: '/about/'
            },
            {
                text: 'Contact',
                link: '/contact/'
            }
        ],
        repo: 'SamPixelYork/SamPixelYork.github.io',
        sidebar: [
            // SidebarItem
            {
                text: 'Blog',
                link: '/blog/',
            },
            {
                text: 'Portfolio',
                children: [
                    {
                        text: 'Calculator',
                        link: '/portfolio/calculator/'
                    },
                    {
                        text: 'Todo List',
                        link: '/portfolio/todolist'
                    }
                ]
            },
            {
                text: 'About',
                link: '/about/'
            },
            {
                text: 'Contact',
                link: '/contact/'
            }

        ]
    },
})