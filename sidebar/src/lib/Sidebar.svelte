<script>
</script>

<div>
    <img alt="Svelte logo" src="src/assets/svelte.png" />
    <p>Svelte ToDo</p>
</div>

<nav>
    <a href="/list">Show tasks</a>
    <a href="/add">Add task</a>
</nav>

<style>
div{
    grid-column: 1 / 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
}

img{
    width: 48px;
    height: 48px;
    margin-left: 20px;
}

p{
    display:inline-block;
    font-weight: bold;
    font-size: 2rem;
}

nav{
    grid-column: 2 / 3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
}

a{
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    color: black;
}

a:hover {
    color: #ff3e00;
}
</style>