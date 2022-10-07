export function fact(x: number) {
    if(x>0 && x<16){
        let r: number = x-1;
        while(r > 0){
            x=x*r;
            r=r-1;
        }
    }else{
        if(x<0 || x>16){
            x = 0;
        }else{
            x = 1;
        }
    }
    return x;
}