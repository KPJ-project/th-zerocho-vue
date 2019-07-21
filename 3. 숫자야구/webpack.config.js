const path = require('path');

//웹 패킹 할때, 아래의 module.exports 가 사용된다.
// 웹팩은 크게 4개의 설정이 중요
// entry module, plugins, output을 제외하곤 나머지는 부가 설정
//웹 팩을 쓰는 이유는 script가 너무 많아져서, 그것을 합치기 위해서 사용한다.
module.exports = {
    entry: {
        //여러 개의 script를 합칠 것인데, 가장 대표적인 파일이 entry 이다.
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{

        }],
    },
    plugins: [],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'), // 폴더 경로
    }
}