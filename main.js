const NORMAL_COLOR = 'rgb(75, 75, 75)';
const HOVER_COLOR = 'rgb(241, 241, 241)';

const canvas = document.createElement('div');
canvas.id = 'canvas';
const newCanvasButton = document.querySelector('#new-canvas-btn');

function deleteCanvas(){
    while(canvas.hasChildNodes())
    {
        canvas.removeChild(canvas.firstChild);
    }

    if(document.body.querySelector('#canvas') != null)
    {
        document.body.removeChild(canvas);
    }
}

function newCanvas(){
    deleteCanvas();

    let size = prompt('Size:');
    size = Number(size);
    if(size > 100)
        size = 100;

    initCanvas(size);
}

function initCanvas(size) {
    document.body.appendChild(canvas);
    for(let i = 0; i < size; i++)
    {
        const row = document.createElement('div');
        row.classList.add('row');
        for(let k = 0; k < size; k++)
        {
            const div = document.createElement('div');
            row.appendChild(div);
            div.addEventListener('mouseover', () => 
                div.style.backgroundColor = NORMAL_COLOR
            );
            div.addEventListener('mouseleave', () => 
                div.style.backgroundColor = HOVER_COLOR
            );
        }
        canvas.appendChild(row);
    }
}

newCanvasButton.addEventListener('click', newCanvas);