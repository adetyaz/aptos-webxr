export const Hero = () => {
	return (
		<div className='hero-sec'>
			<div className='hero-text'>
				<h1 className='hero-h1'>
					Discover Phygital Xperiences
					<br />& Utility NFTs
				</h1>
				<p className='hero-p'>
					MyriadFlow is an innovative platform to explore and launch NFT
					experiences. Dive into the next generation of utility NFTs and
					phygitals in our revolutionary app store
				</p>
				<button className='hero-btn'>Get Started</button>
			</div>
			<div className='hero-pic'>
				<div className='highlited-nft'>
					<img
						src='/images/metallic-suit.jpg'
						alt='avatar'
						className='rounded-t-lg'
					/>
				</div>
				<div className='highlited-box'>
					<p className='h-box-p'>Metallic Vibez</p>
					<div className='h-box2'>
						<p className='h-box-p2'>Shaz</p>
					</div>
				</div>
			</div>
		</div>
	)
}
