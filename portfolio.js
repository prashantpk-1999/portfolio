const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 200;

// ab read krenge files ko
const home = fs.readFileSync('index.html','utf-8');
// const css = fs.readFileSync('style.css','utf-8');
const about = fs.readFileSync('./about.html','utf-8');
const skills = fs.readFileSync('./skills.html','utf-8');
const contact = fs.readFileSync('./contact.html','utf-8');
const projects = fs.readFileSync('./projects.html','utf-8');
// console.log(home);

// ab bnayenge server
const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    // res.writeHead(200,{'Content-type':'text/html'});

    if( url == '/'){
        res.end(home);
    }
    else if (url == '/about'){
        res.end(about);
    }
    else if(url == '/skills'){
        res.end(skills);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else if(url == '/projects'){
        res.end(projects);
    }
    
    else {
        res.end("<h1>404 not found</h1>");
        statusCode = 404;
    }
    // res.end(home);
    
});

// ab hum server ko listen krenge 
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname} : ${port}/`);
});


// const http = require('http');
// const fs = require('fs');
// const { url } = require('inspector');
// const hostname = '127.0.0.1'
// const port = 200;
// const myPortfolio = fs.readFileSync('index.html','utf-8');
// const about = fs.readFileSync('./about.html','utf-8');
// const skills = fs.readFileSync('./skills.html','utf-8');
// const contact = fs.readFileSync('./contact.html','utf-8');
// const projects = fs.readFileSync('./projects.html','utf-8');
// console.log(myPortfolio);
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'});
//     url = req.url;
//   if(url=='/'){
//     res.end(home);
//   }
//   else if(url==='/about'){
//       res.end(about);
//   }
//   else if(url ==='/contact'){
//       res.end(contact);
//   }
//   else if(url === '/skills'){
//       res.end(skills);
//   }
//   else if(url ==='/about-me'){
//       res.end(about-me);
//   }
//   else if(url ==='/projects'){
//       res.end(projects);
//   }
//   else{
// // http.STATUS_CODES = 404;
// StatusCode = 404;
//       res.end("404 not found")
//   }
 
// });

// server.listen(200,'127.0.0.1',()=>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// });