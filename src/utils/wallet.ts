import { nodes } from './getRpcUrl'

export const setupNetwork = async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const provider = window.ethereum
  if (provider) {
    const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 2)
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Expanse',
            nativeCurrency: {
              name: 'EXP',
              symbol: 'EXP',
              decimals: 18,
            },
            rpcUrls: nodes,
            blockExplorerUrls: ['https://explorer.expanse.tech/'],
          },
        ],
      })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  } else {
    console.error("Can't setup the EXP network on metamask because window.ethereum is undefined")
    return false
  }
}

export default null