const toryBtn = document.querySelector(".toryBtn")
const photoDiv1 = document.querySelector('.tory')

const toryInfoHTML = `<p class="paras">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam sequi dolorum eaque consequatur quo ut necessitatibus, tempora corrupti distinctio laboriosam quam, similique, possimus amet fuga! Rerum architecto illum nobis veniam.</p>
`
const photos = ['Content/ETERNITY COVER FINAL EP2.jpeg', 'Content/pexels-phil-kallahar-983200.jpg', 'Content/tory-lanez-jacket.jpg']
let i = 0;




document.querySelector('.prev').addEventListener("click", prevBtn)

document.querySelector('.next').addEventListener("click", nextBtn)
    


function prevBtn(){
    i--;
    if(i < 0){
        i = photos.length - 1 
    }
    showImg()
}


function nextBtn(){
    i++;
   if(i > photos.length - 1){
       i = 0;
   }

   showImg()
}




function showImg(){
    return photoDiv1.setAttribute('src', photos[i]);
}


toryBtn.addEventListener("click", () =>{
    document.querySelector(".toryExtra").innerHTML = toryInfoHTML
})