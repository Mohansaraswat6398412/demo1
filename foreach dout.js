let arr=[
    {
        name:"Aman",
        marks:20,
    },
    {
        name:"sonu",
        marks:33,
    },
]
arr.forEach(ms);
function ms(item,index)
{
    console.log(item.name);
    //arr[index]=item+"golu";
    item.name+="golu";
    console.log(item);
}
/*arr.forEach(new1);
function new1(item,index)
{
    console.log(index+="=>" +item+ " </br " );
}