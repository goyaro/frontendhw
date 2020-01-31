import React, { useState, useEffect } from "react";
import Header from "./Header";
import SurgeryCard from "./SurgeryCard";
import axios from "axios";
import { ScrollView, View, Text } from "react-native";

const CategoryPage = ({ history }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:9001/categories")
      .then(res => {
        setLoading(false);
        setCategories(res.data);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
  }, []);
  return (
    <View>
      <Header />
      <ScrollView>
        {categories.map((c, i) => (
          <SurgeryCard
            category={c}
            key={i}
            onPress={() => history.push(`/other`)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryPage;
