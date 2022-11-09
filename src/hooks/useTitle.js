import {useEffect} from 'react'

const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `${title} - Yummy Kitchen`;
    },[title])
}


export default useTitle;