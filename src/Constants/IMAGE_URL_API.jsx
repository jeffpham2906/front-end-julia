const url =()=>{
    if(import.meta.env.MODE === 'development'){
        console.log("dev mode")
        return `${import.meta.env.VITE_BACKEND_URL_DEV}`
    }
    if(import.meta.env.MODE === 'production'){
        console.log('prod mode')
        return `${import.meta.env.VITE_BACKEND_URL_PROD}`
    }
    return
}
export const IMAGE_URL_API = `${url()}images/`