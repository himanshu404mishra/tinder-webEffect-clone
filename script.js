// get the data

let users =[
    {
        profilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        location:"Kathmandu, Nepal",
        name: "Harshita",
        age: 23,
        interests: [{
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "Writing"
        }, {
            icon: `<i class="ri-music-2-fill"></i>`,
            interest: "Music"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo libero recusandae cum repellendus iusto.",
        isFriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1696114865587-1857587fdcad?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 1,
        location:"Pokhara, Nepal",
        name: "Aahana",
        age: 19,
        interests: [{
            icon: `<i class="ri-football-fill"></i>`,
            interest: "Football"
        }, {
            icon: `<i class="ri-book-read-fill"></i>`,
            interest: "Reading"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo libero recusandae cum repellendus iusto. Nemo libero recusandae cum repellendus iusto.",
        isFriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1674151503786-04ee49777538?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 2,
        location:"Mumbai, India",
        name: "Barsha",
        age: 16,
        interests: [{
            icon: `<i class="ri-macbook-fill"></i>`,
            interest: "Coding"
        }, {
             icon: `<i class="ri-music-2-fill"></i>`,
            interest: "Music"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        isFriend: null,
    },
    {
        profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 10,
        location:"New York, USA",
        name: "Sandhya",
        age: 26,
        interests: [{
            icon: `<i class="ri-road-map-fill"></i>`,
            interest: "Travelling"
        }, {
            icon: `<i class="ri-gamepad-fill"></i>`,
            interest: "Gaming"
        }],
        bio: "Lorem ipsum dolor sit amet elit. Repudiandae nemo libero recusandae cum repellendus iusto.",
        isFriend: null,
    }
]
function select(elem){
    return document.querySelector(elem);
}
let curr= 0;
let isAnimation = false;


function setData(index){
    select(".prflimg img").src = users[index].profilePic
    select(".badge h5").textContent = users[index].pendingMessage
    select(".location h3").textContent = users[index].location
    select(".name h1:nth-child(1)").textContent = users[index].name
    select(".name h1:nth-child(2)").textContent = users[index].age

    let clutter = "";
    users[index].interests.forEach(interest => {
        clutter+=`<div
                  class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3"
                >
                  ${interest.icon}
                  <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
                </div>`
    })
    select(".tags").innerHTML = clutter
    select(".bio p").textContent = users[index].bio 
}

(function setInitial() {
    select(".maincard img").src = users[curr].displayPic
    select(".incommingcard img").src = users[curr+1]?.displayPic
   setData(curr)
    curr=2;

})();


function imageChange() {

    if(!isAnimation){
        isAnimation = true
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimation = false;
                let main = select(".maincard")
                let incomming = select(".incommingcard")
    
                incomming.classList.remove("z-[2]");
                incomming.classList.add("z-[3]");
                incomming.classList.remove("incommingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale: 1,
                    opacity: 1
                })
    
                if(curr === users.length) curr =0
                select(".maincard img").src=users[curr].displayPic;
                curr++
    
                main.classList.remove("maincard");
    
                incomming.classList.add("maincard");
                main.classList.add("incommingcard");
    
            }
        });
        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a")
        .from(".incommingcard", {
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        }, "a")
    }


}


let deny = select(".deny")
let accept = select(".accept")
deny.addEventListener("click", function(){
    imageChange()
    setData(curr-1)
    gsap.from(".details .element", {
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
});

accept.addEventListener("click", function(){
    imageChange()
    setData(curr-1)
    gsap.from(".details .element", {
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
});



(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(elem => {
        const div = document.createElement("div")
        div.classList.add(`${elem.classList[1]}container`, "overflow-hidden")
        div.appendChild(elem)
        select(".details").append(div)
    })
})();


