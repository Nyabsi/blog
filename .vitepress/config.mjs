import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { defineConfig, createContentLoader } from 'vitepress'

const hostname = 'https://blog.sovellus.cc'

export default defineConfig({
  base: '/',
  title: "Nyabsi's Blog",
  description: "A blog where I dump my thoughts when I feel like it.",
  themeConfig: {
    nav: [
      { text: 'About', link: '/' },
    ],

    sidebar: [
      {
        text: 'Blogs',
        items: [
          { text: 'Make it, if it\'s so easy.', link: '/blogs/make-it-if-its-so-easy' },
          { text: 'Oh, you want environments? ', link: '/blogs/oh-you-want-environments' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Nyabsi' }
    ]
  },
  buildEnd: async (config) => {
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
  }
})
