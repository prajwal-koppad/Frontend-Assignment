import React, { useEffect, useState } from "react";

const Edit = () => {
  const [details,setDetails] = useState({})
  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("userDetails"));
    console.log("Details", data);
    setDetails(data);
  }, []);
  return (
    <div>
      Editing
    </div>
  );
};

export default Edit;
