export const metadata = {
  title: 'UNav - home',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import FeedbackForm from '@/components/form'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <FeedbackForm/>
      <Testimonials />
      <Newsletter />
    </>
  )
}
