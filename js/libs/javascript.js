window.onscroll = function() {myFunction()};

function myFunction() 
{
    if (document.body.scrollLeft +1) 
    {
        console.log(scrollY);
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