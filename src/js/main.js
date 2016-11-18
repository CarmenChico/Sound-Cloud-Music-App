import  $ from "jquery";

// import { requestData, } from "./api";
import { sort } from "./template";
import { c_ID } from "./token";


var link = "https://api.soundcloud.com/"

requestData().then(extractData);

function requestData (search_term) {
     return $.ajax({
        url: link + 'tracks',
        data: {
          client_id: c_ID,
          q:  search_term,
          limit: 30,
          // genre: "christian"
        }

  });
};
// console.log(requestData);

function extractData(music) {
  // console.log(music);
  $(".musicInput").empty()
  // $(".musicInput").html('')
    music.map(function(song) {
        // console.log(song);
        // console.log(song.stream_url);
        // console.log(song.description);
        console.log(song.user.username);

        $(".musicInput").append(`
          <div class="audioInput" data-stream="${song.stream_url}">
              <img class="artwork" src="${song.artwork_url || song.user.avatar_url}">
              <div class="audiotext">
                  <div class="songtitle">${song.title}</div>
                  <div class="user">${song.user.username}</div>
              </div>
          </div>`
        );
    })
}

$('body')
    .on('click', '.audioInput', function(event){
        $('audio').attr('src', $(this).data('stream') + '?client_id=' + c_ID)[0].play()
    })
    .on('submit', 'form', function(){
        var term = $('input').val();
        requestData(term).then(extractData);
        return false;
    })
