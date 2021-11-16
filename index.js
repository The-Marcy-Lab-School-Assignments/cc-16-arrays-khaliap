//write your code here
function replaceWithYerr (array,start = 0, end = array.length -1){
   let replaced = [];
    for (let i in array){
        if (i >= start && i < start + end){
            replaced.push( "yerr" );
        }else {
            replaced.push(array[i]);
        }
    }
    return replaced;
}
const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];
console.log(replaceWithYerr(months,1,3));