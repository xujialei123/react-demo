import {EventEmitter} from 'events'


const store =Object.assign({},EventEmitter.prototype,{
    num:0,
    getNum(){
        return this.num
    },
    addNum(num){
       
        this.num+=num
        this.emit('changed')
    },
    reduceNum(){
        this.num--;
        console.log(111)
        this.emit('changed')
    },
    addEventListener(callback){
        this.on('changed',callback)
    }
})
export default store