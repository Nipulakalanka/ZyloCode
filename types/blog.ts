export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  date: string
  readTime: number
  author: {
    name: string
    image: string
    role: string
  }
  tags: string[]
}