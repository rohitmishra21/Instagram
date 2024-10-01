const storyInfo = [
  {
    name: "iamharshvardana",
    profileImg: "./img/harshdp.jpg",
    storyImg: "./img/harshpost.jpg",
  },
  {
    name: "sharthak_sharma",
    profileImg: "./img/shrthakdp.jpg",
    storyImg: "./img/sharthakpost.jpg",
  },
  {
    name: "Ayush",
    profileImg: "./img/ayushdp.jpg",
    storyImg: "./img/ayushpost.jpg",
  },
  {
    name: "ashu",
    profileImg: "./img/ashudp.jpg",
    storyImg: "./img/ashupost.jpg",
  },
  {
    name: "rohit_sharma",
    profileImg:
      "https://i.pinimg.com/564x/40/e2/df/40e2dfd82537a0814c53ed7f6ad30349.jpg",
    storyImg:
      "https://i.pinimg.com/564x/33/b9/d9/33b9d9a5b9b40d24a575fd4315a12475.jpg",
  },
  {
    name: "virat_kholi",
    profileImg:
      "https://i.pinimg.com/564x/34/4a/06/344a06a498e2f1c26e5d7315db232517.jpg",
    storyImg:
      "https://i.pinimg.com/564x/b8/fe/18/b8fe185770d09f819047aebcbebf9899.jpg",
  },
  {
    name: "AB de Villiers",
    profileImg:
      "https://i.pinimg.com/736x/b4/46/37/b4463751aa8cfc27e9f6432d15f93f03.jpg",
    storyImg:
      "https://i.pinimg.com/564x/1b/5a/5a/1b5a5a702d8ade2ed674ded29ba59232.jpg",
  },
  {
    name: "Jasprit_Bumrah",
    profileImg:
      "https://i.pinimg.com/564x/1d/79/dd/1d79ddb608b382e48fec2508bae3bc6e.jpg",
    storyImg:
      "https://i.pinimg.com/564x/11/b0/8e/11b08eb1515763536595c75f60f8ce70.jpg",
  },
  {
    name: "MS_Dhoni",
    profileImg:
      "https://i.pinimg.com/564x/e3/12/e9/e312e91606c56dad2c671a59e0c03632.jpg",
    storyImg:
      "https://i.pinimg.com/564x/f0/69/94/f069948581aeb08e6e143b578bcc4d40.jpg",
  },
  {
    name: "Cristiano_Ronaldo",
    profileImg:
      "https://i.pinimg.com/736x/b4/20/be/b420bef425020a89b0393a11f463d96e.jpg",
    storyImg:
      "https://i.pinimg.com/564x/7c/10/0e/7c100e0477ce8b8ec1e16b69109be775.jpg",
  },
];

let stores = document.querySelector(".stores");
let myStory = document.querySelector(".myStory");
let myStoryContsner = document.querySelector(".myStoryContsner");
let postLike = document.querySelector("#postLike")
let postImgLike = document.querySelector("#postImgLike")
let addLike = document.querySelector("#addLike")
let addLikebtn = document.querySelector("#addLikebtn")
let likeNum = document.querySelector(".likeNum")


let storyIndex = 0;
let clutter = "";
let story = "";
let time = 0;
let likes = 1


postImgLike.addEventListener("dblclick",()=>{
  postLike.style.opacity="100"
  addLike.style.display="none"
  addLikebtn.style.display="block"
  likeNum.textContent = likes++
  setTimeout(() => {
      postLike.style.opacity="0"
  }, 2000);
})

storyInfo.forEach((info, index) => {
  clutter += `  <div class="inline-block" >
              <div  class="story w-24 h-24 p-1  bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full ">
                <img id=${index} src="${info.profileImg}" class="border-4  object-cover  h-full w-full rounded-full" alt="">
              </div>
            <h1 class="text-xs text-center  font-semibold">${info.name}</h1>
           </div>`;
});

stores.addEventListener("click", (dets) => {

  let target = storyInfo[dets.target.id];
  
  story = `    <div class="myStory  w-full h-full  top-0 left-0  absolute">
               <div class="absolute flex flex-col justify-between w-full p-2">
                <div class="loader ease-linear duration-300 transition-all w-0 h-0.5 my-2 bg-white/70"></div>
                <div class="flex mt-2 justify-between">
                  <div class="flex  items-center gap-2">
                     <div class="w-10 h-10 bg-black rounded-full">
                         <img  src="${target.profileImg}" class="  object-cover  h-full w-full rounded-full" alt="">
                     </div>
                     <h1 class="text-white">${target.name}</h1>
                   </div>
                   <i class="text-white ri-more-2-fill"></i>
                </div>
            
                
               </div>
              <img class="w-full h-[90%] object-cover" src="${target.storyImg}" alt="">
              <div class="flex items-center h-[10%] px-3  justify-between">
               <i class="ri-chat-3-line"></i>
               <input
                type="text"
                placeholder="Message"
                class="p-1 w-[70%] border-2 border-black/40 rounded-full" >
               <i class="ri-heart-line"></i>
               <i class="ri-send-plane-fill"></i>
              </div>
            </div> `;
          
            myStoryContsner.innerHTML = story;
            myStoryContsner.style.display = "block";
           

            let loader = document.querySelector(".loader");
          
            let timeInterval = setInterval(() => {
                    time+=7;
                    loader.style.width = time+"%";
                 
            }, 200);
          
            setTimeout(() => {
                clearInterval(timeInterval)
                myStoryContsner.style.display = "none";
                time=0
              
           
            }, 3000);
});

stores.innerHTML += clutter;
