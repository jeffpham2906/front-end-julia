const url =()=>{
    if(import.meta.env.MODE === 'development'){
        console.log("dev mode")
        return `${import.meta.env.VITE_BACKEND_URL_DEV}api`
    }
    if(import.meta.env.MODE === 'production'){
        console.log('prod mode')
        return `${import.meta.env.VITE_BACKEND_URL_PROD}api`
    }
    return
}

export const BACKEND_URL = url()

