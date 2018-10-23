export default function promiseWorkflow() {
  function asyncFunction() {

    // Promiseオブジェクトを返却する.処理成功時にはresolveが呼ばれる
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        // 成功
        resolve('Async Hello world');
        // reject(new Error('Error'));
      }, 16);
    });
  }

  asyncFunction().then(function (value) {
    // 非同期処理成功
    console.log(`success : ${value}`);    // => 'Async Hello world'
  }).catch(function (error) {
    // 非同期処理失敗。呼ばれない
    console.log(error);
  });
}
