export default function promiseAll() {
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
    }, 10);
  });

  const before = new Date();
  Promise.all([taskA, taskB]).then(() => {
    const after = new Date();
    const result = after.getTime() - before.getTime();
    console.log(result);
  });
}
