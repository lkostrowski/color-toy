import ColorFetcher from './ColorFetcher';

describe('Color fetcher service', () => {
    it('Constructs new intance with default values and methods', () => {
        const fetcher = new ColorFetcher();

        expect(typeof fetcher.endpoint).toBe('string');
        expect(typeof fetcher.http).toBe('function');
    });

    it('Has default methods', () => {
        const fetcher = new ColorFetcher();

        expect(typeof fetcher.getColors).toBe('function');
    });

    it('Fetches formatted data', (done) => {
        const mockHttp = () => new Promise((res) => {
            res({
                json: () => Promise.resolve([{ name: 'testColor', hex: '000000' }]),
            });
        });

        const fetcher = new ColorFetcher({
            http: mockHttp,
        });

        fetcher.getColors().then((colors) => {
            expect(colors[0].name).toBe('testColor');
            expect(colors[0].hex).toBe('#000000');
            done();
        });
    });
});
