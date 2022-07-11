// 将02中负责单例的代码移除，仅负责创建div
var CreateDiv = function(html){
    this.html = html
    this.init()
}

CreateDiv.prototype.init = function(){
    var div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
    // console.log('CreateDiv')
}


var ProxySingletonCreateDiv = (function(){
    var instance
    return function(html){
        if(!instance) {
            instance = new CreateDiv(html)
        }
        return instance
    }
})()


var a = new ProxySingletonCreateDiv('aaa')
var b = new ProxySingletonCreateDiv('bbb')

console.log(a === b)
// true
