import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";


const Character= ()=> {

  const { id } = useParams();
    
   const {data, loading, error} = useCharacter(id);

   console.log(error, loading, data);

   if(loading) return <div>spinner..</div>;
    
   if(error) return <div>something went wrong</div>;

    return(
      <div className="Character">
        <img src={data.character.image} width={750} height={750} alt="character pic"/>
        <div className="Character-content">
          <h1>{data.character.name}</h1>
          <p>{data.character.gender}</p>
          <div className="Character-episode">
            {data.character.episode.map(episode =>{
              return <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            })}
          </div>
        </div>
      </div>

    );
    
  }
  
  export default Character;
  

