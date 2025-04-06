import React from 'react'
import './Nav.css'

function MovieCard(props) {

  let latest = [
    {
      title: "Baby John",
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baby-john-et00386190-1733985497.jpg",
      language: "Hindi",
      alt:"Baby John"
    },
    {
      title: "LoveYapa",
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/loveyapa-et00427632-1738580822.jpg",
      language: "Hindi",
      alt:"LoveYapa"
    },
    {
      title: "The Exorcism of God",
      poster: "https://m.media-amazon.com/images/M/MV5BYjJmNGMwMWYtZDEwNC00N2IyLTg5MDAtZGQ0MTFmNDJjNzk2XkEyXkFqcGc@._V1_.jpg",
      language: "English",
      alt:"The Exorcism of God"
    },
    {
      title: "Raid",
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/raid-et00062208-16-09-2017-02-38-15.jpg",
      language: "Hindi",
      alt:"Raid"
    },
    {
      title: "Alice in Wonderland",
      poster: "https://i.pinimg.com/474x/f8/ac/c4/f8acc4a028cf294621a8c873c8f9aaff.jpg",
      language: "English",
     alt:"Alice in wonderland"
    },
    {
      title: "Chhapaak",
      poster: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a5ec7677995701.5c989853e148c.jpeg",
      language: "Hindi",
      alt:"Chhapaak"
    },
    {
      title: "Joker",
      poster: "https://rukminim3.flixcart.com/image/850/1000/k9u8zgw0/poster/4/s/z/large-joker-wall-posters-for-bedroom-living-room-office-pr-pos-original-imafrjq3zzttgfht.jpeg?q=90&crop=false",
      language: "English",
      alt:"Joker"
    },
    {
      title: "Munjya",
      poster: "https://st1.bollywoodlife.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-21-at-07.31.18-1.jpeg?impolicy=Medium_Widthonly&w=400&h=711",
      language: "Hindi",
           alt:"Munjya"
    },
    {
      title: "Frozen 3",
      poster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c1272053-184d-432d-a000-34b712209679/dfoxvrr-bf7512d8-9e1f-4ed8-8bb6-410486b43be6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MxMjcyMDUzLTE4NGQtNDMyZC1hMDAwLTM0YjcxMjIwOTY3OVwvZGZveHZyci1iZjc1MTJkOC05ZTFmLTRlZDgtOGJiNi00MTA0ODZiNDNiZTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Y6DY4P8ejyxTh-EnBQf_nbbecyGBq4B_IyrhpxofYRQ",
      language: "English",
      alt:"Frozen 3"
    },
    {
      title:"Jab We Met",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JSj53_98iglvxLGb6XKwUl_gpK3yh2egAg&s",
      language: "Hindi",
      alt:"Jab We Met"
    },
    {
      title: "Moana 2",
      poster: "https://image.tmdb.org/t/p/original/1meRzfWs2jiSlNcDgpCd2dcOXi7.jpg",
      language: "English",
      alt:"Moana 2"
    },
    {
      title: "Charlie and the Chocolate Factory",
      poster: "https://lh4.googleusercontent.com/proxy/YTY5RqzUvYh54MHyJnQnhPgwrw67MFF8zBH6umQEZreFdQjNVkm4J2S7Uk9i0daL5vbS1lRhE8QYKrxW9ArHLq8Dh7jUq-RGdGpQFm9giLqAoVUJZkZs2USpnwse-Q",
      language: "English",
      alt:"Charlie and the Chocolate Factory"
    }

    
  ]


  if (props.type === "hindi") {
    latest = latest.filter((element) => {
      return element.language === "Hindi";
    })
  }
  else if (props.type === "english") {
    latest = latest.filter((element) => {
      return element.language === "English";
    })
  }


  return (
    <>
      <div className='card'>
        <div className='contentCard'>
          {latest.map((e) => {
            return (
              <>
                <div className='item'>
                  <img src={e.poster}  alt={e.alt}/>
                  <p>{e.title}</p>

                </div>
              </>
            )
          })}

        </div>
        {/* <img src={props.src} height="250px" alt={props.alt}/>
            <div className='rating'>
            <p>Rating:</p>
            <p>{props.rating}</p> */}
        {/* <p>Name:</p>
            <p>Release Year:</p>
            </div>

            
    */}
      </div>
    </>
  )
}
export default MovieCard
