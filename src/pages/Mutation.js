import React from "react";
import {gql} from "apollo/client";
import { useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
mutation CreateProduct($name:String!, $quantityPerUnit: Int!){
    createProduct(record: {name: $name, quantityPerUnit:$quantityPerUnit}){
        record{
            name
        }
    }
}

`;


const Mutation = () => {
    const [createProduct, {data, loading, error}] = useMutation(CREATE_PRODUCT,{
        variables:{
            name:"hotdog",
            quantityParUnit: 3
        },
    })

    return(
        <div>
            <button onClick={() => createProduct()}>createProduct</button>
        </div>

    );
}

export default Mutation;