const fs = require('fs');
const http = require('http');
const url =require('url');
const server = http.createServer((req, rep) => {
    const tickects = 0;
    const parsedUrl=url.parse(req.url,true);
    const {name,issue,priority}=parsedUrl.query;
    const tickectID = Math.randome() * 100;
    const complaint = `TicketID: ${ticketId}\nName: ${name}\nIssue: ${issue}\nPriority: ${priority}\n\n`;

    if (priority && priority.toLowerCase() === "high") {
        fs.appendFileSync("URGENT.txt", complaint);
    } else {
        fs.appendFileSync("normal_complaints.txt", complaint);
    }

    switch (req.url) {
        case '/':
            rep.writeHead(200, { 'Content-Type': 'text/html' });
            rep.end("<h1>Welcome to Home Page</h1>");
            break;
        case '/about':
            rep.writeHead(200, { 'Content-Type': 'text/html' });
            rep.end("<h1>Welcome to About Page</h1>");
            break;
        default:
            rep.writeHead(404, { 'Content-Type': 'application/json' });
            rep.end(JSON.stringify({ username: "", phone: "" }));
            break;
    }
})
server.listen(8000, () => {
    console.log("Server is listening on port 8000");
})