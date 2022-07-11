var Singleton = function(name){
    this.name = name
    this.instance = null
}

Singleton.prototype.getName = function(){
    return this.name
}

Singleton.getInstance = function(name){
    if(!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}

// Singleton.getInstance = (function(name){
//     var instance
//     return function(name){
//         if(!instance) {
//             instance = new Singleton(name)
//         }
//         return instance
//     }
// })()
var s1 = Singleton.getInstance('s1')
var s2 = Singleton.getInstance('s2')
console.log(s1 === s2)

/**
 * 
 * 只能通过Singleton.getInstance获取实例
 * 不能使用 new 关键字初始化实例
 * */ 