import './css/common.css';
import './css/index.css';
console.log('1231')
if (process.env.NODE_ENV === 'shanshan') {
  alert(123)
 console.log('shan');
} else if (process.env.NODE_ENV === 'test2') {
  console.log('test2');
} else{
  console.log('nonono')
}

(() => {
  const {test, name,arr} ={
    test:100,
    name:'shanshan',
    arr:[1,3,4]
  } 
  const arr1=[5,2,9,...arr];
  console.log(arr1)
  console.log(window)
})(window)

