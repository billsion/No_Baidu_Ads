/*
 *
 *License: The MIT License (MIT) 
 *Copyright (c) 2013-2014 BillSion@gmail.com
 *Permission is hereby granted, free of charge, to any person obtaining a copy of this 
 *software and associated documentation files (the "Software"), to deal in the Software without restriction, 
 *including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 *and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
*/
var AdsElements = document.getElementsByClassName("m");
if(AdsElements.length > 0){
  for(var i = 0; i < AdsElements.length; i++){
    (function(i){
      var current = AdsElements[i];  
      while(current.tagName.toLowerCase() != 'table'){
        current = current.parentElement;
      }
      if(current.id > 0){
        //alert(current.id);
        if(current.nextSibling.tagName.toLowerCase() == 'br'){
          current.nextSibling.remove(); 
        }
        if(current.nextSibling.nextSibling.tagName.toLowerCase() == 'script'){
          current.nextSibling.nextSibling.remove();
        }
        current.remove();
      }
    })(i);
  }
}
