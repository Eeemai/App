import React, { useEffect } from "react";
import axios from "axios";

{
  /*importing variables of configurations*/
}
import config from "../config/config";

function PostData({ route, navigation }) {
  let baseURL = config.baseURL;

  useEffect(() => {
    axios
      .post(baseURL, {
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

export default PostData;
