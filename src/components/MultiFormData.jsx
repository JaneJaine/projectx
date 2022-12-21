import { Button } from "@mui/material";
import React, { useEffect } from "react";
function MultiFormData({ files, setFiles, filesNull }) {

  const handleFileChange = (e) => {
    setFiles(e.target.files[0])
    console.log(files)
  }
    
  return (
    <div>
      <Button variant="contained">
        <input type="file" onChange={(e) => handleFileChange(e)}/>
      </Button>
    </div>
  );
}

export default MultiFormData;