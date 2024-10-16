const nodeUrl = 'https://nodes-testnet.youngmarket.net';

export default {
    networkId: 'testnet',
    displayName: 'Testnet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: true,
    dataServicesBaseUrl: 'https://api.testnet.wavesplatform.com/v0',
    nodes: [
        {url: nodeUrl, maintainer: 'Waves', showAsLink: true},
        {url: 'https://testnode2.youngmarket.net', maintainer: 'Waves', showAsLink: true},
        {url: 'https://testnode3.youngmarket.net', maintainer: 'Waves', showAsLink: true},
        {url: 'https://testnode4.youngmarket.net', maintainer: 'Waves', showAsLink: true}
    ],
    faucet: {
        url: 'https://waves-faucet-testnet.wvservices.com/faucet',
        captchaKey: '6Le5cskZAAAAAGR6u8UvY1-wn4Gg97lUef-hFfQC',
        address: '3Myqjf1D44wR8Vko4Tr5CwSzRNo2Vg9S7u7'
    }
};
