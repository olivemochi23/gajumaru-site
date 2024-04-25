import { Rampart_One } from 'next/font/google'

const rampartOne = Rampart_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function RampartOne({ children }: { children: React.ReactNode }) {
  return <div className={rampartOne.className}>{children}</div>
}