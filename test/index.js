var TuringQueue = /** @class */ (function () {
    function TuringQueue() {
        this.data = [];
    }
    TuringQueue.prototype.push = function (item) {
        this.data.push(item);
    };
    TuringQueue.prototype.pop = function () {
        return this.data.shift();
    };
    return TuringQueue;
}());
var queue = new TuringQueue();
queue.push(0);
queue.push('1'); // Error
console.log(queue);
