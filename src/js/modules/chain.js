export default function chain() {
  const taskA = () => {
    // throw new Error('task a error');
    console.log('Task A');
  };

  const taskB = () => {
    throw new Error('task b error');
    console.log('Task B');
  };

  const onRejected = (error) => {
    console.log(`error = ${error}`);
  };

  const promise = Promise.resolve();
  promise
    .then(taskA)
    .then(taskB)
    .then(taskA)
    .catch(onRejected);
}
