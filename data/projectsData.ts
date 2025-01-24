interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Payment Gateway Integration',
    description: `Implemented a seamless payment gateway using Stripe for a global e-commerce platform, enabling secure and efficient transactions for thousands of users daily.`,
    imgSrc: '/static/images/projects/stripe.svg',
    href: 'https//maticrobots.com',
  },
  {
    title: 'Distributed Log Aggregation',
    description: `Designed and developed a fault-tolerant, distributed log aggregation system to improve the scalability and monitoring of real-time applications.`,
    imgSrc: '/static/images/projects/log-aggregation.png',
    href: 'https://github.com/kreloaded/distributed-event-logging',
  },
  {
    title: 'SlackSharp',
    description: `SlackSharp streamlines Slack communication by enabling users to craft messages in their preferred style (formal, concise, or contextual). It also includes speech-to-formatted AI text conversion, enhancing message quality and efficiency.`,
    imgSrc: '/static/images/projects/slack.png',
    href: 'https://github.com/kreloaded/SlackSharp',
  },
]

export default projectsData
