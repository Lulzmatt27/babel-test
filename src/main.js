import "core-js";

class App{
  run = async({...test}) =>{
        const name = 'Name';
        console.log(`value name: ${name}`);
        console.log(`test: ${test}`);
        console.log([1,2,[3,4], 5, [6,7]].flat());

  }
 
}

const app = new App();

app.run({a:1, b:2}).then(()=>console.log('done')).catch((err)=>console.error('error', error));