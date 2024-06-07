import React from 'react'

export const More = () => {
	return (
		<div class='more-nft'>
			<div class='first-more-nft'>
				<div class='nft-heading'>
					<p class='nft-h1'>Discover More NFTs</p>
					<p class='nft-h2'>Explore new trending NFTs</p>
				</div>
				<button class='nft-btn'>
					<span id='nft-eye' class='material-symbols-outlined'>
						visibility
					</span>
					See All
				</button>
			</div>
			<div class='nft-card-row'>
				<div class='nft-cards'>
					<img src='/images/nft-card-1.png' alt='galaxy' />
					<div class='nft-card-last'>
						<p class='nft-last-p1'>Distant Galaxy</p>
						<div class='nft-last-artist'>
							<img src='/images/avatar-9.png' alt='moondancer' />
							<p class='nft-last-p2'>MoonDancer</p>
						</div>
						<div class='prices'>
							<div class='price-card'>
								<p class='price-card-one'>Price</p>
								<p class='price-card-two'>1.63 ETH</p>
							</div>
							<div class='bids-card'>
								<p class='high-bid'>Highest Bid</p>
								<p class='high-bid-price'>0.33 wETH</p>
							</div>
						</div>
					</div>
				</div>
				<div class='nft-cards'>
					<img src='/images/nft-card-2.png' alt='Distant galxy' />
					<div class='nft-card-last'>
						<p class='nft-last-p1'>Distant Galaxy</p>
						<div class='nft-last-artist'>
							<img src='/images/avatar-9.png' alt='moondance' />
							<p class='nft-last-p2'>MoonDancer</p>
						</div>
						<div class='prices'>
							<div class='price-card'>
								<p class='price-card-one'>Price</p>
								<p class='price-card-two'>1.63 ETH</p>
							</div>
							<div class='bids-card'>
								<p class='high-bid'>Highest Bid</p>
								<p class='high-bid-price'>0.33 wETH</p>
							</div>
						</div>
					</div>
				</div>
				<div class='nft-cards'>
					<img src='/images/nft-card-3.png' alt='Distant galaxy' />
					<div class='nft-card-last'>
						<p class='nft-last-p1'>Distant Galaxy</p>
						<div class='nft-last-artist'>
							<img src='/images/avatar-9.png' alt='moondanceer' />
							<p class='nft-last-p2'>MoonDancer</p>
						</div>
						<div class='prices'>
							<div class='price-card'>
								<p class='price-card-one'>Price</p>
								<p class='price-card-two'>1.63 ETH</p>
							</div>
							<div class='bids-card'>
								<p class='high-bid'>Highest Bid</p>
								<p class='high-bid-price'>0.33 wETH</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
