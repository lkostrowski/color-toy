/**
 * It should be provided by .env but it requires eject
 * @type {string}
 */
const defaultApiUrl = 'https://www.mocky.io/v2/5a37a7403200000f10eb6a2d';

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
