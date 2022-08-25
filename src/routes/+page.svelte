<script>
    export let data
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Todos</h2>
<div>
    {#each data.todos as todo (todo.id)}
		<table class="todo">
          <tr>
            <th>ID</th> 
            <th>Name</th> 
            <th>Description</th> 
          </tr>
          <tr>
            <td>{todo.id}</td> 
            <td>{todo.name}</td> 
            <td>{todo.description}</td> 
          </tr>
        </table>
    {/each}
</div>

