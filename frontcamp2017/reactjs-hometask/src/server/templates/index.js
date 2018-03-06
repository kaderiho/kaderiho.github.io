export default (appComponent) => {
    return `<!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Basic ReactJS application</title>
            </head>
            
            <body>
                <h1>Hey!</h1>
                <div id="app">${appComponent}</div>
                <script src='/client/index.bundle.js'></script>
            </body>
        </html>`
}