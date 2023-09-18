import React from 'react'

const CloudinaryImg2 = ({createMovie,setCreateMovie,setIsLoading}) => {

    let formElem = document.querySelector("form");
  const handleSubmit = async (event) => {
      event.preventDefault();
    try {
      setIsLoading(true) ;
        const response = await fetch(`http://localhost:4000/upload-images`,{
            method: 'POST',
            body: new FormData(formElem)
          }
        );
        
        if (response.ok  ) {
          const data = await response.json();
          console.log('Image uploaded successfully:', data);

          setCreateMovie({ ...createMovie, big_img: data.data[0].url })
          setIsLoading(false) ;
        } else {
          console.error('Image upload failed.');
          setIsLoading(false) ;
        }
    } catch (error) {
      setIsLoading(false) ;
      console.error('Error:', error);
    }
  }
  return (
    <form encType="multipart/form-data">
      <input type="file" name="Image" multiple={2} required onChange={handleSubmit} /><br/>
    </form>
  )
}

export default CloudinaryImg2
