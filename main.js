const canvas = document.querySelector('#canvas');

function initCanvas(sizeX = 16, sizeY = 16){
    for(let i = 0; i < sizeX; i++)
    {
        const container = document.createElement('div');
        container.classList.add('row');
        for(let k = 0; k < sizeY; k++)
        {
            const div = document.createElement('div');
            container.appendChild(div);
        }
        canvas.appendChild(container);
    }
}

initCanvas();