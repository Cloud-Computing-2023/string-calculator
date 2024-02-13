const http = require('http')
const qs = require('querystring')
const calculator = require('./calculator')

const server = http.createServer(function(request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function(data) {
      body += data
    })

    request.on('end', function() {
      const post = qs.parse(body)
      const numbers = post.numbers
      const result = calculator.add(numbers)
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end('Result: ' + result)
    })
  } else {
    var html = `
            <html>
                <body>
                   <!-- <form method="post" action="http://localhost:3000">Numbers: -->
                        <form method="post" action="?">Numbers: 
                        <input type="text" name="numbers" />
                        <input type="submit" value="Add" />
                    </form>
                </body>
            </html>`
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(html)
  }
})

const port = 3000
const host = '127.0.0.1'
//server.listen(port, host)
// Because this is now going to run on ECS , ECS wil have its own pubic IP(always change) of its container.We need to remove host. If we know DNS, you can hardcode it as host here.
server.listen(port)
console.log(`Listening at http://${host}:${port}`)
