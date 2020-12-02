import fetch from 'node-fetch';



const getResponseData = async (url) => {
    return new Promise((resolve, reject) => {
       let status,config
        fetch(url)
        .then((res)=> {
            status = res.status
            config = res.headers
            config.url = url
            return res.json()    
        }
        )
        
        .then ((data => {
        console.log(data)
            if(status == 200)
                resolve({status, data, config})
            
            else 
                reject({status})
        })
        )
        .catch(error => reject({response}));
    });
}

const postResponseData = async (url, body) => {
    return new Promise((resolve, reject) => {
        let status,config
        fetch(url, {  
        method: 'post',
        body:  JSON.stringify(body),
        headers: { 'Content-Type': 'application/json'}}
        )
        .then((res)=> {
            status = res.status
            config = res.headers
            config.url = url
            return res.json()    
        }
        )
        
        .then ((data => {
        console.log(data)
            if(status == 201)
                resolve({status, data, config})
            
            else 
                reject({status})
        })
        )
        .catch(error => reject({response: error}));
    });
}

const putResponseData = async (url, body) => {
    return new Promise((resolve, reject) => {
        let status,config
        fetch(url, {  
        method: 'put',
        body:  JSON.stringify(body),
        headers: { 'Content-Type': 'application/json'}}
        )
        .then((res)=> {
            status = res.status
            config = res.headers
            config.url = url
            return res.json()    
        }
        )
        
        .then ((data => {
            if(status == 200){
                console.log(status)
                resolve({status, data, config})
            }
            else{ 
                console.log(status)
                reject({status})
                
            }
            })
        )
        .catch(response => reject({response, status}));
    });

    }

const patchResponseData = async (url, body) => {
    return new Promise((resolve, reject) => {
        let status,config
        fetch(url, {  
        method: 'put',
        body:  JSON.stringify(body),
        headers: { 'Content-Type': 'application/json'}}
        )
        .then((res)=> {
            status = res.status
            config = res.headers
            config.url = url
            return res.json()    
        })
        .then ((data => {
            if(status == 200){
                console.log(status)
                resolve({status, data, config})
            }
            else{ 
                console.log(status)
                reject({status})                
            }
            }))
        .catch(response => reject({response, status}));
    });
}

const deleteResponseData = async (url) => {
    return new Promise((resolve, reject) => {
        let status,config
         fetch(url)
         .then((res)=> {
             status = res.status
             config = res.headers
             config.url = url
             return res.json()    
         }
         )
         
         .then ((data => {
         console.log(data)
             if(status == 200)
                 resolve({status, data, config})
             
             else 
                 reject({status})
         })
         )
         .catch(error => reject({response}));
     });
    }

export {
    getResponseData,
    putResponseData,
    patchResponseData,
    postResponseData,
    deleteResponseData
};
