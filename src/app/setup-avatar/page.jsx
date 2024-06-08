'use client'

import { AvatarCreator } from '@readyplayerme/react-avatar-creator'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const config = {
	clearCache: true,
	bodyType: 'fullbody',
	quickStart: false,
	language: 'en',
}

const style = {
	width: '100%',
	height: '80vh',
	border: 'none',
	marginBlock: 'auto',
}

const SUBDOMAIN = 'https://phygitals.readyplayer.me/'

export default function SetupAvatar() {
	const [model, setModel] = useState('')
	const router = useRouter()

	const handleOnAvatarExported = (event) => {
		console.log(`Avatar URL is: ${event.data.url}`)

		// router.push('/collection/1')
	}

	return (
		<main className='h-screen '>
			<section className='h-5/6'>
				<AvatarCreator
					subdomain='SUBDOMAIN'
					config={config}
					style={style}
					onAvatarExported={handleOnAvatarExported}
				/>
			</section>
		</main>
	)
}
