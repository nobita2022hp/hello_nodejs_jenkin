let express = require('express');
let app = express();
app.get('/contact', function (req, res) {
    res.send('Hello Node');
    console.log('Run success');
});

app.listen(3000, function () {
    console.log('Example app is listening on port 3000');
})
