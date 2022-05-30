//Code for box of boxes counter 

const boxCount = document.getElementById('boxes');
const directChildren = boxCount.children.length;
console.log(directChildren); // 👉️ 2


var redCounter = document.getElementById("progressCounter")
console.log(redCounter)
redCounter.innerText = directChildren


//Code for drag and drop

const boxes = document.getElementById('boxes');
const boxesFullfilment = document.getElementById('boxesFullfilment');
const boxesReady = document.getElementById('boxesReady');

Sortable.create(boxes,{
    group: {
        name: "saraza"
    },
    animation: 300,
    
});

Sortable.create(boxesFullfilment,{
    group: {
        name: "saraza"
    },
    animation: 300,
});

Sortable.create(boxesReady,{
    group: {
        name: "saraza"
    },
    animation: 300,
});



//Code for accordeon
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
