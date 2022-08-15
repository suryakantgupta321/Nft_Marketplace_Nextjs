import { ethers } from 'ethers'
import React, { useState } from 'react'
import Header from '../Header/Header'
import MarketplaceAbi from '../../contractsData/Marketplace.json';
import MarketplaceAddress from '../../contractsData/Marketplace-address.json';
import NFTAbi from '../../contractsData/SURYANFT.json';
import NFTAddress from '../../contractsData/SURYANFT-address.json';
import { LayoutContext } from '../context/LayoutContext';

const Layout = (props) => {

    const [isLoading, setIsLoading] = useState(true)
    const [account, setAccount] = useState(null)
    const [marketplace, setMarketplace] = useState({})
    const [nft, setNft] = useState({})

    const web3Handler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

        setAccount(accounts[0])
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        const signer = provider.getSigner()
        loadContract(signer)
    }

    const loadContract = async (signer) => {
        const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
        // console.log(marketplace)
        setMarketplace(marketplace)

        const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
        setNft(nft)
        setIsLoading(false)
    }

    return (
        <div>
            <Header
                web3Handler={web3Handler}
                account={account}
            // {...props}
            />

            {/* <Outlet
                context={{
                    marketplace,
                    nft,
                    account
                }}
            /> */}
            <LayoutContext.Provider
                value={{
                    marketplace,
                    nft,
                    account
                }}
            >
                {props.children}
            </LayoutContext.Provider>
        </div>
    )
}

export default Layout