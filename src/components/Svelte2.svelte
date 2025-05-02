<script>
  let name = "John";
  let isVisible = true;
</script>

<section>
  <div class="container mx-auto">
    <h1>Hello, world 2!</h1>
    <p>Welcome to my Svelte app 2.</p>
    <p>Here are some examples of how to use Svelte:</p>
    <ul>
      <li>
        <strong>Variables:</strong> Use the syntax to display
        variables. For example:
        <p>Hello, {name}!</p>
      </li>
      <li>
        <strong>Conditionals:</strong> Use the <code>#if</code> statement to
        conditionally render elements. For example:
        {#if isVisible}
          <p>This text is visible!</p>
        {/if}
      </li>
    </ul>
  </div>
</section>