import { pow } from './pow';

describe('pow', () =>{
    it('should return 1 if exponent is 0', () =>{
        const result = pow(1,0);
        expect(result).toBe(1);
    })

    it('should return 0 if exponent is negative', () =>{
        const result = pow(1,-1);
        expect(result).toBe(0);
    })

    it('should return 8 if base is 2 and exponent is 3', () =>{
        const result = pow(2,3);
        expect(result).toBe(8);
    })

    it('should return 9 if base is 3 and exponent is 2', () =>{
        const result = pow(3,2);
        expect(result).toBe(9);
    })
})