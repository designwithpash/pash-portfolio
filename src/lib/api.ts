interface NextFetchRequestConfig extends RequestInit {
  next?: {
    revalidate?: number | false
  }
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

export async function fetchPosts() {
  const res = await fetch(`${STRAPI_URL}/api/posts?populate=*`, {
    next: { revalidate: 60 } // Revalidate every minute
  } as NextFetchRequestConfig)

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  return res.json()
}

export async function fetchPostBySlug(slug: string) {
  const res = await fetch(
    `${STRAPI_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`,
    {
      next: { revalidate: 60 }
    } as NextFetchRequestConfig
  )

  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }

  const { data } = await res.json()
  return data[0]
}

export async function fetchRecentPosts(limit = 3) {
  const res = await fetch(
    `${STRAPI_URL}/api/posts?sort=publishedAt:desc&pagination[limit]=${limit}&populate=*`,
    {
      next: { revalidate: 60 }
    } as NextFetchRequestConfig
  )

  if (!res.ok) {
    throw new Error('Failed to fetch recent posts')
  }

  return res.json()
} 