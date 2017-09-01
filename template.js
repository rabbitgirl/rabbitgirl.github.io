// this is a javascript file you fucks

// templated head
var head_front = `  <link rel="shortcut icon" href="{Favicon}">

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
        
            <a href="https://twitter.com/__rabbitgirl">
                <img src="http://static.tumblr.com/xi4q7k3/jWanvi7pe/link_icon_-_twitter.png">
            </a>
            <a href="https://music.rabbitgirl.me">
                <img src="http://static.tumblr.com/xi4q7k3/Wkxnvi7pm/link_icon_-_bandcamp.png">
            </a>
            <a href="https://soundcloud.com/rabbit_girl">
                <img src="http://static.tumblr.com/xi4q7k3/gwjnvi7pi/link_icon_-_soundcloud.png">
            </a>
            <a href="https://linkedin.com/in/ritterg">
                <img src="http://static.tumblr.com/xi4q7k3/D7Envi7pp/link_icon_-_linkedin.png">
            </a>
        
        </div>
            
    </div>
    
    <div id="sidebar">
        
        <ul>
        <li><a href ="/about.html">about</a></li>
        <li><a href ="http://music.rabbitgirl.me">music</a></li>
        <li><a href ="/writing.html">writing</a></li>
        <li><a href ="/portfolio.html">portfolio</a></li>
        <li><a href ="/projects.html">projects</a></li>
        <li><a href ="http://blog.rabbitgirl.me">blog</a></li>
        <li><a href ="/friends.html">friends</a></li>
        <li><a href ="/contact.html">contact</a></li>
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