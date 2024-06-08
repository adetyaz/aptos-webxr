import { Artist } from '@/components/artist'
import { Categories } from '@/components/categories'
import { Details } from '@/components/details'
import { Hero } from '@/components/hero'
import { Highlight } from '@/components/highlight'
import { More } from '@/components/more'
import { Trending } from '@/components/trending'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Hero />
			<Trending />
			<Artist />
			<More />
			<Details />
		</main>
	)
}
