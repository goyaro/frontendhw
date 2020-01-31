import React, { useState, useEffect } from "react";
import Header from "./Header";
import SurgeryCard from "./SurgeryCard";
import axios from "axios";
import { ScrollView, View } from "react-native";

const CategoryPage = ({ history }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9001/categories")
      .then(res => {
        setCategories(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  return (
    <View>
      <Header />
      <ScrollView>
        {categories.map((c, i) => (
          <SurgeryCard category={c} key={i} history={history} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryPage;
