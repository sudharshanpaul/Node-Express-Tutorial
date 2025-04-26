const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('require',(name, id)=>{
    console.log(`Hii Hello Requir event is instantiated ${name} and id is ${id}`);
})
customEmitter.on('require',()=>{
    console.log('Data received');
})

customEmitter.emit('require');
customEmitter.emit('require','john', 34)