// let arr=[1,2,3,4,5,6,2,3]
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(num==arr[i]){
//         arr.splice(i,1)
//     }
// }
// console.log(arr);

// 2. find no. of digits....
// let number=287152;
// count=0;
// let copy=number;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

// 03. sum of digits in a number..
// let numb=287152;
// sum=0;
// let cop=numb;
// while(cop>0){
//     digit=cop%10;
//     sum=sum+digit;
//     cop=Math.floor(cop/10);
// }
// console.log(sum);

// 04. Factorial..
// let n=5
// let factorial=1;
// for(let i=1; i<=n;i++){
//     factorial=factorial*i;
// }
// console.log(`factorial of ${n} is ${factorial}`);

// 05. Find largest number in an array ...
let arr=[5,8,1,3,6,9,2,4];
let largest =0;
for(let i=0; i<=arr.length;i++){
    if(largest<arr[i]){
        largest=arr[i];
    }
}
console.log(largest);