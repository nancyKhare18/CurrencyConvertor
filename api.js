const URL= "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn= document.querySelector("#btn");



const getfacts = async() =>{
    console.log("Getting data");
    let promise = await fetch(URL);
console.log(promise); // JSON
let data = await  promise.json();
console.log(data[0].text);
factPara.innerText = data[0].text;
};
btn.addEventListener("click",getfacts);