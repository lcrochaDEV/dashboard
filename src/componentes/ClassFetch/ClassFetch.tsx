
class ConnectFetch {
    url: string;
    Dataheaders?: Object
    constructor(url: string, Dataheaders?: Object){
        this.url = url;
        this.Dataheaders = Dataheaders;
    }
    async metodGet(){
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

    async metodPatch(){
        const headersData = {
            method: 'PATCH',
            body: JSON.stringify(this.Dataheaders),
            headers: new Headers({
              'Content-Type': 'application/json; charset=UTF-8',
              'Accept': 'application/json'
            }),
        };
        try { 
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
    
    async metodDelete(){
        const headersData = {
            method: 'DELETE',
        };
        try { 
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
