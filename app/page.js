'use client';

import { useRouter } from 'next/navigation';

import { HomeCards } from './lib/utils'
import Card from '@/components/Card'

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/notes')
  }
  const renderCards = () => {
    return HomeCards.map((card) => {
      return (
        <Card key={card.title} handleClick={handleClick}>
          <h2 className="mb-5 text-xl font-bold">{card.title}</h2>
          <p>{card.description}</p>
          <p className="mt-5 text-blue-500">{card.link.text}</p>
        </Card>
      )
    })
  }
  return (
    <main className="min-h-screen">
      <section className="flex p-10 justify-between">
        {renderCards()}
      </section>
    </main>
  )
}
