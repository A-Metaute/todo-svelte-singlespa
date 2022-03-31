<script>
import { createEventDispatcher, onMount } from 'svelte';

const dispatch = createEventDispatcher();

export let task = {};

$:completed = (task.completed) ? "completed" : "active"; 

$:visibleText = (task.name.length > 300) ? task.name.slice(0, 300).concat("...") : task.name;

onMount(() => {
    console.log(task);
    console.log(task.completed);
    console.log(typeof(task.completed));
    console.log(task.completed == true);
});
</script>

<div class={completed}>
    <p>
        {visibleText}
    </p>

    <div id="buttons" class={completed}>
        {#if !task.completed}
        <button on:click={() => dispatch('taskCompleted', {tID: task.tID})}>
            Complete
        </button>
        {:else}
        <button on:click={() => dispatch('taskCompleted', {tID: task.tID})}>
            Uncomplete
        </button>
        {/if}
    
        <button on:click={() => dispatch('taskDeleted', {tID: task.tID})}>
            Delete
        </button>
    </div>
    

    <!-- <div id="buttons" class="completed">
        <button v-if="!task.completed" on:click={() => dispatch('taskCompleted', task.tID)}>
            Complete
        </button>
        <button v-else on:click={() => dispacth('taskCompleted', task.tID)}>
            Uncomplete
        </button>
        <button @click="$emit('taskDeleted', task.tID)">
            Delete
        </button>
    </div> -->
</div>

<style>
div {
    padding: 1rem;
    background-color: lightblue;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:50vw;
    border-radius: 10px;
}

div.completed{
    background-color: rgb(253, 172, 141);
}

#buttons{
    margin-left: 1rem;
    padding: 0px;
    width:auto;
    gap:1rem;
}

button {
    background-color:lightgray;
    border:0px;
    padding:0.5rem;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1rem;
}

button:hover{
    background-color: orange;
}

button:active{
    background-color: orangered;
}

p{
    margin:0rem;
    text-align: justify;
}

</style>