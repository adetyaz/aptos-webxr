'use client'
import { useRouter } from 'next/router'
// import { VoiceRecorder } from '@/components/ui/voice-recorder'
// import { Speech } from '@/utils/speechSynthesis'

// import { Metacard } from '@/components/ui/meta-card'
// import { AframeContainer } from '@/components/ui/aframe-container'
// import useFetchData from '@/hooks/useFetchData'
// import { AvatarContainer } from '../../../components/ui/avatar-container'
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle,
// } from '@/components/ui/card'
// import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc'
// import { Avatar } from '@readyplayerme/visage'
// import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Collection({ params }) {
	const router = useRouter()
	const { model } = router.query

	console.log(model)
	// const [showAnimationList, setShowAnimationList] = useState(false)
	// const [currentAnimation, setCurrentAnimation] = useState('')
	// const [unlock, setUnlock] = useState(false)

	return (
		// <main className='relative h-screen'>
		// 	<a-scene className='h-48'>
		// 		{data.locked_features ? (
		// 			<a-sky src={data.image_url} rotation='0 -130 0'></a-sky>
		// 		) : (
		// 			<>
		// 				<a-assets>
		// 					<video
		// 						id='video'
		// 						preload='auto'
		// 						src={data.video_url}
		// 						loop={true}
		// 						crossOrigin='anonymous'
		// 						muted
		// 						autoPlay
		// 					></video>
		// 				</a-assets>
		// 				<a-videosphere src='#video' rotation='0 -90 0'></a-videosphere>
		// 			</>
		// 		)}
		// 	</a-scene>
		// 	{/* <AframeContainer
		// 		locked={data.locked_features}
		// 		image={data.image}
		// 		video={data.video}
		// 	/> */}
		// 	<div className='absolute h-[35vh] w-[30%] top-8 right-5 p-4 rounded-md'>
		// 		<Card className='card text-white'>
		// 			<CardHeader>
		// 				<CardTitle>{data.name}</CardTitle>
		// 				<CardDescription className='text-ellipsis'>
		// 					{data.description.slice(0, 50)}
		// 				</CardDescription>
		// 			</CardHeader>
		// 			<CardContent>
		// 				<div className='flex gap-3 items-center'>
		// 					<VscDebugBreakpointLogUnverified />
		// 					<p>{data.gender}</p>
		// 				</div>
		// 				<div className='flex gap-3 items-center'>
		// 					<VscDebugBreakpointLogUnverified />
		// 					<p>{data.locked_features ? 'Not Owned' : 'Owned'}</p>
		// 				</div>
		// 			</CardContent>
		// 		</Card>
		// 		{/* <Metacard
		// 			name={data.name}
		// 			gender={data.gender}
		// 			description={data.description}
		// 			locked={data.locked_features}
		// 		/> */}
		// 	</div>
		// 	<div className='absolute top-8 left-9'>
		// 		<div className='flex gap-1 items-start  h-[78vh]'>
		// 			<Avatar
		// 				modelSrc={data.external_url}
		// 				animationSrc={showAnimationList && currentAnimation}
		// 				cameraInitialDistance={3.5}
		// 			/>
		// 			{!unlock ? (
		// 				<Button onClick={() => setUnlock(true)}>
		// 					Unlock Avatar Features
		// 				</Button>
		// 			) : (
		// 				<div className='flex flex-col items-start gap-4'>
		// 					<Button onClick={() => setShowAnimationList(!showAnimationList)}>
		// 						{showAnimationList ? 'Stop Animation' : 'Show animation list'}
		// 					</Button>
		// 					{showAnimationList && (
		// 						<>
		// 							{modelAttributes?.value.map((animation, index) => (
		// 								<Button onClick={() => handleAnimation(index)}>
		// 									Animation {index + 1}
		// 								</Button>
		// 							))}
		// 						</>
		// 					)}
		// 				</div>
		// 			)}
		// 		</div>
		// 		{/* <AvatarContainer
		// 			locked={data.locked_features}
		// 			attributes={data.attributes}
		// 			modelUrl={data.external_url}
		// 		/> */}
		// 	</div>
		// 	<div className='absolute bottom-12 left-[30%]'>
		// 		<p className='text-center font-bold '>Click on the mic icon to speak</p>
		// 		{/* <VoiceRecorder /> */}
		// 	</div>
		// </main>
		<div>hey</div>
	)
}

// Sneaker animations: F_Dances_001, 005, 006, 007 & Guitar Animations: M_Dances_005, 008, 009 & F_Dances_007
