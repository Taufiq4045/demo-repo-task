// Program to find the Median of two sorted arrays of same length

var arr1 = [1,3,5,7,9];
var arr2 = [0,2,4,6,8];

//Using Anonymous Function
var foo = function(ar1, ar2){
  
      let n = ar1.length;
      var  i = 0; var j = 0; var m1 = -1; var m2 = -1;
      
      for(let count = 0; count <= n; count++){
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; /* Store the prev median */
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; /* Store the prev median */
            m2 = ar2[j];
            j++;
        }
      }
      var m = m1+m2;
    console.log(m/2);
}

foo(arr1,arr2);

//Using meathod IIFE

(function(ar1,ar2){
    let n = ar1.length;
    var  i = 0; var j = 0; var m1 = -1; var m2 = -1;
    
    for(let count = 0; count <= n; count++){
      if (i == n)
      {
          m1 = m2;
          m2 = ar2[0];
          break;
      }
      else if (j == n)
      {
          m1 = m2;
          m2 = ar1[0];
          break;
      }
      if (ar1[i] <= ar2[j])
      {
          m1 = m2; /* Store the prev median */
          m2 = ar1[i];
          i++;
      }
      else
      {
          m1 = m2; /* Store the prev median */
          m2 = ar2[j];
          j++;
      }
    }
    var m = m1+m2;
  console.log(m/2);
})(arr1,arr2);

// Output is Median of two arrays
