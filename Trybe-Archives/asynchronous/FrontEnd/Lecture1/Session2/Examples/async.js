const first = 9;
const second = 3;
let third  = first + second;
console.log(third);

setTimeout(() => {
    third = first - second;
    console.log(third);
},1000); // Olha aí o Timer HAHAHAHA


