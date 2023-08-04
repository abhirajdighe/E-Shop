import React from 'react';

const AddProduct =()=>{
    
    const[name,setname] = React.useState("");
    const[price,setprice]=React.useState("")
    const[category,setcategory] = React.useState("");
    const[company,setcompany] = React.useState("");

    const addproduct=async ()=>{
        console.log(name,price,category,company)
        const userId =JSON.parse(localStorage.getItem('user'))._id;
        const result = fetch("http://127.0.0.1:3000/add",{
            method:"post",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        console.warn(result);
        
    }


    return(
        <div className='addproduct'>
            <h1>AddProduct :- </h1>
            <input type="text" className='inputbox' placeholder='enter product name' value={name}
                onChange={(e)=>setname(e.target.value)}
            /> <br/> <br/>
            <input type="text" className='inputbox' placeholder='enter product price' value={price}
                onChange={(e)=>setprice(e.target.value)}
            /><br/> <br/>
            <input type="text" className='inputbox' placeholder='enter product category' value={category}
                onChange={(e)=>setcategory(e.target.value)}
            /><br/> <br/>
            <input type="text" className='inputbox' placeholder='enter product company' value={company}
                onChange={(e)=>setcompany(e.target.value)}
            /><br/> <br/>
            <button onClick={addproduct} className='addbtn' >Add Product</button>

        </div>
    )
}

export default AddProduct;