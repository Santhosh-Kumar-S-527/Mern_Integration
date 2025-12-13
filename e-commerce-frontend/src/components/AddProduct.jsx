import React, { useState } from "react";
import {API} from "../utils/Api"
export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit=async (e)=>{
        e.preventDefault();
        const product={name,price,image,description};
        try {
            const res=await fetch(`${API}/api/postProduct`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(product)
            });
            if(res.ok){
                alert("product added successfully");
                setName("");
                setPrice("");
                setRating("");
                setImage("");
                setDescription("");
            }
            else{
                alert("failed to add product");
            }
        } catch (error) {
            console.log(error);
            alert("failed to add product");
            
        }
        
     }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            placeholder="Product name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <br />

        <label>
          Price:
          <input
            type="number"
            value={price}
            placeholder="Product price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <br />

        <label>
          Rating:
          <input
            type="number"
            value={rating}
            placeholder="Product rating"
            onChange={(e) => setRating(e.target.value)}
          />
        </label>

        <br />

        <label>
          Image URL:
          <input
            type="text"
            value={image}
            placeholder="Product image"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <br />

        <label>
          Description:
          <input
            type="text"
            value={description}
            placeholder="Product description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
