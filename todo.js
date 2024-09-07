let todo=[];
for(i=0;i<5;i++)
{
l=prompt("enter the task u want to do");
if(l=="add")
{
  name=prompt("enter the name u want to add"); 
todo.push(name);
console.log("task added");
console.log(todo);
}
else if(l=="delete")
{
    console.log(todo);
   let d=prompt("enter the index of which name u want to delete");
   todo.splice(d,1);
   console.log(todo);
}

else{
    console.log(todo);

}
}