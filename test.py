from flask import Flask

app = Flask(__name__)

@app.after_request
def add_headers(res):
    res.headers['Access-Control-Allow-Origin'] = '*'
    return res


@app.route('/hello')
def hello():
    print('debug')
    return {
        'data': 'hello',
        'msg': 'success',
        'code': 0
    }

if __name__ == '__main__':
    app.run(debug = True, port = 8888)