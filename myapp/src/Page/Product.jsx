import { Flex, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";

const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>ProductPage</h1>
      {
        <Grid templateColumns="repeat(4,1fr)" gap={6}>
          {data.length > 0 &&
            data.map((el) => {
              return (
                <GridItem>
                  <ProductCart
                    category={el.category}
                    image={el.image}
                    id={el.id}
                    title={el.title}
                    rating={el.rating.rate}
                    price={el.price}
                  />
                </GridItem>
              );
            })}
        </Grid>
      }
    </div>
  );
};

export default Product;
