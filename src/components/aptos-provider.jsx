'use client'
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'
import { PetraWallet } from 'petra-plugin-wallet-adapter'

export const AptosProvider = ({ children }) => {
	const wallets = [new PetraWallet()]

	return (
		<AptosWalletAdapterProvider
			plugins={wallets}
			autoConnect={true}
			onError={(error) => {
				console.log('error', error)
			}}
		>
			{children}
		</AptosWalletAdapterProvider>
	)
}
