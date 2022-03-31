<script>
export let search = "";
</script>

<form action="" on:submit|preventDefault>
    <input type="text" bind:value={search} placeholder="Search">
</form>

<style>
input{
    width:15rem;
    height:1.5rem;
    font-size:1.5rem;
    padding:5px;
    text-align: center;
}
</style>
