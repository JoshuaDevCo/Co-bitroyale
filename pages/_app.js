import "../styles/globals.css"

import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider
            serverUrl={process.env.NEXT_PUBLIC_MORALIS_RPC_URL}
            appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
        >
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
