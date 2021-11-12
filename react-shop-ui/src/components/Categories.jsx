import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { userRequest } from "../requestMethods";
import { useState } from "react";
import { useEffect } from "react";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCats = async() =>{
      try {
        const res = await userRequest.get("/categories");
        console.log(res.data);
        setCategories(res.data);
      
        }catch{}
    }
    fetchCats();
  }, [])
  return (
    <Container>
      {categories && categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
