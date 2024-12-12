import { blogPosts } from '@/data/blog-posts'
import type { BlogPost } from '@/types/blog'

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit)
}