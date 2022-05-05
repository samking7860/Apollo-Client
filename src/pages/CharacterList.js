import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";
import { Link } from "react-router-dom";



const CharacterList= ()=> {
    
    const {error, loading, data} = useCharacters();

    if(loading) return <div>spinner..</div>;
    
    if(error) return <div>something went wrong</div>;

    return(
      <div className="CharacterList">
        {data.characters.results.map(character => {
          return <Link to={`/${character.id}`}>
                  <img src={character.image} alt="hi"/>
                  <h2>{character.name}</h2>
                </Link>
        })}
      </div>

    );
    
  }
  
  export default CharacterList;
  
  
//   import { gql, useQuery } from '@apollo/client';

// const GET_GREETING = gql`
//   query GetGreeting($language: String!) {
//     greeting(language: $language) {
//       message
//     }
//   }
// `;

// function Hello() {
//   const { loading, error, data } = useQuery(GET_GREETING, {
//     variables: { language: 'english' },
//   });
//   if (loading) return <p>Loading ...</p>;
//   return <h1>Hello {data.greeting.message}!</h1>;
// }
