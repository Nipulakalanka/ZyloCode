import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { TechStacks } from '@/components/tech-stacks'
import { Products } from '@/components/products'
import { Team } from '@/components/team'
import { Stats } from '@/components/stats'
import { Blog } from '@/components/blog'
import { Testimonials } from '@/components/testimonials/Testimonials'
import { FAQ } from '@/components/faq'
// import { QuestionSection } from '@/components/questionAsk'
import { QuestionSection } from '@/components/question/QuestionSection'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'



export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <TechStacks />
      <Products />
      <Stats />
      <Team />
      <Blog />
      <Testimonials />
      <FAQ />
      <QuestionSection />
      <Contact />
      <Footer />
    </main>
  )
}

