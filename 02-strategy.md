策略模式的定义是：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。


### 01使用策略模式计算奖金
```js
    var strategies = {
        S: function(salary) return {
            salary * 4
        },
        A: function(salary) return {
            salary * 3
        },
        B: function(salary) return {
            salary * 2
        }
    }

    var calculateBonus = function(performanceLevel, salary){
        return strategies[performanceLevel]*salary
    }
    calculateBonus('B', 2000)
    calculateBonus('S', 600)
```