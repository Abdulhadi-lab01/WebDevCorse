let nums = []
let even = []
do {
    ss = prompt("What is your name?")
    nums.push(ss)
    console.log("Enter a number (or 'done' to finish): "+ss)

}while(ss !== "done")
for (let i in nums) {
if (nums[i] % 2===0){
    even.push(nums[i])
}
}
if (even.length === 0){
    console.log("Even Numbers: None")

}else{

    console.log("Even Numbers : "+even)
}
