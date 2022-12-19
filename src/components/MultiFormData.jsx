import { List, ListItem } from "@mui/material";
import React, { useState } from "react";
function MultiFormData({files, setFiles}) {
  const [fileList, setFileList] = useState(null);

  const handleFileChange = (e) => {
    setFileList(e.target.files);
    console.log("File List "+fileList);
    if (!fileList){
    }else{
      setFiles(fileList ? [...fileList] : []);
      console.log("files: " + files);
    }}

  // 👇 files is not an array, but it's iterable, spread to get an array of files
  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />
      <List>
        {files.map((file, i) => (
          <ListItem key={i}>
            {file.name} - {file.type}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default MultiFormData;