import '../assets/index.less';
const mTl = () => {
  console.log('99999')
}
const TlPromise = new Promise(function(resolve, reject) {
  // ... some code

  if (true){
    resolve(121234);
  } else {
    reject(error);
  }
});
mTl();
console.log('--------------------------')
console.log([1,2,3].includes(1))
console.log('Set对象', new Set())
console.log('tl-测试123', TlPromise);