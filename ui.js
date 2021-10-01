class UI{
    constructor()
    {
        this.profile=document.getElementById('profile');
    }
     showProfile(user)
    {
        this.profile.innerHTML=`
        <div class=card card-body mb-3>
        <div class=row>
        <div class=col-md-3>
        <img class="img-fluid mb-2" scr="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>

        </div>
        <div class="col -md-9"
        <span class="badge badge-Primary">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-Secondary">Name: ${user.name}</span>
        <span class="badge badge-Success">Public Followers: ${user.followers}</span>
        <span class="badge badge-Info">Public Following: ${user.following}</span>
       
        <ul class="list-group">
        <li class="list-group-items>Website/Blog: ${user.blog}</li>
        <li class="list-group-items>Member Since: ${user.created_at}</li>
        <li class="list-group-items>Twitter Username: ${user.twitter_username}</li>
       
        </ul>
        </div>
        </div>
        </div>
        
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
         `
console.log(user);
    }
    clearprofile()
    {
        this.profile.innerHTML="";
}
showalert(message,classname)
{
    this.clearalert();
const div=document.createElement('div');
this.classname=classname;
div.appendChild(document.createTextNode(message));
const container=document.querySelector('.searchContainer');
const search=document.querySelector('.search');
container.insertBefore(div,search);

}
clearalert()
{
    const curralert=document.querySelector('.alert');
    if(curralert)
    {
 clearalert.remove();
    }
}
}