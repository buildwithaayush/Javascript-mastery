function howManyGames(p, d, m, s) {
    let cost = s;
    let count = 0;
    while(cost > m){
        count++;
        cost = cost - p;
        p = p - d;
    }
    
    return count;
}