function toReadable(n) {
    let ans = ''
    if(n == 0){
        ans = 'zero'
        return ans
    }
    else if(n > 9 && n < 20) {
        switch(n){
            case(10): ans += 'ten'; break;
            case(11): ans += 'eleven'; break;
            case(12): ans += 'twelve'; break;
            case(13): ans += 'thirteen'; break;
            case(14): ans += 'fourteen'; break;
            case(15): ans += 'fifteen'; break;
            case(16): ans += 'sixteen'; break;
            case(17): ans += 'seventeen'; break;
            case(18): ans += 'eighteen'; break;
            case(19): ans += 'nineteen'; break;
        }
        return ans
    }
    
    else{
        let c = 0
        switch(n % 10){
            case(1): ans += 'one'; break;
            case(2): ans += 'two'; break;
            case(3): ans += 'three'; break;
            case(4): ans += 'four'; break;
            case(5): ans += 'five'; break;
            case(6): ans += 'six'; break;
            case(7): ans += 'seven'; break;
            case(8): ans += 'eight'; break;
            case(9): ans += 'nine'; break;
        }

        

        n = Math.floor(n / 10)

        switch(n % 10){
            case(2): ans = 'twenty ' + ans; break;
            case(3): ans = 'thirty ' + ans; break;
            case(4): ans = 'forty ' + ans; break;
            case(5): ans = 'fifty ' + ans; break;
            case(6): ans = 'sixty ' + ans; break;
            case(7): ans = 'seventy ' + ans; break;
            case(8): ans = 'eighty ' + ans; break;
            case(9): ans = 'ninety ' + ans; break;
        }

        

        n = Math.floor(n / 10)

        switch(n % 10){
            case(1): ans = 'one hundred' + ans; break;
            case(2): ans = 'two hundred ' + ans; break;
            case(3): ans = 'three hundred ' + ans; break;
            case(4): ans = 'four hundred ' + ans; break;
            case(5): ans = 'five hundred ' + ans; break;
            case(6): ans = 'six hundred ' + ans; break;
            case(7): ans = 'seven hundred ' + ans; break;
            case(8): ans = 'eight hundred ' + ans; break;
            case(9): ans = 'nine hundred ' + ans; break;
        }
        ans = ans.trim()

        return ans
    }
}
