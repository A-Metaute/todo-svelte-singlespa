  <script>
    import { afterUpdate, onMount, onDestroy } from "svelte"  
    import Search from "./Search.svelte"
    import Task from "./Task.svelte"
  
    let tasks = [];
    let search = "";
  
    $:visibleTasks = tasks.filter((task)=> (task.name.includes(search)));
    
    console.log(search);

    afterUpdate(() => {
        //console.log(filt);
    });
  
    onMount(() => {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        console.log(tasks);
        if(tasks == null || tasks == undefined){
        tasks = [];
        }
    });
  
    onDestroy(() => {
        console.log("B");
        console.log(search);
    });
  
    function completeTask(event){
        console.log(event.detail.tID);
        let id = searchIndex(event.detail.tID);
        console.log(id);
        tasks[id].completed = !tasks[id].completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        tasks = JSON.parse(localStorage.getItem('tasks'));
    };
  
    function deleteTask(event){
        let id = searchIndex(event.detail.tID);
        tasks.splice(id, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        tasks = JSON.parse(localStorage.getItem('tasks'));
    };
  
    function searchIndex(num){
        return tasks.findIndex((task)=>{
            return task.tID == num;
        });
    }
</script>

<h1>
    Task viewer
</h1>
<Search bind:search={search} />
<ul>
    {#each visibleTasks as t}
        <li>
            <Task task={t}  on:taskCompleted={completeTask} on:taskDeleted={deleteTask}></Task>
        </li>
    {/each}
</ul>

<style >
    h1 {
        margin:2rem 0px;
        font-size: 3rem;
    }

    ul {
        display:flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        gap:1rem;
        margin: 3rem 0px;
    }

    p{
        
    }

    li{
        list-style-type: none;
        padding: none;
    }
</style>