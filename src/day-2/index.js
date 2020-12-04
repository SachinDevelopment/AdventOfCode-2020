import filereader from '../utils/filereader.js';

const inputArray = filereader('input.txt');

/*
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
*/
const solve = () => {
    // Part 1
    let validCounter = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let [nums, letter, password] = inputArray[i].split(' ');
        let [min, max] = nums.split('-');
        letter = letter[0];
        let found = 0;
        for (let j = 0; j < password.length; j++) {
            if (password[j] === letter) {
                found++;
            }
        }
        if (found >= min && found <= max) {
            validCounter++;
        }
    }
    console.log('part 1 sol', validCounter);

    // Part 2
    validCounter = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let [nums, letter, password] = inputArray[i].split(' ');
        let [min, max] = nums.split('-');
        letter = letter[0];
        const first = password[min - 1] === letter ? 1 : 0;
        const second = password[max - 1] === letter ? 1 : 0;
        if (first + second === 1) validCounter++;
    }
    console.log('part 2 sol', validCounter);
}
solve();




