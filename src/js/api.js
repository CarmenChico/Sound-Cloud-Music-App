// import  $ from "jquery";
//
// import { c_ID } from "./token";
//
// var link = "https://api.soundcloud.com/"
//
//
//
// function requestData () {
//      return $.ajax({
//     url: link + 'tracks',
//     data: {
//       client_id:c_ID,
//       // q:  ,
//       limit: 6,
//       // genre: "christian"
//     }
//
//   });
// };
// // console.log(requestData);
//
//
// var sort = function extractData(music) {
//         music.map(function(song) {
//           // console.log(song);
//           // console.log(song.stream_url);
//               return   `
//                   <div class="audioInput">
//                   <audio src="${song.stream_url}">allo</audio>
//                   <audio src="/music/good_enough.mp3" controls>
//                     <p>If you are reading this, it is because your browser does not support the audio element.</p>
//                   </audio>
//                   </div>`
//                   ;
//       })
//     }
//
//     $(".musicInput").append(sort());
//
//   requestData().then(sort());
//
//
// export {requestData } ;
