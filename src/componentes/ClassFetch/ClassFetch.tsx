
class ConnectFetch {
    url: string;
    Dataheaders?: Object
    constructor(url: string, Dataheaders?: Object){
        this.url = url;
        this.Dataheaders = Dataheaders;
    }
    async conectJsonUrlJson(){
        try { 
            const response = await fetch(this.url); 
            if(response.status === 200){
                const apiData = await response.json();
                return apiData;
            }else if (response.status === 404){
                console.log('Erro 404!')
            }
        } catch (error) {
            console.error('Erro:', error); 
        }
    }
    
    async metodPost(){
        const headersData = {
            method: 'POST',
            body: JSON.stringify(this.Dataheaders),
            headers: new Headers({
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }),
        };
        try { 
            console.log(headersData)
            const response = await fetch(this.url, headersData); 
            if(response.status === 200){
                const apiData = await response.json();
                return apiData;
            }else if (response.status === 404){
                console.log('Erro 404!')
            }
        } catch (error) {
            console.error('Erro:', error); 
        }
    } 
}
export default ConnectFetch;
