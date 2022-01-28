import React, { useEffect } from "react";
import axios from "axios";

{
  /*importing variables of configurations*/
}
import config from "../config/config";

function UpdateData({ route, navigation }) {
  let baseURL = config.baseURL;

  useEffect(() => {
    axios
      .put(`${baseURL}/${route.params.professionID}`, {
        long_name: route.params.professionName,
        short_name: route.params.professionName.substring(0, 5),
      })
      .then((res) => {
        navigation.replace("getAPI", { id: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return null;
}

export default UpdateData;
