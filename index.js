// --Array-- 
// 1.Tinh Tong cac so trong mang
const arr5= [3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
    let sum1 =0;
    for(let i= 0;i<arr.length;i++){
     sum1+=arr[i];
 }
 console.log(sum)
// 2. In ra các số chẵn trong mảng.
 const arr1=[3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
        for(let i = 0; i <= arr.length;i++){
            if(arr[i]%2==0){
            console.log(arr[i])
     }   
 }
// 3.Tính tổng các số lẻ trong mảng.
 const arr2=[3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
 var at = parseInt(arr)

    for(let i = 0; i <= arr.length;i++){
     var sum=0
     if(arr[i]%2!=0)
     {
      sum += arr[i]
     }
    
 }

 console.log(sum)
// 4.In ra các số chia hết cho 3
 const arr3=[3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
 for(let i = 0; i <= arr.length;i++){
     if(arr[i]%3==0){
         console.log(arr[i])
     }   
 }
// 6.In ra các số không nhỏ hơn 15.
 const arr4=[3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
 for (let i = 0; i <= arr.length;i++)
     if(arr[i]>=15)
 console.log(arr[i])
// 7.tìm số bé nhất, lớn nhất trong mảng.
 const arr6=[3, 10, 1, 16, 30, 5, 2, 30, 99, 9];

     console.log(Math.min(...arr))
     console.log(Math.max(...arr))
 

// --Function-- 

// 1.viet ham in ra uoc so tu nhien n
function uocsotunhien(a,b){
    if(a%b===0){
        return a
    }
    else{
        return b
    }

}
var x= uocsotunhien(10,20)
console.log(x)
// 1. Viết hàm in ra ước số của số tự nhiên n. 
function divisor (n){
    for(var i = 1; i <= n ; i++){
        if (n % i == 0) {
            console.log(i)
        }
    }
}
// divisor(10)

// 2. Viết hàm kiểm tra ba số a, b, c có phải là số đo của ba cạnh tam giác hay không? 
function triangle(a, b, c){if(a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a ){
    return true
}
else{
    return false
}
}

// console.log(triangle(-3, 4, 6))


// 3. Viết hàm tính tổng cho hai số a, b. 
function result(a,b){
    return a + b
}
// 4. Viết hàm kiểm tra số tự nhiên n có phải là năm nhuận hay không? 

function leapYear(n){ 
 if(n % 100 !== 0 && n % 4 === 0){
    return true
 }
 else if(n % 400 === 0){
    return true
 }
 else{
    return false
 }
}  

console.log(leapYear(1700))

// 5. Viết hàm trả về thế kỉ của số tự nhiên n. 

var century = function(number){
    return Math.ceil(number / 100)
}
    // console.log(century(1400))

// 6. Viết hàm đảo ngược string s. Ví dụ s = “mindX” thì kết quả trả về là “Xdnim”. 

function string (str){
    var cup = str.split('');
    var reverse = cup.reverse();
    var result = reverse.join('')
    return result
    
}
// console.log(string('mindx'))

// 7. Viết hàm kiểm tra xem string s có đối xứng hay không? Ví dụ: “abba” là chuỗi đối xứng, “ccdcc” là chuỗi đối xứng, “abab” không phải là chuỗi đối xứng. 


function symmetry (a){
    var b = a.split('')
   return b
}


//lệnh test
var arr = symmetry('hongay')
 


console.log(arr)
console.log(arr.reverse())

if(arr.length !== arr.reverse().length) {
    result = false;
    }
    else
    {
    for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr.reverse()[i] ){
    result = false;
    break;
    }
    result = true;
    }
    }
    console.log(result);
