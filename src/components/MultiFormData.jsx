import { Button } from "@mui/material";
import React, { useEffect } from "react";
function MultiFormData({ setFiles }) {
  //handles the file input and saves it in the files element
  const handleFileChange = (e) => {
    setFiles(e.target.files[0])
  }
  return (
    <div>
      <Button variant="contained">
        <input type="file" onChange={(e) => handleFileChange(e)} />
      </Button>
    </div>
  );
}

export default MultiFormData;