var CreateDiv = (function(){
    var instance
    var CreateDiv = function(html){
        if(!instance) {
            this.html = html
            this.init()
            instance = this
        }
        // new 关键字返回 instance
        return instance
    }
    CreateDiv.prototype.init = function(){
        var div = document.createElement('div')
        div.innerHTML = this.html
        document.body.appendChild(div)
    }
    return CreateDiv
})()


var a = new CreateDiv('aaa')
var b = new CreateDiv('bbb')

console.log(a === b)
// true 