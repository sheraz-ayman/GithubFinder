//Main variables
let searchBar=document.getElementById("searchBar");
let Username=document.getElementById("name")
let followers=document.getElementById("followers")
let following =document.getElementById("following")
let btn = document.getElementById("btn")
let cards=document.getElementsByClassName("repos")
let languageColor=document.getElementsByClassName("lang-color")
let language=document.getElementsByClassName("language")

//get personal details
btn.addEventListener("click",getData)

function getData(){
fetch(`https://api.github.com/users/${searchBar.value}`)
.then((response)=> response.json())
.then((data)=>{
    Username.innerHTML= data.name,
    document.getElementById("profile-pic").src =  `${data.avatar_url}`,
    document.getElementById("profile-pic2").src =  `${data.avatar_url}`,
    followers.innerHTML=`${data.followers}`,
    following.innerHTML=`${data.following}`


//get repos
fetch(`https://api.github.com/users/${searchBar.value}/repos`)
.then((response) => response.json())
.then((data) => {
    div_id = document.getElementById("inside_cards")
    div_id.innerHTML=''
    for (let index = 0; index < 6; index++) {
        if(data[index]){
            div_id.innerHTML+=`<div class="card1" >
        <div class="firstCol">
            <h5>${data[index].name}</h5>
            <div class="type">
            <div class="circleColor" id="circle${index}"></div> <p class="language">${data[index].language}</p></div></div>
            <button>Public</button>
        </div>`
    if (data[index].language == "HTML") {
        document.getElementById(`circle${index}`).style.background = "red";
    }
    else if( data[index].language == "JavaScript") {
        document.getElementById(`circle${index}`).style.background = "yellow";
    }
    else if( data[index].language == "CSS") {
        document.getElementById(`circle${index}`).style.background = "#563d7c";
    }
        }
        else{
            break
        }
    }
    })
})}


window.onload=()=>{

    fetch(`https://api.github.com/users/sheraz-ayman`)
    .then((response)=> response.json())
    .then((data)=>{
    Username.innerHTML= data.name,
    document.getElementById("profile-pic").src =  `${data.avatar_url}`,
    document.getElementById("profile-pic2").src =  `${data.avatar_url}`,
    followers.innerHTML=`followers:${data.followers}`,
    following.innerHTML=`following:${data.following}`


//get repos
fetch(`https://api.github.com/users/sheraz-ayman/repos`)
.then((response) => response.json())
.then((data) => {
    div_id = document.getElementById("inside_cards")
    div_id.innerHTML=''
    for (let index = 0; index < 6; index++) {
        if(data[index]){
            div_id.innerHTML+=`<div class="card1" >
            <div class="firstCol">
            <h5>${data[index].name}</h5>
            <div class="type">
            <div class="circleColor" id="circle${index}"></div> <p class="language">${data[index].language}</p></div></div>
            <button>Public</button>
            </div>`
        if (data[index].language == "HTML") {
            document.getElementById(`circle${index}`).style.background = "red";
        }
        else if( data[index].language == "JavaScript") {
            document.getElementById(`circle${index}`).style.background = "yellow";
        }
        else if( data[index].language == "CSS") {
            document.getElementById(`circle${index}`).style.background = "#563d7c";
        }}
        else{
            break
        }
}
})
})}






