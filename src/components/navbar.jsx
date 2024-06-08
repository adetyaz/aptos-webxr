'use client'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk'
import '@aptos-labs/wallet-adapter-ant-design/dist/index.css'
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export const Navbar = () => {
	const [accountHasList, setAccountHasList] = useState(false)
	const { account } = useWallet()

	const aptosConfig = new AptosConfig({ network: Network.TESTNET })
	const aptos = new Aptos(aptosConfig)

	useEffect(() => {
		fetchList()
	}, [account?.address])

	const fetchList = async () => {
		if (!account) return []
		// change this to be your module account address
		const moduleAddress =
			'0xcbddf398841353776903dbab2fdaefc54f181d07e114ae818b1a67af28d1b018'
		try {
			const todoListResource = await aptos.getAccountResource({
				accountAddress: account?.address,
				resourceType: `${moduleAddress}::todolist::TodoList`,
			})
			setAccountHasList(true)
		} catch (e) {
			setAccountHasList(false)
		}
	}
	return (
		<header className='head'>
			<Link href='/' className='cursor-pointer'>
				<div className='market'>
					<img src='/images/logo.png' alt='logo' className='h-16 w-32' />
				</div>
			</Link>
			<div className='head-h'>
				<h5 className='head-h5'>MarketPlace</h5>
				<h5 className='head-h5'>Ranking</h5>
				<h5 className='head-h5'>
					<WalletSelector />
				</h5>
			</div>
		</header>
	)
}
