const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Q1
let cat = {
    complain: function(){
        console.log("Meow!")
    }
}

//Q2

var heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading"

//Q3
heading.style.fontSize = "2em";

//Q4
heading.classList.add("subheading")

//Q5

const paragraph = document.querySelectorAll("p");
for (var i=0; i<paragraph.length; i++) {
 paragraph[i].style.color = "red";
}

//Q6

var resultContainer = document.querySelector(".results");
document.querySelector(".results").innerHTML = `<p>New paragraph</p>
`
document.querySelector(".results").style.color = "yellow";

//Q7
function myFunction (list){

}
