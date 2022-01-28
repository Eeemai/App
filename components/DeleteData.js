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
      .delete(`${baseURL}/${route.params.professionID}`)
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
