import React from 'react'

export const Trending = () => {
	return (
		<div class='trending'>
			<div class='trending-box'>
				<div class='trending-text'>
					<p class='trending-text-m'>Trending Collection</p>
					<p class='trending-text-2'>
						Checkout our weekly updated trending collection.
					</p>
				</div>
				<div class='collection-card'>
					<div class='collection-cards'>
						<img src='/images/primary-photo-placeholder.png' alt='collection' />
						<div class='cards-img'>
							<img
								src='/images/secondary-photo-placeholder.png'
								alt='collection'
							/>
							<img
								src='/images/secondary-photo-placeholder-1.png'
								alt='collection'
							/>
							<button class='cards-img-btn'>1025+</button>
						</div>
						<p class='collection-card-t1'>DSGN Animals</p>
						<div class='user'>
							<img src='/images/Avatar-12.png' alt='avatar' />
							<p>MrFox</p>
						</div>
					</div>

					<div class='collection-cards'>
						<img src='./primary-photo-placeholder-1.png' alt='collection' />
						<div class='cards-img'>
							<img src='./secondary-photo-placeholder-2.png' alt='collection' />
							<img
								src='/images/secondary-photo-placeholder-2.png'
								alt='collection'
							/>
							<button class='cards-img-btn'>1025+</button>
						</div>
						<p class='collection-card-t1'>Magic Mashrooms</p>
						<div class='user'>
							<img src='/images/12-2.png' alt='mushroom' />
							<p>Shroomie</p>
						</div>
					</div>
					<div class='collection-cards'>
						<img
							src='/images/primary-photo-placeholder-2.png'
							alt='collection'
						/>
						<div class='cards-img'>
							<img
								src='/images/secondary-photo-placeholder-3.png'
								alt='collection'
							/>
							<img
								src='/images/secondary-photo-placeholder-3.png'
								alt='collection'
							/>
							<button class='cards-img-btn'>1025+</button>
						</div>
						<p class='collection-card-t1'>Disco Machines</p>
						<div class='user'>
							<img src='/images/12-1.png' alt='disco machines' />
							<p>BeKind2Robots</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
