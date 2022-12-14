import { ChangeEvent, useState } from 'react';

function MultiFormData() {
  const [fileList, setFileList] = useState<FileList | null>(null);

  const handleFileChange = (e) => {
    setFileList(e.target.files);
  };

  const handleUploadClick = () => {
    if (!fileList) {
      return;
    }

    // 👇 Create new FormData object and append files
    const requestData = new FormData();
    files.forEach((file, i) => {
        requestData.append(`file-${i}`, file, file.name);
    });
/* 
    // 👇 Uploading the files using the fetch API to the server
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: requestData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err)); */
  };

  // 👇 files is not an array, but it's iterable, spread to get an array of files
  const files = fileList ? [...fileList] : [];

  return (
    <div>
      <input type="file" onChange={handleFileChange} multiple />

      <ul>
        {files.map((file, i) => (
          <li key={i}>
            {file.name} - {file.type}
          </li>
        ))}
      </ul>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default MultiFormData;
