export default class {
  constructor() {
    // this.hoge();
    this.chikuji();
  }

  hoge() {
    const taskA = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('taskA');
        resolve();
      }, 16);
    });

    const taskB = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('taskB');
        resolve();
      }, 1);
    });

    const before = new Date();
    Promise.race([taskA, taskB]).then(() => {
      const after = new Date();
      const result = after.getTime() - before.getTime();
      console.log(result);
    }).catch(() => {
      console.log('error');
    });
  }

  chikuji() {
    Promise.resolve()
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('taskA');
            resolve('taskA death');
          }, 16);
        });
      })
      .then((value) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(value);
            console.log('taskB');
            resolve('taskB death');
          }, 1);
        });
      })
      .then(value => {
        console.log('then');
        console.log(value);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
