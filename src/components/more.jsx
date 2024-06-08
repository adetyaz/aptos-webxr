import React from 'react'

export const More = () => {
	return (
		<div className='more-nft'>
			<div className='first-more-nft'>
				<div className='nft-heading'>
					<p className='nft-h1'>Discover More NFTs</p>
					<p className='nft-h2'>Explore new trending NFTs</p>
				</div>
			</div>
			<div className='nft-card-row'>
				<div className='nft-cards'>
					<img
						src='/images/tunes-player.jpg'
						alt='moondancer'
						className='rounded-t-lg'
					/>
					<div className='nft-card-last'>
						<p className='nft-last-p1'>Retro Vinyl Sounds Shades</p>
						<div className='nft-last-artist'>
							<p className='nft-last-p2'>Reck R. </p>
						</div>
					</div>
				</div>
				<div className='nft-cards'>
					<img
						src='/images/rainbow-suit.jpg'
						alt='moondance'
						className='rounded-t-lg'
					/>
					<div className='nft-card-last'>
						<p className='nft-last-p1'>Rainbow Collective</p>
						<div className='nft-last-artist'>
							<p className='nft-last-p2'>Richard Carr</p>
						</div>
					</div>
				</div>
				<div className='nft-cards'>
					<img
						src='/images/hexicon-shades.jpg'
						alt='moondanceer'
						className='rounded-t-lg'
					/>
					<div className='nft-card-last w-full'>
						<p className='nft-last-p1'>Summer Hexicon</p>
						<div className='nft-last-artist'>
							<p className='nft-last-p2'>Judixx</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
