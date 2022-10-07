export function circle(r : number) {
    if (r < 0) {
        return 0;
    }

    else {
        const pi = 3.1416
        let radio = r * r;
        return pi * radio;
    }
}