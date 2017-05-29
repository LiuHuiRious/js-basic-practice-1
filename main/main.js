// Write your cade below:
function caclRemaindar(a,b) {
    return a%b;
};

function caclSum(arr) {
    var sum=0;
    for(var i=0;i<arr.length;i++) {
        sum=sum+arr[i]
        ;    }
    return sum;
};

function caclSumInConditon(arr,num) {
    var sum=0;
    for(var i=0;i<arr.length;i++) {
        if(arr[i]<num){
            sum=sum+arr[i];
        }
    }
    return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}