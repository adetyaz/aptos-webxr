'use client'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk'
import '@aptos-labs/wallet-adapter-ant-design/dist/index.css'
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design'

export const Navbar = () => {
	const [accountHasList, setAccountHasList] = useState(false)
	const {
		connect,
		account,
		network,
		connected,
		disconnect,
		wallet,
		wallets,
		signAndSubmitTransaction,
		signAndSubmitBCSTransaction,
		signTransaction,
		signMessage,
		signMessageAndVerify,
	} = useWallet()

	const aptosConfig = new AptosConfig({ network: Network.TESTNET })
	const aptos = new Aptos(aptosConfig)

	console.log(account)

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
		<header class='head'>
			<div class='market'>
				<span class='material-symbols-outlined' id='store-icion'>
					storefront
				</span>
				<h4 id='h4'>NFT Marketplace</h4>
			</div>
			<div class='head-h'>
				<h5 class='head-h5'>MarketPlace</h5>
				<h5 class='head-h5'>Ranking</h5>
				<h5 class='head-h5'>
					<WalletSelector />
				</h5>
				<button class='nav-btn'>Sign Up</button>
			</div>
		</header>
	)
}
