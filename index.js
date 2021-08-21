let check = document.querySelector("#check")
let container = document.querySelector(".container")
 let question = document.querySelector(".question")
 let sc = document.querySelector(".sc")
 let answer = document.querySelector("#answer")
quest= ()=>{

    let arr1 =[1,2,3,4,5,6,7,8,9]
    let arr2=[9,8,7,6,5,4,3,2,1]
    let operator = ['+','-','/','*']
    let val=Math.floor(Math.random()*8);
    let val2=Math.floor(Math.random()*8);
    let opt=Math.floor(Math.random()*3);
    const qt= `${""+arr1[val]+arr2[val]+" "+operator[opt]+" "+arr1[val2]+arr2[val2]} = ?`
  
    question.innerHTML =qt 
    return `${""+arr1[val]+arr2[val]+operator[opt]+arr1[val2]+arr2[val2]}`
}

let q=quest()
let score=0

check.addEventListener('click',()=>{
    debugger
    let checking =  q
    let inpans=Number(answer.value)
    let ans=Math.floor(eval(checking));
   if (inpans===ans) {
       alert("Correct Answer")
       score+=4
       sc.innerHTML= `Score : ${score}`
   } else {
    alert("Wrong Answer")
    score--
    sc.innerHTML= `Score : ${score}`
   }
    console.log(ans);
   console.log(checking);
   
   answer.value=""
  q= quest()
})