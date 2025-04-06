import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { defineConfig, createContentLoader } from 'vitepress'

const hostname = 'https://blog.sovellus.cc'

export default defineConfig({
  base: '/',
  title: "Nyabsi's Diary",
  description: "Thoughts, Reverse Engineering, Spatial Computing, Virtual Reality and Programming!",
  themeConfig: {
    nav: [],
    sidebar: [
      {
        text: 'Ramblings',
        items: [
          { text: 'Make it, if it\'s so easy.', link: '/entries/en/make-it-if-its-so-easy' },
          { text: 'Why do I use a Vive Pro in 2025?', link: '/entries/en/why-do-i-use-vive-pro-in-2025' }
        ]
      },
      {
        text: 'Projects',
        items: [
          { text: 'Understanding internals of PicoOS environments', link: '/entries/en/oh-you-want-environments' }
        ]
      },
      {
        text: 'Reviews',
        items: [
          { text: 'Pico 4 Ultra: The Budget Apple Vision Pro', link: '/entries/en/pico-4-ultra-review' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nyabsi' },
      { icon: 'kofi', link: 'https://ko-fi.com/nyabsi' }
    ]
  },
  buildEnd: async (config) => {
    /*
    const feed = new Feed({
      title: 'Nyabsi\'s Blog',
      description: 'A blog where I dump my thoughts when I feel like it.',
      id: hostname,
      link: hostname,
      language: 'en',
      copyright:
        'Copyright (c) 2024, Nyabsi'
    })

    const posts = await createContentLoader('blogs/*.md', {
      excerpt: true,
      render: true
    }).load()
  
    posts.sort(
      (a, b) =>
        + new Date(b.frontmatter.date) -
        + new Date(a.frontmatter.date)
    )

    for (const { url, excerpt, frontmatter, html } of posts) {
      feed.addItem({
        title: frontmatter.title,
        id: `${hostname}${url}`,
        link: `${hostname}${url}`,
        description: excerpt,
        content: html,
        author: [
          {
            name: 'Nyabsi',
            email: 'nyabsi@sovellus.cc',
            link: 'https://blog.sovellus.cc/'
          }
        ],
        date: frontmatter.date
      })
    }
  
    writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
    */
  }
})
