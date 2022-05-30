//Code for box of boxes counter 

function updateCounter(){
    
    updateColumnCounter('boxes',"progressCounter")
    updateColumnCounter('boxesFullfilment',"awaitingCount")
    updateColumnCounter('boxesReady',"checkoutCount")
    
}

function updateColumnCounter(columnId,counterId){
    const boxCount = document.getElementById(columnId);
    const directChildren = boxCount.children.length;
    console.log(directChildren,"Direct Children"); // 👉️ 2
    
    var redCounter = document.getElementById(counterId)
    redCounter.innerText = directChildren
}

updateCounter()

//Code for drag and drop

const boxes = document.getElementById('boxes');
const boxesFullfilment = document.getElementById('boxesFullfilment');
const boxesReady = document.getElementById('boxesReady');

Sortable.create(boxes,{
    group: {
        name: "saraza"
    },
    animation: 300,
    onEnd: function (/**Event*/evt, /**Event*/originalEvent) {
        console.log("cualquiera")
        updateCounter()
	},
});

Sortable.create(boxesFullfilment,{
    group: {
        name: "saraza"
    },
    animation: 300,
    onEnd: function (/**Event*/evt, /**Event*/originalEvent) {
        console.log("cualquiera")
        updateCounter()
	},
});

Sortable.create(boxesReady,{
    group: {
        name: "saraza"
    },
    animation: 300,
    onEnd: function (/**Event*/evt, /**Event*/originalEvent) {
        console.log("cualquiera")
        updateCounter()
	},
});



//Code for accordeon
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
