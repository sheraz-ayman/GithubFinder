//1
let searchBar=document.getElementById("searchBar")
let repo1=document.getElementById("no_of_repo1")
let followers1=document.getElementById("no_of_followers1")
let name1=document.getElementById("name1")
let btn=document.getElementById("btn1")
//2
let searchBar2=document.getElementById("searchBar2")
let repo2=document.getElementById("no_of_repo2")
let followers2=document.getElementById("no_of_followers2")
let name2=document.getElementById("name2")
let btn2=document.getElementById("btn2")
let btnDone=document.getElementById("done")

btn.addEventListener("click",firstComp)
btn2.addEventListener("click",secondComp)
btnDone.addEventListener("click",compare)

function firstComp(){
    fetch(`https://api.github.com/users/${searchBar.value}`)
    .then((response)=> response.json())
    .then((data1)=>{
        document.getElementById("img1").src =  `${data1.avatar_url}`,
        followers1.textContent=`${data1.followers}`
        name1.textContent=`${data1.name}`
        repo1.textContent=`${data1.public_repos}`
    }
    )
}

function secondComp(){
    fetch(`https://api.github.com/users/${searchBar2.value}`)
    .then((response)=> response.json())
    .then((data2)=>{
        document.getElementById("img2").src =  `${data2.avatar_url}`,
        followers2.textContent=`${data2.followers}`
        name2.textContent=`${data2.name}`
        repo2.textContent=`${data2.public_repos}`
    }
    )
}


function compare(){
    let repoCount1=parseInt (repo1.textContent);
    let repoCount2=parseInt (repo2.textContent);
    let followersCount1=parseInt (followers1.textContent);
    let followersCount2 =parseInt (followers2.textContent);
    
    if (repoCount1>repoCount2) {
        name1.style.color="green"
        name2.style.color="red"
    
    }else if (repoCount1<repoCount2) {
        name1.style.color="red"
        name2.style.color="green"
    
    }else if (repoCount1==repoCount2) {
    
        if (followersCount1>followersCount2) {
            name1.style.color="green"
            name2.style.color="red"
        }else if (followersCount1<followersCount2) {
            name1.style.color="red"
            name2.style.color="green"
        }else{
            name1.style.color="lightpurple"
            name2.style.color="lightpurple"
        }
        }
}