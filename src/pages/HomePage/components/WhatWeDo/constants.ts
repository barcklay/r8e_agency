export interface Block {
  icon: string
  title: string
  text: string
  aosAnimation: string
}
type Blocks = Block[]

export const BLOCKS: Blocks = [
  {
    icon: 'console-underscore',
    title: 'Smart Contract Development',
    text: "We build secure and efficient smart contracts on various blockchain platforms, and we'll thoroughly audit existing ones",
    aosAnimation: 'fade-left'
  },
  {
    icon: 'console-dashes',
    title: 'Dapps',
    text: 'We create user-friendly dApps that leverage existing web3 protocols and tools',
    aosAnimation: 'fade-left'
  },
  {
    icon: 'console-star',
    title: 'Blockchain Integration',
    text: 'We seamlessly integrate blockchain technology into your existing systems, enhancing security, transparency, and efficiency',
    aosAnimation: 'fade-left'
  },
  {
    icon: 'console-arrows',
    title: 'Web3 Consulting & Strategy',
    text: 'We help to navigate web3 landscape, providing guidance on how to leverage it for your specific needs',
    aosAnimation: 'fade-right'
  },
  {
    icon: 'transfer-dash',
    title: 'Interoperability Solutions',
    text: 'We help you connect different blockchain network',
    aosAnimation: 'fade-right'
  },
  {
    icon: 'console-dots',
    title: 'Rapid Prototyping',
    text: 'We can quickly turn your web3 ideas into working prototypes, allowing you to test and iterate rapidly',
    aosAnimation: 'fade-right'
  }
]
