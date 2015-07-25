var express = require('express');
//var http = require('http');
var path = require('path');
// express 4.x부터는 내부의 body parser 기능이 빠져있으므로 아래와 같이 body-parser를 추가해줘야한다.(npm 설치도 해야함)
var bodyParser = require('body-parser');

// mongo db의 데몬인 mongod를 실행해야한다.
//var mongoose = require('mongoose');

// mongoose를 사용하는 이유는 스키마를 사용하기 위함이다.
//var MemoSchema = mongoose.Schema({ username: String, memo: String });

//var Memo = mongoose.model('MemoModel', MemoSchema);

var app = express();

/*mongoose.connect('mongodb://localhost/keveindb', function (err) {
    if (err) {
        console.log('mongoose connection error :' + err);
        throw err;
    }
});
*/
// ejs의 설정을 한다.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 실제로 body 파싱을 하기 위해 아래의 코드를 추가해야한다.
app.use(bodyParser.urlencoded({ extended: false }));



app.post('/insert', function (req, res) {
 /*   var memo = new Memo({ username: req.body.username, memo: req.body.memo});
    memo.save(function (err, silence) {
        if (err) {
            console.error(err);
            throw err;
        }
        res.send('success');
    });*/
});

app.get('/', function (req, res, err) {    
    res.render('index', { title: 'Express', name: 'Kevin'});
});


module.exports = app;
