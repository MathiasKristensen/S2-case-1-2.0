window.onscroll = function() {myFunction()};

function myFunction() 
{
    
    for(i=0; i<2000;i++ )
        {
              document.getElementById("yarn").style.transform = "rotate(5deg)";         
        }
    
    if (document.body.scrollLeft +1) 
    {
        console.log(scrollY);
        
        //document.getElementById("yarn").style.transform = "rotate(1deg)";
    }
    
    var vid = document.getElementById("dvideo");
    
    if (scrollY > 426)
        {
            vid.muted = true;
        }
    else
        {
            vid.muted = false;
        }
}