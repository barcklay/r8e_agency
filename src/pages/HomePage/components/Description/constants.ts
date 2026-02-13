type DescriptionCard = {
  avatar?: string
  text: string
  username: string
}
type DescriptionCards = DescriptionCard[]

export const CARDS: DescriptionCards = [
  {
    avatar: '/images/avatar.jpg',
    text: 'We’ve seen the cycle: hype, noise, rinse, repeat. But real progress happens when ideas meet code — and survive contact with users. We don’t chase moments. We engineer systems that earn them.',
    username: '@Vlad'
  },
  {
    text:
      'Web3 is more than a technical leap — it’s a shift in logic. From trust to verification, from platforms to protocols.\n' +
      'We’re not here to speculate on the future. We’re here to implement it.',
    username: '@barcklay_z'
  },
  {
    text:
      'We don’t romanticize decentralization.\n' +
      'We treat it like infrastructure — robust, composable, and provable.\n' +
      'The goal isn’t freedom for its own sake. It’s systems you don’t have to trust blindly.',
    username: '@Vlad'
  },
  {
    avatar: '/images/avatar.jpg',
    text:
      'Real innovation isn’t loud. It’s structural shifts that make things simpler, safer, and yours.\n' +
      'Web3 is full of code — but little is composable, durable, or honest. We build for the long run — primitives that don’t break when markets do.',
    username: '@Vlad'
  },
  {
    text: "Unlock the future of the internet with #Web3! Decentralized, secure, and transparent, it's revolutionizing the way we interact online. Join the movement and discover a new era of digital freedom! #Web3Revolution #Blockchain",
    username: '@Vlad'
  }
]
