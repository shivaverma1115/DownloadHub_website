import React, { createRef, useState } from 'react'

const CloudinaryImg = ({ createMovie, setCreateMovie, setIsLoading }) => {
  const [files, setFiles] = useState();

  const handleSubmit =async()=>{
    const formData = new FormData() ;
    formData.set("Image",files.File.name) ;
    const res = await fetch('http://localhost:4000/upload-images',{
      method:"POST",
      body: formData
    })
    const ans = await res.json() ;
    console.log(files) ;
  }

  return (
    <>
      <input type="file" accept="image/jpg, image/png" multiple onChange={(e) => {
        if (e.target.files && e.target.files.length > 0) {
          setFiles(e.target.files);
        }
      }}
      />
      <input type='submit' onClick={handleSubmit} />
    </>
  )
}

export default CloudinaryImg
