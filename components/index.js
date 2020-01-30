import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, Button } from "react-native";

const index = ({ history }) => {
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
      <Text>Home Page</Text>
      {loading && <Text>Loading ...</Text>}
      {categories.map((c, i) => (
        <Text key={i}>{c.name}</Text>
      ))}
      <Button title="Change Page" onPress={() => history.push("/other")} />
    </View>
  );
};

export default index;
