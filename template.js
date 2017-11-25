// this is a javascript file you fucks

// templated head
var head_front = `  <link rel="shortcut icon" href="/Images/favicon.png">

    <Title>@_____@</title>

    <link id=ext_css rel=stylesheet href="/main.css">

`
var head_back = ``

// templated body html
var body_front = `
        <div id="back"></div>
        <div id="header">
        
        <a href=/>@____@</a>
        
        <div id="headerlinks">
        
            
        <a href="https://twitter.com/ffvvkkrr">
                <img src="/Images/link%20icon%20-%20twitter.png">
            </a>
            <a href="http://music.fvkr.co">
                <img src="/Images/link%20icon%20-%20bandcamp.png">
            </a>
            <a href="https://soundcloud.com/rabbit_girl">
                <img src="/Images/link%20icon%20-%20soundcloud.png">
            </a>
            <a href="https://instagram.com/ffvvkkrr">
                <img src="/Images/link%20icon%20-%20instagram.png">
            </a>
        <a href="https://bitbucket.org/rabbitgirl">
                <img src="/Images/link%20icon%20-%20bitbucket.png">
            </a>
        
        </div>
            
    </div>
    
    <div id="sidebar">
        
        <ul>
        <a href="/about.html"><li>about</li></a>
        <a href="/music.html"<li>music</li></a>
        <a href="/writing.html"><li>writing</li></a>
        <a href="/projects.html"><li>projects</li></a>
        <a href="http://blog.fvkr.co"><li>blog</li></a>
        <a href="/contact.html"><li>contact</li></a>
        </ul>
    
    </div>

    <div id=body>
`;
var body_back = `
</div>
`;

// wraps the per-page body/head in the above variables
function insert_content() {
    
    // wrap head
    document.head.innerHTML = head_front + document.head.innerHTML + head_back;
    
    // wrap body
    document.body.innerHTML = body_front + document.body.innerHTML + body_back;
}

// displays the body
function activate_content() {
    document.body.style['display'] = "";
}


// on start, body has "display:none" and only contains custom content


// once the window is loaded, we need to add in our content and 
// display it
window.onload = function(){
    insert_content()
    
    // wait for our css to load
    while (document.getElementById("ext_css") === undefined) {
        // loop
    }
    
    // finally display our shit
    document.getElementById("ext_css").onload = activate_content;
}