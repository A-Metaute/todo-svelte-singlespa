
<script>
    let task = "";
    
    function addTask(){
        //localStorage.clear();
        if(task.length > 0){
            let taskList = JSON.parse(localStorage.getItem('tasks'));
            console.log(taskList);
            if(taskList == null || taskList == undefined){
                taskList = [];
            }
            let id = (taskList == null || taskList == undefined)? 0 : taskList[taskList.length-1].tID+1;
            let newTask = {tID:id, name:task, completed:false}
            console.log(newTask);
            taskList.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(taskList));
        }
        console.log(task.length);
    }
</script>

<div class="wrapper">
    <h1>
        Task Adder
    </h1>
    <div class="adder">
        <div class="inputs">
            <label for="text">Enter the task:</label>
            <input type="text" name="text" bind:value={task}>
        </div>
        <button on:click={addTask}>Add task</button>
    </div>
</div>
    
<style>
    div.wrapper{
      display:flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
    }
    
    h1 {
      margin:2rem 0px;
      font-size: 3rem;
    }
    
    div.adder {
        margin-top: 2rem;
        padding:2rem;
        background-color: lightblue;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        gap:2rem;
        width:50vw;
        border-radius: 10px;
    }
    
    div.inputs{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width:100%;
    }
    label{
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    input{
        width:70%;
        height:2rem;
        text-align: center;
    }
    
    button {
        background-color:lightgray;
        border:0px;
        padding:0.8rem;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1.2rem;
    }
    
    button:hover{
        background-color: orange;
    }
    
    button:active{
        background-color: orangered;
    }
</style>