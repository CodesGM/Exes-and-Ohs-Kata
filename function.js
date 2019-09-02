const XO = str => str.toLowerCase().split("").filter(x=>x=="x").length
               == str.toLowerCase().split("").filter(o=>o=="o").length;
