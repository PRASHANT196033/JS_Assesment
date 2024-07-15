function rotateStringRight(str) {
    
    let chars = str.split('');
    setInterval(function() {
        
        let lastChar = chars.pop();
 
        chars.unshift(lastChar);

        console.log(chars.join(''));
    }, 1000);
}


rotateStringRight('w3resource');

