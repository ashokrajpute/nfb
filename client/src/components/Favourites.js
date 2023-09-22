import React ,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cookie from 'js-cookie';
export default function Favourites() {
  const navigate = useNavigate();
   
 var el=5;
 let genreids = {
  28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
  27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
};
 var [pg,setpg]=useState();
 var [favmovies,setFavMovies]=useState([]);
 var [genre,setgenre]=useState([]);
 var [toshowfavmovies,settoshowfavmovies]=useState([]);
 var [fivefavmovies,setfiveMovies]=useState([]);
 var [newgenre,setnewgenre]=useState("");
 var [srch,setsrch]=useState("");






 useEffect(()=>{
  auth();
  //interv();
  
 
  
  },[]);
  var auth=async ()=>{
    var c=cookie.get('ashokcookies');
    //console.log("1",c);
    if(c==undefined||c.length<10)navigate('/signin');
    else{
    c=c.substring(2);
    c=JSON.parse(c);
    //console.log(c);
    
    var d=await axios.post('/isauthenticated',c,
    {headers: {'content-type': 'application/x-www-form-urlencoded'}}
     
    );
    
   if(!d){
      navigate('/signin');
    }
    else{

      starter(d.data[0].fav);
    }
  }
    
  }







// useEffect(()=>{
// starter();
//  },[]);

 var starter=async(k)=>{
 
  var t=k.map((b)=>{
   return b;
  }); 

  // console.log("ashokcookie:",t);
  //return t;
  var d=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=1");
  d=d.data;
 //console.log("2 starter");

    setFavMovies([...t]);
  
  
  
  
  


//   var d=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=1");

// d=d.data;
// console.log("starter");

// setFavMovies([...d.results]);

 }
 
 //======
 useEffect(()=>{
//console.log("change",favmovies);
  var g=[];
favmovies.filter((m)=>{
   if(!g.includes(m.genre_ids[0])){
    g.push(m.genre_ids[0]);
   }
   return false;
  });
  
  setgenre([...g]);
   setTimeout(() => {
    setnewgenre("Genres");
    settoshowfavmovies([...favmovies]);

   }, 50);
   setTimeout(() => {
    setpg(1);
   }, 100);
   // console.log("favmovieschange");


   },[favmovies]);
 

//======
 

//====


var pageChange=(page)=>{
  
  var total=(toshowfavmovies.length+el)/el;
  if(toshowfavmovies.length%el===0)total--;
if(pg+page>0&&pg+page<=total){
setpg(pg+page);

}

 }




 useEffect(()=>{
  var l=pg-1,u=pg,el=5;
  var array=toshowfavmovies.filter((v,index)=>{
  return index>=l*el&&index<u*el;
  })
  // setTimeout(() => {
    setfiveMovies([...array]);
  // }, 100);
 // console.log("five movies");

 },[pg,toshowfavmovies]);
///=====
var handlegenrechange=(g)=>{

if(g!=newgenre){
  setpg(0);
setnewgenre(g);
var array=[];
if(g!="Genres"){
favmovies.filter((m)=>{
if(g==genreids[m.genre_ids[0]])array.push(m);
return false;
});
setTimeout(() => {
  settoshowfavmovies([...array]) ;
},50);

}
else{
 
  setTimeout(() => {
    settoshowfavmovies([...favmovies]) ;
  },30);
}

setTimeout(() => {
  setpg(1);
}, 100);
  
 



}


}

var handlesrch=(e)=>{
//console.log(e.target.value);
setsrch(e.target.value);
}
var handlesubmit=(e)=>{
  e.preventDefault();
  if(srch=="")return;
setnewgenre("");
var array=[];var t;var tosrch=srch.toLowerCase();
//console.log(tosrch);
favmovies.filter((m)=>{
t=m.title.toLowerCase();
if(t.includes(tosrch)){
  array.push(m);
}
})
setTimeout(() => {
  setpg(0);
  settoshowfavmovies([...array]);
}, 50);
setTimeout(() => {
  setpg(1);
  setsrch("");
}, 80);



}

//=====
  return (
    <div className='fav-box'>
      <form className="fav-form">
      <input className="form-control mr-sm-2" type="search" placeholder="Movie name" aria-label="Search" value={srch}onChange={handlesrch}/>
      <button className=" btn my-2 my-sm-0 " /*style={{outline:"none",borderRadius:"5px",height:"65%",border:"0px"}}*/ type="submit" onClick={handlesubmit}>Search</button>
    </form>
    
    {/* ========= */}
   
  <div className='fav-genre'>
  <button className='genre-button'onClick={()=>handlegenrechange("Genres")}>Genres</button>
      {
    genre.map((m)=>(
    <button className='genre-button' onClick={()=>handlegenrechange(genreids[m])}>{genreids[m]}</button>
    ))

      }
         
        
         
    </div>
  



    <div className='fav-movies'>
      {
       fivefavmovies.map((mdata,index)=>(
        <div key={mdata.id} className='fav-movie'>
           <h6>{(el*(pg-1))+index+1}</h6>
           <img className="fav-img" src={`https://image.tmdb.org/t/p/original${mdata.backdrop_path}`}alt="Card"/>
          <h6 style={{width:"100%"}}>{mdata.title}</h6>
         <h6 style={{width:"100%",display:"flex",justifyContent:"end",marginRight:"1%"}}>Rating: {mdata.vote_average}</h6>
        </div>
       ))

      }

      {/* ============ */}
    
      <nav aria-label="Page navigation example " className='List-page'>
    <div className="page">
      <button className="List-page-link" aria-hidden="true" onClick={()=>pageChange(-1)}>&laquo;</button>
   
        <h6 className="List-page-link-pg">{pg}</h6>
    
        <button className="List-page-link" aria-hidden="true" onClick={()=>pageChange(1)}>&raquo;</button>
    </div>
</nav>
    </div>
    
    </div>
  )
}
