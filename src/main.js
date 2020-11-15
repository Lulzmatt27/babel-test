class App{
  run = async({...test}) =>{
        const name = 'Name';
        console.log(`value name: ${name}`);
        console.log(`test: ${test}`)

  }
 
}

const app = new App();

app.run({a:1, b:2}).then(()=>console.log('done')).catch((err)=>console.error('error', error));