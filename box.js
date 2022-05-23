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




const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
