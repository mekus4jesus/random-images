const imgContainerEl = document.querySelector('.img-container'),
    btnEl = document.querySelector('.btn')

    btnEl.addEventListener('click',()=>{
        // console.log('clicked');
        imgNum = 3
        addNewImages()
    })
    function addNewImages(){
        for (let index = 0; index < imgNum; index++) {
            const newImgEl = document.createElement('img')
        newImgEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        imgContainerEl.appendChild(newImgEl)
            
        }
        
    }

