const defaultApiUrl = process.env.REACT_APP_DEFAULT_API_URL;

const normalizeHexCode = code => ({ ...code, hex: `#${code.hex}` });

export default class ColorFetcher {
    endpoint = defaultApiUrl;
    http = window.fetch.bind(window);

    constructor({ endpoint, http } = {}) {
        this.endpoint = endpoint || this.endpoint;
        this.http = http || this.http;
    }

    async getColors() {
        try {
            const request = await this.http(this.endpoint);

            const colorsData = await request.json();
            const normalizedColors = colorsData.map(normalizeHexCode);

            return normalizedColors;
        } catch (err) {
            console.error('Api fetch error', err);
        }
    }
}
