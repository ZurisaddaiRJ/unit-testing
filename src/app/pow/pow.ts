export function pow(x:number, n:number){
    if(n==0){
        return 1;
    }else{
        if(n<0)
        return 0;
    }
    return Math.pow(x,n);
}