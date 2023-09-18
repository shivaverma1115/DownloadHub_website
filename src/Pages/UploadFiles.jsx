import React, { useContext } from 'react'
import { AuthContext } from '../AuthContextApi/ContextProvider';

const UploadFiles = ({name,setIsLoading, setCreateMovie, createMovie}) => {
    const {token} = useContext(AuthContext) ;

    const handleUpload = (e) => {
        e.preventDefault() ;
        console.log(e.target.files) ;
        const files = e.target.files
        const formData = new FormData() ;
        formData.append("Image",files[0])
        try {
            setIsLoading(true) ;
            fetch(`http://localhost:4000/upload-images`,{
                method:"POST",
                headers:{
                    // "Content-Type":"application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body:formData
            })
            .then((res)=>{
                res.json().then((result)=>{
                    console.log("result",result.data[0].url) ;
                    setCreateMovie({ ...createMovie, [name]: result.data[0].url })
                })
            })
            .then(()=>{
                setIsLoading(false)
            })
        } catch (error) {
            console.log(error) ;
            setIsLoading(false)
        }
    }

    return (
        <form >
            <input type='file' name="Image" onChange={(e)=>handleUpload(e)} />
        </form>
    )
}

export default UploadFiles
