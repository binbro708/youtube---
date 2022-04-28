/* youtube-search.js */
function init(){
    getListData();
}
init();

const searchValue=document.querySelector("#searchValue");
const search=document.querySelector("#search");
search.addEventListener("click",(e)=>{
    axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet", // 必填，把需要的資訊列出來
        playlistId: "UC3SyT4_WLHzN7JmHQwKQZww", // 播放清單的id
        maxResults: 12, // 預設為五筆資料，可以設定1~50
        q: `${searchValue.value}`,
        key: "AIzaSyAM-P83wTlDQyd-fxLQIwAJmTHwyOow9po"
      }
    })
    .then((res) => {
      const videoTitle=document.querySelector(".card-text")
      const thisData=res.data.items;
      let str="";
      thisData.forEach(i => {
         
          str+=`  <div class="col-12 col-sm-6 col-md-4 col-lg-3 " >
          <!-- 影片封面 -->
              <img class="card-img-top rounded-0" src="${i.snippet.thumbnails.medium.url}" alt="Card image cap">
              <div class="card-body d-flex">
                  <!-- 上船者投向 -->
                  <img src="https://images.chinatimes.com/newsphoto/2021-12-04/1024/20211204003699.jpg" alt="" style="height: 40px;width: 40px; " class="rounded-circle" >
                  <div class="ml-2"> 
                      <h5 class="card-text">${i.snippet.title}</h5>
                      <p>${i.snippet.channelTitle}</p>
              </div>                  
              </div>
      </div>`

      });
      document.querySelector("#mainList").innerHTML = str;
    })
    .catch((err) => {

      console.log(err.response);
    });
})


  function getListData() {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet", // 必填，把需要的資訊列出來
          playlistId: "UC3SyT4_WLHzN7JmHQwKQZww", // 播放清單的id
          maxResults: 12, // 預設為五筆資料，可以設定1~50
          q: "",
          key: "AIzaSyAM-P83wTlDQyd-fxLQIwAJmTHwyOow9po"
        }
      })
      .then((res) => {
        
        const thisData=res.data.items;
        let str="";
        thisData.forEach(i => {
           
            str+=`  <div class="col-12 col-sm-6 col-md-4 col-lg-3 " >
            <!-- 影片封面 -->
                <img class="card-img-top rounded-0" src="${i.snippet.thumbnails.medium.url}" alt="Card image cap">
                <div class="card-body d-flex">
                    <!-- 上傳者頭像 -->
                    <img src="https://images.chinatimes.com/newsphoto/2021-12-04/1024/20211204003699.jpg" alt="" style="height: 40px;width: 40px; " class="rounded-circle" >
                    <div class="ml-2"> 
                        <h5 class="card-text">${i.snippet.title}</h5>
                        <p>${i.snippet.channelTitle}</p>
                </div>                  
                </div>
        </div>`

        });
        document.querySelector("#mainList").innerHTML = str;
      })
      .catch((err) => {

        console.log(err.response);
      });
  }



 