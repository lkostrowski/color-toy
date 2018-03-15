const defaultApiUrl = process.env.REACT_APP_CT_API_URL;

export default class ColorFetcher {
    endpoint = defaultApiUrl;
    http = window.fetch.bind(window);

    constructor({endpoint, http} = {}) {
        this.endpoint = endpoint ? endpoint : this.endpoint;
        this.http = http ? http : this.http;
    }

    async getColors() {
        try {
            const request = await this.http(this.endpoint);

            const colorsData = await request.json();
            const normalizedColors = colorsData.map(this.normalizeHexCode);

            return normalizedColors;
        } catch (err) {
            console.error('Api fetch error', err);
        }
    }

    normalizeHexCode(code) {
        return {...code, hex: `#${code.hex}`};
    }
}
