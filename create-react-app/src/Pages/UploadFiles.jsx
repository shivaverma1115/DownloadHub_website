import React, { useContext } from 'react'
import { AuthContext } from '../AuthContextApi/ContextProvider';
import { useToast } from '@chakra-ui/react';

const UploadFiles = ({setIsLoading,name, setCreateMovie, createMovie}) => {
    const {token} = useContext(AuthContext) ;

    const handleUpload = async(e) => {
        e.preventDefault() ;
        const files = e.target.files
        const formData = new FormData() ;
        formData.append("Files",files[0])
        try {
            setIsLoading(true)
           var res = await fetch(`${process.env.REACT_APP_BACKENED_URL}/googleDrive`,{
                method:"POST",
                headers:{
                    // "Content-Type":"application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body:formData
            })
            var ans = await res.json() ;
            setCreateMovie({ ...createMovie, [e.target.name] : ans.webContentLink })
            setIsLoading(false)
            console.log(ans) ;
        } catch (error) {
            console.log(error) ;
            setIsLoading(false)
        }
    }
    return (
        <form >
            <input type='file' name= {name} onChange={(e)=>handleUpload(e)} />
        </form>
    )
}

export default UploadFiles
