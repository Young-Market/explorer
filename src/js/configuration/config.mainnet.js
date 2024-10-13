const nodeUrl = 'https://node.youngmarket.net';

export default {
    networkId: 'mainnet',
    displayName: 'Mainnet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: true,
    dataServicesBaseUrl: 'https://api.youngmarket.net/v0',
    spamListUrl: 'https://raw.githubusercontent.com/Young-Market/ym-community/main/scam%20tokens%20according%20to%20ym%20community.csv',
    nodes: [{url: nodeUrl, maintainer: 'YM'}],
    dappsUrl: 'https://raw.githubusercontent.com/Young-Market/ym-client-config/main/official_ym_dapps.json'
};
