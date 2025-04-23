import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Blog.module.css'

interface BlogPost {
  id: number
  attributes: {
    title: string
    excerpt: string
    slug: string
    publishedAt: string
    featuredImage: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }
}

interface BlogProps {
  posts: BlogPost[]
}

export default function Blog({ posts }: BlogProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className={styles.blog}>
      <div className="wrapper">
        <h2 className={styles.title}>Latest Blog Posts</h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.attributes.featuredImage.data.attributes.url}`}
                  alt={post.attributes.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <time className={styles.date}>
                  {formatDate(post.attributes.publishedAt)}
                </time>
                <h3 className={styles.postTitle}>{post.attributes.title}</h3>
                <p className={styles.excerpt}>{post.attributes.excerpt}</p>
                <Link
                  href={`/blog/${post.attributes.slug}`}
                  className={styles.readMore}
                >
                  Read More
                  <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 