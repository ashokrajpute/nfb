import React,{useEffect,useState} from 'react'
import axios from "axios";
import Banner from './Banner';
import { useNavigate } from "react-router-dom";
import cookie from 'js-cookie';
export default function Lists() {
  const navigate = useNavigate();
  var [token,settoken]=useState("");
//   var data=[{
//     adult: false,
//     backdrop_path: '/2Icjry0xdRSNxrtsBR1F47b9r3u.jpg',
//     genre_ids: [Array],
//     id: 615656,
//     original_language: 'en',
//     original_title: 'Meg 2: The Trench',
//     overview: 'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high- stakes battle for survival.',
//   popularity: 6365.282,
//   poster_path: '/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
//     release_date: '2023-08-02',
//       title: 'Meg 2: The Trench',
//         video: false,
//           vote_average: 6.9,
//             vote_count: 941
// },
// {
// adult: false,
// backdrop_path: '/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg',
//   genre_ids: [Array],
//     id: 976573,
//       original_language: 'en',
//         original_title: 'Elemental',
//           overview: 'In a city where fire, water, land and air residents live together, a fiery young woman and a go -with-the - flow guy will discover something elemental: how much they have in common.',
// popularity: 2150.878,
// poster_path: '/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg',
//   release_date: '2023-06-14',
//     title: 'Elemental',
//       video: false,
//         vote_average: 7.8,
//           vote_count: 1553
// },
// {
// adult: false,
// backdrop_path: '/xVMtv55caCEvBaV83DofmuZybmI.jpg',
//   genre_ids: [Array],
//     id: 724209,
//       original_language: 'en',
//         original_title: 'Heart of Stone',
//           overview: 'An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon.',
// popularity: 1617.201,
// poster_path: '/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg',
//   release_date: '2023-08-09',
//     title: 'Heart of Stone',
//       video: false,
//         vote_average: 6.9,
//           vote_count: 862
// },
// {
// adult: false,
// backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
//   genre_ids: [Array],
//     id: 569094,
//       original_language: 'en',
//         original_title: 'Spider-Man: Across the Spider-Verse',
//           overview: 'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider - People charged with protecting the Multiverse’s very existence.But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.', 
// popularity: 1157.734,
// poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
//   release_date: '2023-05-31',
//     title: 'Spider-Man: Across the Spider-Verse',
//       video: false,
//         vote_average: 8.4,
//           vote_count: 3855
// },
// {
// adult: false,
// backdrop_path: '/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg',
//   genre_ids: [Array],
//     id: 667538,
//       original_language: 'en',
//         original_title: 'Transformers: Rise of the Beasts',
//           overview: 'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals.With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
// popularity: 1210.812,
// poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
//   release_date: '2023-06-06',
//     title: 'Transformers: Rise of the Beasts',
//       video: false,
//         vote_average: 7.5,
//           vote_count: 2982
// },
// {
// adult: false,
// backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
//   genre_ids: [Array],
//     id: 298618,
//       original_language: 'en',
//         original_title: 'The Flash',
//           overview: "When his attempt to save his family inadvertently alters the future, Barry Allen becomes tr apped in a reality in which General Zod has returned and there are no Super Heroes to turn to.In order to ave the world that he is in and return to the future that he knows, Barry's only hope is to race for his lif e.But will making the ultimate sacrifice be enough to reset the universe ? ",
//   popularity: 1124.404,
// poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
//   release_date: '2023-06-13',
//     title: 'The Flash',
//       video: false,
//         vote_average: 6.9,
//           vote_count: 2587
// },
// {
// adult: false,
// backdrop_path: '/nHf61UzkfFno5X1ofIhugCPus2R.jpg',
//   genre_ids: [Array],
//     id: 346698,
//       original_language: 'en',
//         original_title: 'Barbie',
//           overview: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
// popularity: 1315.095,
// poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
//   release_date: '2023-07-19',
//     title: 'Barbie',
//       video: false,
//         vote_average: 7.4,
//           vote_count: 3492
// },
// {
// adult: false,
// backdrop_path: '/mXBth6deOA3XLU6HKwoNor9UivP.jpg',
//   genre_ids: [Array],
//     id: 758769,
//       original_language: 'en',
//         original_title: 'Unwelcome',
//           overview: 'Londoners Maya and Jamie escape their urban nightmare to the tranquility of rural Ireland only to discover malevolent, murderous goblins lurking in the gnarled, ancient wood at the foot of their new    garden.When heavily pregnant Maya’s relationship with a local family turns sour, who – or what – will come to her rescue and to what extremes will she go to protect her unborn child ? ',
//   popularity: 723.883,
// poster_path: '/88bGObx8YKLQDOOhcrBHHzXpiAv.jpg',
//   release_date: '2023-01-27',
//     title: 'Unwelcome',
//       video: false,
//         vote_average: 5.9,
//           vote_count: 78
// },
// {
// adult: false,
// backdrop_path: '/nYDPmxvl0if5vHBBp7pDYGkTFc7.jpg',
//   genre_ids: [Array],
//     id: 709631,
//       original_language: 'en',
//         original_title: 'Cobweb',
//           overview: "Eight year old Peter is plagued by a mysterious, constant tapping from inside his bedroom w  all—one that his parents insist is all in his imagination.As Peter's fear intensifies, he believes that his parents could be hiding a terrible, dangerous secret and questions their trust.",
// popularity: 813.532,
// poster_path: '/cGXFosYUHYjjdKrOmA0bbjvzhKz.jpg',
//   release_date: '2023-07-19',
//     title: 'Cobweb',
//       video: false,
//         vote_average: 6.8,
//           vote_count: 239
// }];

const [pg,setpage]=useState(1);
const [data,setdata]=useState([]);
var [fav,setFav]=useState([]);

useEffect(()=>{
  setpage(1);
},[]);
useEffect(()=>{
auth();

},[]);
var auth=async ()=>{
  var c=cookie.get('ashokcookies');
  //console.log(c);
  if(c==undefined||c.length<10)navigate('/signin');
  else{
  c=c.substring(2);
  c=JSON.parse(c);
  //console.log(c);
  
  var d=await axios.post('/isauthenticated',c,
  {headers: {'content-type': 'application/x-www-form-urlencoded'}}
   
  );
  //console.log("+==",d);
  if(!d){
    navigate('/signin');
  }
 else{
  bringbackendfav(d.data);
 }
}
}
var bringbackendfav=(k)=>{
  //console.log("+",typeof(k));
  var t=k[0].fav.map((b)=>{
   return Number(b.id);
  });
  setTimeout(() => {
    //console.log(t);
    setFav([...t]);
  }, 50);
  
  setTimeout(() => {
   //console.log("=sfav=",fav);
  }, 100);
}

useEffect(()=>{
  movieUpdate();
},[pg]);

async function movieUpdate(){
  var res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${pg}`);
  res=res.data;
  setdata(res.results);
};
var updatePage=(page)=>{
if(pg+page>0){
  
  setpage(pg+page);
};
};

var handleFavourite=async(m)=>{
  var id=Number(m.id);
  //console.log(id);
  var c=cookie.get('ashokcookies');
  c=c.substring(2);
  var obj=JSON.parse(c);
  //console.log(typeof(obj));
  var snd={
  user:obj,
  movie:m
  }
if(!fav.includes(id)){
  setFav([...fav,id]);
 
   var f=await axios.post("/addfav",snd,
   {headers: {'content-type': 'application/x-www-form-urlencoded'}}
  );
  //console.log(f);
}
else{
  var array=[...fav];
  const index = array.indexOf(id);
  array.splice(index, 1);
  setFav([...array]);
  var f=await axios.post("/deletefav",snd,
   {headers: {'content-type': 'application/x-www-form-urlencoded'}}
  );
  //console.log(f);
}
 
 //console.log(fav);
}

  return (
    <div className='router-box'>
      <Banner/>
    <div className='List'>
      <h1 className="List-top">Movies</h1>
      <div className='movie-list'>
        {
          data.map((movie)=>(
              <div key={movie.id} className="movie-div">
                <img className="List-img" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}alt="Card"/>
              {fav.includes(Number(movie.id))?<button className="List-button" onClick={()=>{handleFavourite(movie)}} >Remove</button>:<button className="List-button" onClick={()=>{handleFavourite(movie)}} >Add</button>}
              </div>
          ))
        }
      </div>
     {/* pagenation   btn btn-primary */}
     <nav aria-label="Page navigation example " className='List-page'>
    <div className="page">
      <button className="List-page-link" aria-hidden="true" onClick={()=>updatePage(-1)}>&laquo;</button>
   
        <h6 className="List-page-link-pg">{pg}</h6>
    
        <button className="List-page-link" aria-hidden="true" onClick={()=>updatePage(1)}>&raquo;</button>
    </div>
</nav>

    </div>
    </div>
  )
}

