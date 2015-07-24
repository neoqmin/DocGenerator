var express = require('express');
//var http = require('http');
var path = require('path');
// express 4.x���ʹ� ������ body parser ����� ���������Ƿ� �Ʒ��� ���� body-parser�� �߰�������Ѵ�.(npm ��ġ�� �ؾ���)
var bodyParser = require('body-parser');

// mongo db�� ������ mongod�� �����ؾ��Ѵ�.
var mongoose = require('mongoose');

// mongoose�� ����ϴ� ������ ��Ű���� ����ϱ� �����̴�.
var MemoSchema = mongoose.Schema({ username: String, memo: String });

var Memo = mongoose.model('MemoModel', MemoSchema);

var app = express();

mongoose.connect('mongodb://localhost/keveindb', function (err) {
    if (err) {
        console.log('mongoose connection error :' + err);
        throw err;
    }
});

// ejs�� ������ �Ѵ�.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ������ body �Ľ��� �ϱ� ���� �Ʒ��� �ڵ带 �߰��ؾ��Ѵ�.
app.use(bodyParser.urlencoded({ extended: false }));



app.post('/insert', function (req, res) {
    var memo = new Memo({ username: req.body.username, memo: req.body.memo});
    memo.save(function (err, silence) {
        if (err) {
            console.error(err);
            throw err;
        }
        res.send('success');
    });
});

app.get('/', function (req, res, err) {    
    res.render('index', { title: 'Express', name: 'Kevin'});
});


module.exports = app;