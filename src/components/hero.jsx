export const Hero = () => {
	return (
		<div class='hero-sec'>
			<div class='hero-text'>
				<h1 class='hero-h1'>
					Discover <br /> Digital art & <br />
					Collect NFTs
				</h1>
				<p class='hero-p'>
					NFT marketplace UI created with Anima for Figma. Collect, buy and sell
					art from more than 20k NFT artists.
				</p>
				<button class='hero-btn '>
					<span class='material-symbols-outlined'>rocket_launch</span>Get
					Started
				</button>
				<div class='additional-info'>
					<div class='info-1'>
						<h3 class='info-h3'>240k+ </h3>
						<p class='info-p'>Total Sale</p>
					</div>
					<div class='info-1'>
						<h3 class='info-h3'>100k+ </h3>
						<p class='info-p'>Auction</p>
					</div>
					<div class='info-1'>
						<h3 class='info-h3'>240k+ </h3>
						<p class='info-p'>Artists</p>
					</div>
				</div>
			</div>
			<div class='hero-pic'>
				<div class='highlited-nft'>
					<img src='/images/1.png' alt='' id='png1' />
				</div>
				<div class='highlited-box'>
					<p class='h-box-p'>Space Walking</p>
					<div class='h-box2'>
						<img src='/images/avatar.png' alt='avatar' />
						<p class='h-box-p2'>Animakid</p>
					</div>
				</div>
			</div>
		</div>
	)
}
