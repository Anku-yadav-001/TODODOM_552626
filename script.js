let form=document.querySelector("form")
let input1=document.getElementById("task")
let input2=document.getElementById("priority")
let tbody=document.querySelector("tbody");

let alldata=[];
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    let obj={};
    obj.task=task.value
    obj.priority=priority.value
    alldata.push(obj);
    tbody.innerHTML=null;
    alldata.map((ele)=>
    {
        let row=document.createElement('tr');
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        td1.innerText=ele.task;
        td2.innerText=ele.priority;
       
        
        row.append(td1,td2)
        if(td2.innerText=='High')
    
        {
            row.style.background="red";
            tbody.append(row)
        }
        else{
            row.style.background="green";
            tbody.append(row)
        }
        
        


    })

})
