import { Button } from "@mui/material";
import React, { useEffect } from "react";
function MultiFormData({ files, setFiles, filesNull }) {

  const handleFileChange = (e) => {
    setFiles(e.target.value[0])
    console.log(files)
  }
  if(filesNull){
/*     document.getElementById("hiddenFile").value = ; */
  }
    
  return (
    <div>
      <Button variant="contained">
        <input type="file" onChange={(e) => handleFileChange(e)}/>
      </Button>
      <input type="file" id="hiddenFile" onChange={(e) => handleFileChange(e)} hidden/>
    </div>
  );
}

export default MultiFormData;