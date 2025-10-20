const mymodule = require('./mymodule.js')


const dirPath = process.argv[2];

const filterExt = process.argv[3];

mymodule(dirPath,filterExt, (err,list)=>{
	if (err) {
    // Handle the error passed from the module
    console.error('There was an error:', err.message);
    return;
  }
  list.forEach(file => {
    console.log(file);
  });

})