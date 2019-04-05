module.exports = function() {
    return {
        add: function(num1, num2) {
            addition = num1 + num2;
            console.log(addition);
        },
        multiply: function(num1, num2) {
            multiplication = num1 * num2;
            console.log(multiplication);
        },
        square: function(num) {
            squared = num * num;
            console.log(squared);
        },
        random: function(num1, num2) {
            rand = Math.floor(Math.random() * num2) + num1;
            console.log(rand);
        }
    }
}