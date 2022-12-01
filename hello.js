function valid()
{
    var name=document.getElementById("name").value;
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(name == "glwec" && username=="glwec" && password=="glwec@123")
    {
        alert("login succesfully");
    }
    else
    {
      alert("login failed");
    }
}