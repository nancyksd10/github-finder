
//intialsie github
const github=new Github;
const ui= new UI;
const searchuser=document.getElementById('searchUser');
searchuser.addEventListener('keyup',(e)=>{
    //get input text
  const userText=e.target.value;
    if(userText!== ''){
        //console.log(userText);
        //make http call
        github.getuser(userText)
        .then((data) =>{
            if(data.profile.message==='not found')
            {
               //show alert 
               ui.showalert('User not found','alert alert-danger')
            }
            else{
                ui.showProfile(data.profile);
            }
        
            //console.log(data);
        })
    
}
        else{
            ui.clearprofile();
        }
     
});
