import Image from "next/image"
import { useState } from "react"
import HeaderItem from "./HeaderItem"

const Header = () => {

    const [walletAddress, setWalletAddress] = useState("")

    const connected = walletAddress.length == 0 ? false : true

    function loginUser(address) {
        fetch("/api/loginUser", {
            method: "POST",
            body: address
        }).then(console.log("Great work!")).catch((err) => {console.log(err)})
    }

    async function requestAccount() {
        if (typeof window != "undefined") {
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    setWalletAddress(accounts[0])
                    loginUser(accounts[0])
                }
                catch (error) {
                    console.log(error)
                }
            }
            else {
                console.log("Metamask not detected")
            }
        }
    }

    return(
        <header className="flex flex-col m-5 sm:flex-row justify-between items-center h-auto">
            <div className="flex flex-grow max-w-2xl justify-evenly">
                <HeaderItem title="HOME" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                } />
                <HeaderItem title="SUPPORT" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                } />
                <HeaderItem title="SUPPORTERS" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                } />
                <HeaderItem title="FAQs" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                } />
                <HeaderItem title="ABOUT" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                } />
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2">
                {
                    connected ? (
                        <div>
                            {walletAddress.slice(0, 6)}...{walletAddress.slice(39)}
                        </div>
                    ) : (
                        <button className="border-green-500 border-2 text-white py-1.5 px-3 rounded-lg h-12 flex items-center space-x-1" onClick={requestAccount}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                            <p>Connect Eth Wallet</p>
                        </button>
                    )
                }
                <Image src="/logo.png" width={200} height={100} />
            </div>
        </header>
    )
}
export default Header