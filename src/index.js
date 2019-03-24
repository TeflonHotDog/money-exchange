// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
   
        if (currency > 10000) {
            return {error: "You are rich, my friend! We don't have so much coins for exchange"};
        }
        var H =0,Q=0,D=0,N=0,P=0;
        H = Math.floor(currency/50);
        currency -= (50*H);
        Q = Math.floor(currency/25);
        currency-= (25*Q);
        D = Math.floor(currency/10);
        currency -= (10*D);
        N = Math.floor(currency/5);
        currency -= (5*N);
        P = currency;       
        var change = {};
        if(H>0) change.H = H;
        if(Q>0) change.Q = Q;
        if(D>0) change.D = D;
        if(N>0) change.N = N;
        if(P>0) change.P = P;
        return change;
 }
