class Github{
    constructor(){
        this.client_id='f1fcb5ac71fce5a3b31f';
        this.client_secret='4920602a3983999daa9e311d0712706e2ff766d8';
        
    }
    async getuser(user)
    {
        const profile_response= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}& client_secret=${this.client_secret}`);
       const profile= await profile_response.json();
        return{
            profile
        }
    }
}