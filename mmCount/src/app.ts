import { HttpClient } from 'aurelia-http-client';

export class App {
    message:string = null;

    activate() {
        var client = new HttpClient();
        
        return client.get('http://localhost:53537/api/values').then(r => {
            this.message = r.response;
        })
    }
}
