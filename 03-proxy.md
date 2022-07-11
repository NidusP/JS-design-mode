代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。

代理模式的关键是，当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象。替身对象对请求做出一些处理之后，再把请求转交给本体对象。

保护代理用于控制不同权限的对象对目标对象的访问，但在JavaScript并不容易实现保护代理，因为我们无法判断谁访问了某个对象。
虚拟代理把一些开销很大的对象，延迟到真正需要它的时候才去创建。是最常用的一种代理模式，本章主要讨论的也是虚拟代理。


### 虚拟代理实现图片预加载

```js
var myImage = (function(){
    var imgNode = document.createElement('img')
    document.body.appendChild(imgNode)

    return {
        setSrc: function(src){
            imgNode.src = src
        }
    }
})()


var proxyImage = (function(){
    var img = new Image()
    img.onload = function(){
        myImage.setSrc(this.src)
    }

    return {
        setSrc: function(src){
            myImage.setSrc('...loading.gif')
            img.src = src
        }
    }
})
proxyImage.setSrc('http://..../demo.png')

/**
 * 通过proxyImage间接地访问MyImage。proxyImage控制了客户对MyImage的访问，并且在此过程中加入一些额外的操作，比如在真正的图片加载好之前，先把img节点的src设置为一张本地的loading图片。
*/
```










### 总结
代理模式包括许多小分类，在JavaScript开发中最常用的是虚拟代理和缓存代理。虽然代理模式非常有用，但我们在编写业务代码的时候，往往不需要去预先猜测是否需要使用代理模式。当真正发现不方便直接访问某个对象的时候，再编写代理也不迟。