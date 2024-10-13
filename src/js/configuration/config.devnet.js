const nodeUrl = 'http://0.devnet.youngmarket.net:6869';
export default {
    networkId: 'devnet',
    displayName: 'Devnet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: false,
    nodes: [
        {url: nodeUrl, maintainer: 'YM', showAsLink: true},
        {url: 'http://1.devnet.youngmarket.net:6869', maintainer: 'YM', showAsLink: true},
        {url: 'http://2.devnet.youngmarket.net:6869', maintainer: 'YM', showAsLink: true},
        {url: 'http://3.devnet.youngmarket.net:6869', maintainer: 'YM', showAsLink: true},
        {url: 'http://4.devnet.youngmarket.net:6869', maintainer: 'YM', showAsLink: true},
        {url: 'http://5.devnet.youngmarket.net:6869', maintainer: 'YM', showAsLink: true},
        {url: 'http://6.devnet.youngmarket.net:6869', maintainer: 'YM', showAsLink: true}
    ]
};
