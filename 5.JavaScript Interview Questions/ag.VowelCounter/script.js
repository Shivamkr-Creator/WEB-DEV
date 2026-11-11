// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let str = "aeiou";

let count = 0;

function vowelsCounter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a'|| str[i] == 'A') {
            count++;
        } else if (str[i] == 'e'||str[i] == 'E') {
            count++;
        } else if (str[i] == 'i'|| str[i] == 'I') {
            count++;
        } else if (str[i] == 'u'|| str[i] == 'U') {
            count++;
        }
        else if (str[i] == 'o'|| str[i] == 'O') {
            count++;
        }
    }
    return count;
}

let a = vowelsCounter(str);
console.log(str);
console.log("number of vowels detected : ", a);