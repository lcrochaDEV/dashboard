import ConnectFetch from "componentes/ClassFetch/ClassFetch";

class ConnectApi {
    _id?: string | undefined;
    headersData?: Object | undefined;
    constructor(_id = '', headersData = {}){
        this._id = _id;
        this.headersData = headersData;
    }
    
    //METHOD GET E GET POR ID
    async methodGet() { 
        const URLFETCH = `http://192.168.1.252:3001/home/${this._id}`;  
        try{
            let data = new ConnectFetch(URLFETCH);
            let comandList = await data.metodGet();
            return comandList;
        }catch(error){
            console.log('Url não encontrada!')
        } 
    }
    //POST
    async methodPost() {
        const URLFETCH = `http://192.168.1.252:3001/home/`;
        try{
            let data = new ConnectFetch(URLFETCH, this.headersData);   
            let comandList =  await data.metodPost();
            return comandList;
        }catch(error){
            console.log('Url não encontrada!')
        }
    }
    //PUT
    async methodPatch() { 
        const URLFETCH = `http://192.168.1.252:3001/home/${this._id}`;  

        try{
            let data = new ConnectFetch(URLFETCH, this.headersData);
            let comandList = await data.metodPatch();
            return comandList;
        }catch(error){
            console.log('Url não encontrada!')
        }
    }
    //DELETE
    async methodDelete() { 
        const URLFETCH = `http://192.168.1.252:3001/home/${this._id}`;  
        try{
            let data = new ConnectFetch(URLFETCH);
            let comandList = await data.metodDelete();
            return comandList;
        }catch(error){
            console.log('Url não encontrada!')
        }
    }
}

export default ConnectApi