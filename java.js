const blackBtn=document.querySelector('#black');
const girdBox=document.querySelector('.container');
const rainbowBtn=document.querySelector('#rainbow');
const clearBtn=document.querySelector('.clear');
const slider=document.querySelector('input');
const pixlesSizeTxt=document.querySelector('#pixselsSize');


function createGird(numGird){
    let girdArea=numGird*numGird;
    for (i=0; i<girdArea; i++){
    let girdItem=document.createElement('div');
    girdBox.style.gridTemplateColumns=`repeat(${numGird}, 1fr)`;
    girdBox.style.gridTemplateRows=`repeat(${numGird}, 1fr)`;
    girdBox.appendChild(girdItem);
    
}

    const divs=girdBox.querySelectorAll('div');
    divs.forEach((div)=>{
    div.addEventListener('mouseover', ()=>{
       div.style.backgroundColor="black";
    })
    
});
}



clearBtn.onclick=function eraseAllcolors(){
    const girdPixels=girdBox.querySelectorAll('div');
    girdPixels.forEach((girdPixel=>girdPixel.style.backgroundColor='grey'));
}

function pixleSize(){
    const girdPixels=girdBox.querySelectorAll('div');
    girdPixels.forEach(girdPixel=>girdPixel.remove());
    createGird(slider.value);
    pixlesSizeTxt.textContent=slider.value+'x'+slider.value;
}


createGird(10);

slider.addEventListener('mouseup', pixleSize);
