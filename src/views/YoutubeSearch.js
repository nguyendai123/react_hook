import "./Blog.scss";
import axios from "axios";
import { useState } from "react";
import moment from "moment";
const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const handleSearchYoutube = async () => {
    //https://www.googleapis.com/youtube/v3
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyBlG-Mp9SnAWRA_F63gbP3osblvnZ-uIl0",
        type: "video",
        q: query,
      },
    });

    console.log("check res", res);
    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;
          result.push(object);
        });
      }
      console.log("check result", result);
      setVideos(result);
    }
  };

  return (
    <div className="youtube-search-container">
      <div className="youtube-search">
        <input
          type="text"
          placeholder="search video"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearchYoutube}>
          Search
        </button>
      </div>

      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  className="yt-result-iframe"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="created-at">
                  created-at:
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss A")}
                </div>
                <div className="author">
                  author:
                  {item.author}
                </div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "JjUnIVPJDT9oER6HmVAQd6zObug",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 112,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "iCAVdhfMMLsp6mJR3MGqnVMBtQs",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "-BzVCiHLpZA"
//         },
//         "snippet": {
//           "publishedAt": "2023-05-09T01:56:42Z",
//           "channelId": "UCHVqVJT68d-KaDOBNlSJ78Q",
//           "title": "Ai Cũng Tự hỏi Vì Sao Người Tốt Hay Gặp Khó Khăn Còn Kẻ Xấu Vẫn Thành Công Và Đây Là Câu Trả Lời .",
//           "description": "truyenphatgiao #nhanquabaoung #loiphatday Ai Cũng Tự hỏi Vì Sao Người Tốt Hay Gặp Khó Khăn Còn Kẻ Xấu Vẫn Thành ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/-BzVCiHLpZA/default_live.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/-BzVCiHLpZA/mqdefault_live.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/-BzVCiHLpZA/hqdefault_live.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Không Gian Phật Giáo",
//           "liveBroadcastContent": "live",
//           "publishTime": "2023-05-09T01:56:42Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "2omuAMYrXZb5spKPmdrwveFAKu4",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "2hTZcS8FIVA"
//         },
//         "snippet": {
//           "publishedAt": "2023-05-09T16:44:39Z",
//           "channelId": "UCODFbG0nHNRs1Ysr_x6tuFw",
//           "title": "[LIVE🔴] Tổng Bí thư Nguyễn Phú Trọng: Vững lòng tin của dân với Đảng | Đảng với Dân",
//           "description": "[LIVE  ] Tổng Bí thư Nguyễn Phú Trọng: Vững lòng tin của dân với Đảng | Đảng với Dân #dangvoidan #tongbithu ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/2hTZcS8FIVA/default_live.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/2hTZcS8FIVA/mqdefault_live.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/2hTZcS8FIVA/hqdefault_live.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Đảng với Dân",
//           "liveBroadcastContent": "live",
//           "publishTime": "2023-05-09T16:44:39Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "lQEQ08yZaXBYp-EHnzo2I9SRIbg",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "3OuJWO9Unjw"
//         },
//         "snippet": {
//           "publishedAt": "2022-09-18T00:58:44Z",
//           "channelId": "UCK2WxVy73ACZGTFaMS7grAA",
//           "title": "Trực Tiếp Nhạc Vàng Hải Ngoại Hay Nhất 2022 | 1000 Ca Khúc Trữ Tình Rumba Xưa Nghe Là Phê",
//           "description": "Trực Tiếp Nhạc Vàng Hải Ngoại Hay Nhất 2022 | 1000 Ca Khúc Trữ Tình Rumba Xưa Nghe Là Phê #nhacvang #bolero #rumba ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/3OuJWO9Unjw/default_live.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/3OuJWO9Unjw/mqdefault_live.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/3OuJWO9Unjw/hqdefault_live.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Siêu Thị Rumba",
//           "liveBroadcastContent": "live",
//           "publishTime": "2022-09-18T00:58:44Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "HfHj4NFLmKybVpjiJKclqWNUm-M",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "LTGioClXuuI"
//         },
//         "snippet": {
//           "publishedAt": "2023-05-09T04:18:10Z",
//           "channelId": "UCH3TuDb9oyj_SKf8kS9jJXg",
//           "title": "🏆 BLAST.TV PARIS MAJOR 2023 - NEW CHALLENGERS STAGE NGÀY 2 09.05 | CƠ HỘI CUỐI CHO BẦY CÁ NGỰA!!",
//           "description": "BLAST.tv PARIS là kỳ Major duy nhất của năm 2023 và cũng là cuối cùng của tựa game CS:GO, khép lại hành trình 11 năm lịch ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/LTGioClXuuI/default_live.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/LTGioClXuuI/mqdefault_live.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/LTGioClXuuI/hqdefault_live.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "500BROS CS:GO",
//           "liveBroadcastContent": "live",
//           "publishTime": "2023-05-09T04:18:10Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "EpmwiCJfYQDMdvFK1ieBMlECaOE",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "9mUZMauc9SA"
//         },
//         "snippet": {
//           "publishedAt": "2020-07-07T10:31:36Z",
//           "channelId": "UCLWOPQuQxoUFc_Q7iYzVsow",
//           "title": "Livestream Tuyệt Phẩm Trữ Tình Xưa &amp; Nay | Cẩm Ly, Quốc Đại, Cao Công Nghĩa, Thiện Nhân",
//           "description": "Livestream Tuyệt Phẩm Trữ Tình Xưa & Nay | Cẩm Ly, Quốc Đại, Cao Công Nghĩa, Thiện Nhân #camly #quocdai #xuavanay ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/9mUZMauc9SA/default_live.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/9mUZMauc9SA/mqdefault_live.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/9mUZMauc9SA/hqdefault_live.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "CẨM LY OFFICIAL",
//           "liveBroadcastContent": "live",
//           "publishTime": "2020-07-07T10:31:36Z"
//         }
//       }
//     ]
//   }
