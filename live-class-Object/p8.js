let a=["tanumay","tanumay","Sutradhar", "Kum"]

let obj={};

for (let i=0; i<a.length; i++){

  if (obj[a[i]]==undefined){
    obj[a[i]]=1;
  }
  else {
    obj[a[i]]++
  }
  
}
console.log (obj)