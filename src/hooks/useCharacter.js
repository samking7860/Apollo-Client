import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`

query GetCharacter($id: ID!){
    character(id: $id){
        name
        id
        image
        episode{
            name
            episode
        }
    }
}

`;

export const useCharacter = (id) => {
    const {data, error, loading} = useQuery(GET_CHARACTERS,{
        variables: {
            id
        }
    });
    return{
        data,
        error,
        loading,
    };
};