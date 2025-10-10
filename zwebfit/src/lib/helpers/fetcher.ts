

export class Fetcher{
    constructor(){
    }
    async Post(data : any, url : string){
        let response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        return response;
    }
}