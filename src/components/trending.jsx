import Link from 'next/link'
import React from 'react'

export const Trending = () => {
	return (
		<div className='trending'>
			<div className='trending-box'>
				<div className='trending-text'>
					<p className='trending-text-m'>Trending Collection</p>
					<p className='trending-text-2'>
						Checkout our weekly updated trending collection.
					</p>
				</div>
				<div className='collection-card'>
					<div className='collection-cards'>
						<img
							src='/images/pink-guitar.jpg'
							alt='collection'
							className='rounded-lg'
						/>
						<div className='cards-img'>
							<img
								src='/images/metal-headphones.jpg'
								alt='collection'
								className='size-24 rounded-lg'
							/>
							<img
								src='/images/metallic-suit.jpg'
								alt='collection'
								className='size-24 rounded-lg'
							/>
							<Link href='/mint'>
								<button className='cards-img-btn'>Mint NFT</button>
							</Link>
						</div>
						<p className='collection-card-t1'>Musical Muse</p>
						<div className='user'>
							<img src='/images/Avatar-12.png' alt='avatar' />
							<p>MrFox</p>
						</div>
					</div>

					<div className='collection-cards'>
						<img
							src='/images/silver-sneakers.jpg'
							alt='collection'
							className='rounded-lg'
						/>
						<div className='cards-img'>
							<img
								src='/images/edge-sneakers.jpg'
								alt='collection'
								className='size-24 rounded-lg'
							/>
							<img
								src='/images/colors-jacket.png'
								alt='collection'
								className='size-24 rounded-lg'
							/>
							<Link href='/mint'>
								<button className='cards-img-btn'>Mint NFT</button>
							</Link>
						</div>
						<p className='collection-card-t1'>Silver Spark Sneakers</p>
						<div className='user'>
							<img src='/images/12-2.png' alt='mushroom' />
							<p>FreeGate Garment Exports</p>
						</div>
					</div>
					<div className='collection-cards'>
						<img
							src='/images/fashion-designers.jpg'
							alt='collection'
							className='rounded-lg'
						/>
						<div className='cards-img'>
							<img
								src='/images/digiart-small.jpg'
								alt='collection'
								className='size-24 rounded-lg'
							/>
							<img
								src='/images/signature-series.jpg'
								alt='collection'
								className='size-24 rounded-lg'
							/>
							<Link href='/mint'>
								<button className='cards-img-btn'>Mint NFT</button>
							</Link>
						</div>
						<p className='collection-card-t1'>Digital Copycat on Canvas</p>
						<div className='user'>
							<img src='/images/12-1.png' alt='disco machines' />
							<p>BeKind2Robots</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
