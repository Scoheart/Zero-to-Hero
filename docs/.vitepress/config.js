let Config = {
    title: "Scoheart",
    themeConfig: {
        siteTitle: "Scoheart Blog",
        logo: "/logo.png",
        outlineTitle: '👋 Article Outline',
        lastUpdated: true,
        lastUpdatedText: 'Updated Date',
        docFooter: {
            prev: "Previous Page",
            next: "Next Page"
        },
        editLink: {
            pattern: 'https://github.com/Scoheart'
        },
        algolia: {
            appId: ""
        },
        nav: [
            {
                text: "Front-End",
                items: [
                    {
                        text: "Roadmap",
                        items: [
                            { text: "🍀 Overview", link: '/front-end/', activeMatch: '/front-end/' },
                            { text: "🌱 Elementary", link: '/front-end/elementary/', activeMatch: '/front-end/elementary/' },
                            { text: "🌿 Intermediate", link: '/front-end/intermediate/', activeMatch: '/front-end/intermediate/' },
                            { text: "🌲 Advanced", link: '/front-end/advanced/', activeMatch: '/front-end/advanced/' },
                            { text: "🎄 Extension", link: '/front-end/extension/', activeMatch: '/front-end/extension/' },
                            { text: "🍃 Thinking in", link: '/front-end/Thinking in/', activeMatch: '/front-end/Thinking in/' },
                        ]
                    }
                ],
            },
            {
                text: "back-End",
                items: [
                    {
                        text: "Roadmap",
                        items: [
                            { text: "🛠️ In construction", link: '/front-end/extension/', activeMatch: '/front-end/extension/' }
                        ]
                    }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/scoheart' },
            { icon: 'twitter', link: 'https://github.com/scoheart' },
            { icon: 'discord', link: 'https://github.com/scoheart' },
            { icon: 'facebook', link: 'https://github.com/scoheart' },
            { icon: 'youtube', link: 'https://github.com/scoheart' },
            { icon: 'instagram', link: 'https://github.com/scoheart' },
            { icon: 'slack', link: 'https://github.com/scoheart' },
        ],
        sidebar: {
            '/front-end/': [],
            '/front-end/elementary/': [],
            '/front-end/intermediate/': [],
            '/front-end/advanced/': [],
            '/front-end/extension/': [],
            '/front-end/Thinking in Programming/': [],
        },
        footer: {
            message: "MIT",
            copyright: "copyright"
        }

    }
}

const site = {
    FE: {
        navName: 'Front-end',
        path: "/front-end/",
        subNav: [
            // Front-End/elementary
            {
                subNavName: 'elementary',
                path: 'elementary/',
                sidebar: [
                    {
                        sidebarName: 'HTML',
                        path: 'HTML/',
                        subSidebar: []
                    },
                    {
                        sidebarName: 'CSS',
                        path: 'CSS/',
                        subSidebar: []
                    },
                    {
                        sidebarName: 'JavaScript',
                        path: 'JavaScript/',
                        subSidebar: ['ECMAScript', 'JS Runtimes', 'ES Modules', 'Object', 'Array', 'Function', 'Closure', "Var let const", 'Prototype', 'Promise', 'Async await', 'Class']
                    }
                ]
            },
            // Front-End/intermediate
            {
                subNavName: 'intermediate',
                path: 'intermediate/',
                sidebar: [
                    {
                        sidebarName: 'NodeJS',
                        path: 'NodeJS/',
                        subSidebar: []
                    },
                    {
                        sidebarName: 'Packages Management',
                        path: 'Pakcages Management/',
                        subSidebar: ['npm', 'yarn', 'pnpm']
                    },
                    {
                        sidebarName: 'Front-End Frameworks',
                        path: 'Front-End Frameworks/',
                        subSidebar: ['React', 'Vue.js', 'Angular', 'Preact', 'Ember', 'Svelte', 'Alpine.js', 'Lit', 'Solid', 'Qwik', 'Stencil']
                    },
                    {
                        sidebarName: 'Rendering Frameworks',
                        path: 'Rendering Frameworks/',
                        subSidebar: ['Nuxt', 'Next.js', 'Gatsby', 'Astro', 'Remix', 'Docusaurus', 'SvelteKite', 'Eleventy']
                    }
                ]
            },
            // Front-End/advanced
            {
                subNavName: 'advanced',
                path: 'advanced/',
                sidebar: [
                    {
                        sidebarName: 'JS Runtimes',
                        path: 'JS Runtimes/',
                        subSidebar: ['Node', 'Deno', 'Bun', 'Broswer']
                    },
                    {
                        sidebarName: 'CSS Pre|Post-Processors',
                        path: 'CSS Pre|Post-Processors/',
                        subSidebar: ['Sass', 'PostCSS', 'Less', 'Stylus', "Assembler CSS"]
                    },
                    {
                        sidebarName: 'CSS Frameworks',
                        path: 'CSS Frameworks/',
                        subSidebar: ['Bootstrap', 'Meterialize CSS', 'Ant Design', 'Semantic UI', "Bulma", 'Foundation', 'UIKit', 'Tachyons', 'Primer', 'Tailwind CSS', 'PureCSS', 'Halfmoon']
                    },
                    {
                        sidebarName: 'CSS in JavaScript',
                        path: 'CSS in JavaScript/',
                        subSidebar: ['UnoCSS', 'vanilla-extract', 'Styled Components', 'Stitches', "Emotion"]
                    },
                    {
                        sidebarName: 'State Management',
                        path: 'State Management/',
                        subSidebar: ['Zustand', 'Pinia', 'Jotai', 'XState', 'Recoil', 'Valtio', 'Redux', 'Signals', 'Mobx', 'Nano stores']
                    },
                    {
                        sidebarName: 'JavaScript Flavors',
                        path: 'JavaScript Flavors/',
                        subSidebar: ['TypeScript', 'Elm', 'CoffeeScript', 'Flow', 'PureScript', 'ClojureScript', 'ReScript', 'Reason', 'Imba']
                    },
                    {
                        sidebarName: 'Task Runner',
                        path: 'State Management/',
                        subSidebar: ['Gulp', 'Grunt', "npm Script"]
                    },
                    {
                        sidebarName: 'Build Tools',
                        path: 'Build Tools/',
                        subSidebar: ['Webpack', 'Parcel', "Rollup", 'Browerify', 'tsc CLI', 'Rome', 'Snowpack', 'SWC', 'esbuild', 'Vite', 'WMR', 'Turbopack', 'Rspack']
                    },
                    {
                        sidebarName: 'Monorepo Tools',
                        path: 'Monorepo Tools/',
                        subSidebar: ['pnpm', 'Rush', "Torborepo", 'Yarn Workspaces', 'npm Workspaces', 'Yalc', 'Lerna',
                            'Nx']
                    },
                    {
                        sidebarName: 'Test Tools',
                        path: 'Test Tools/',
                        subSidebar: ['Vitest', 'Testing Library', 'Playwright', 'Jest', 'Storybook', 'Cypress', 'Puppeteer', 'Mocha', 'AVA', 'Jasmine', 'WebdriverIO', 'TestCafe', 'Selenium']
                    },
                    {
                        sidebarName: 'Vue Ecosystem',
                        path: 'Vue Ecosystem/',
                        subSidebar: ['Slidev', 'Nuxt 3', 'Vue Element Admin', 'AutoAnimate', 'Headless UI', '1Directus', 'VueUse', 'Vitest', 'Pinia', 'Element Plus']
                    },
                    {
                        sidebarName: 'React Ecosystem',
                        path: 'React Ecosystem/',
                        subSidebar: ['Next.js', 'tRPC', 'Mantine', 'Excalidraw', 'Zustand', 'create-t3-app', 'Docusaurus', 'Remix', 'MUI', 'react-use', 'Chakra UI', 'React Hook Form', 'TanStack Query', 'Ant Design', 'Serverless Stack']
                    },
                    {
                        sidebarName: 'Mobile',
                        path: 'Mobile/',
                        subSidebar: ['React Native', 'Expo', 'Ionic', 'React Native Skia', 'Quasar', 'NativeBase', 'Flipper', 'Capacitor', 'FlashList', 'NativeWind', 'Cordova']
                    },
                    {
                        sidebarName: 'Desktop',
                        path: 'Desktop/',
                        subSidebar: ['Electron', 'Tauri', 'Nativefier', 'Neutralino', 'electron-builder']
                    },
                    {
                        sidebarName: 'Back-End Frameworks',
                        path: 'Back-End Frameworks/',
                        subSidebar: ['Express', 'Nest', 'Fastify', 'Strapi', 'Koa']
                    },
                    {
                        sidebarName: 'JavaScript Edge|Serverless Runtimes',
                        path: 'JavaScript Edge|Serverless Runtimes/',
                        subSidebar: ['AWS Lambda', 'Vercel Edge Runtime', 'Google Cloud Functions', 'Netlify Edge Functions', 'Cloudflare Workers', 'Fly.io', 'Digital Ocean Functions', 'Fastly Edge Compute', 'Akamai EdgeWorkers']
                    },
                    {
                        sidebarName: 'Non-JavaScript Languages',
                        path: 'Non-JavaScript Languages/',
                        subSidebar: ['Rust', 'Go']
                    }
                ]
            },
            // Front-End/extension
            {
                subNavName: 'extension',
                path: 'extension/',
                sidebar: [
                    {
                        sidebarName: 'Libraries',
                        path: 'Libraries/',
                        subSidebar: ['Lodash', 'JQuery', 'Zod', 'Immer', 'Underscore.js', 'Ramda', 'stdlib', 'Partytown', 'Immer', 'Mitosis']
                    },
                    {
                        sidebarName: 'Date Management',
                        path: 'Date Management/',
                        subSidebar: ['Moment', 'date-fns', 'Zod', 'Day.js', 'Luxon']
                    },

                    {
                        sidebarName: 'Data Fecthing',
                        path: 'Data Fecthing/',
                        subSidebar: ['Axios', 'Apollo Client', 'React Query', 'swr', 'tRPC', 'Ramda', 'Relay']
                    },
                    {
                        sidebarName: 'Data Visualization',
                        path: 'Data Visualization/',
                        subSidebar: ['Chart.js', 'D3', 'Highcharts', 'Rcharts', 'Mermaid', 'Plotly', 'Echarts', 'Nivo', 'Vitory', 'Visx']
                    },
                ]
            },
            // Front-End/Thinking in
            {
                subNavName: 'Thinking in',
                path: 'Thinking in/',
                sidebar: [
                    {
                        sidebarName: 'Design Patterns',
                        path: 'Design Patterns/',
                        subSidebar: ['Creational Patterns', 'Structural Patterns', 'Behavioral Patterns', 'Six Principles']
                    }, 
                ]
            }
        ]
    }
}

// rendering sidebar
site.FE.subNav.forEach(subNav => {

    const subSidebar = subNav.sidebar.map(sidebar => {

        const items = sidebar.subSidebar.map(article => {
            return itemsify(article, site.FE.path + subNav.path + sidebar.path + article)
        })

        return subSidebarify(sidebar.sidebarName, items)
    })

    Config.themeConfig.sidebar[site.FE.path + subNav.path] = subSidebar
})

function itemsify(text, link) {
    return {
        text,
        link
    }
}

function subSidebarify(text, items) {
    return {
        text,
        collapsed: true,
        items
    }
}

export default Config







