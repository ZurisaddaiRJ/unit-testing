import { circle } from './circle';

describe('circle test suite', () =>{
    it ('should return 0, if radio is 0', () => {
        const result = circle(0);
        expect(result).toBe(0);
    })

    it ('should return 0, if radio is negative', () => {
        const result = circle(-1);
        expect(result).toBe(0);
    })

    it ('should return 3.1416 if radio is 1', () => {
        const result = circle(1);
        expect(result).toBe(3.1416);
    })

    it ('should return 12.5664 if radio is 2', () => {
        const result = circle(2);
        expect(result).toBe(12.5664);
    })

    it ('should return 28.2744 if radio is 3', () => {
        const result = circle(3);
        expect(result).toBe(28.2744);
    })
})