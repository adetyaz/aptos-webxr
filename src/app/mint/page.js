import Link from 'next/link'

const Mint = () => {
	return (
		<div className='container mx-auto p-4'>
			<div className='max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
				<img
					className='w-full h-64 object-cover'
					src='/images/silver-sneakers.jpg    '
					alt='NFT Image'
				/>
				<div className='p-4'>
					<h1 className='text-2xl font-bold mb-6'>Silver Spark Sneakers</h1>
					<p className='text-gray-700 mb-6'>
						The Silver Spark Sneaker phygital NFT transcends the digital,
						offering not just a unique collectible image but also ownership of a
						physical pair. This limited-edition NFT, part of Concrete Rhythm's
						Urban Pulse Fashion Collection, fuses the brand's story and Lexi's
						design inspiration with a sleek, futuristic sneaker. Owning one of
						the 100 NFTs grants you both the digital representation and the
						right to redeem a real pair of these premium sneakers, crafted by
						FreeGate Garment Exports, making it a true collector's item and a
						gateway to the movement celebrating urban energy and self-expression
						through style.
					</p>
					<div className='flex items-center justify-between'>
						<span className='text-gray-900 font-semibold'>
							Mint to Setup Avatar
						</span>
						<Link href='/setup-avatar'>
							<button className='bg-blue-500 text-white px-4 py-2 rounded'>
								Mint
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Mint
