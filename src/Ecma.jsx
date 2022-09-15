import React from 'react'

export default function Ecma() {


    const arr =["hello" , "world" , "hello 2" , "right"];

/*
array function 
*/
// filteration --1 
console.log(arr , "====> array ")
const filteredArrData = arr.filter((i , index  , arr)=>i=== "abhidsjjdjd" );

console.log(filteredArrData , "filtered array data ")


console.log(arr , "====> array ")
const findArr = arr.find((i , index  , arr)=>i=== "abhidsjjdjd" );

console.log(findArr , "filtered array data ")

// every  some 
const someArr = arr.some((i , index  , arr)=>i=== "abhidsjjdjd" );

// 

const arrNum = new Array( "d" , "c" ,"e" , "hello");
const sort = arrNum.sort((a , b)=> b.localeCompare(a));
console.log(sort , 'hello  ----  ');


  return (
    <div>


        <h1> Ecma </h1>
    </div>
  )
}

