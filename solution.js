function pangrams(s) {
    // Write your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    if(s.length < alphabet.length){
        return 'not pangram'
    }
    for(let i = 0; i < alphabet.length; i++){
        let letter = s.toLowerCase().indexOf(alphabet[i])
        if(letter === -1){
            return 'not pangram'
        }
    }
    return 'pangram'

}
