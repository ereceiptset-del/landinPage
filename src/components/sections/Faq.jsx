import { faq, policies } from '../../content/site.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Accordion from '../ui/Accordion.jsx'
import Reveal from '../ui/Reveal.jsx'

// A confirmed policy in site.js replaces the neutral default answer.
const items = faq.items.map((item) => ({
  q: item.q,
  a: (item.policy && policies[item.policy]) || item.a,
}))

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-line bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading id="faq-title" title={faq.title} text={faq.text} />
        <Reveal className="mx-auto mt-12 max-w-[720px]">
          <Accordion items={items} defaultOpen={0} />
        </Reveal>
      </Container>
    </section>
  )
}
