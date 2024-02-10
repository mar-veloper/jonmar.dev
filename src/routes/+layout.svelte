<script lang="ts">
	import '../app.css';
	import Header from '../layout/Header.svelte';
</script>

<Header />
<main class="max-w-screen-xl mx-auto px-8">
	<slot />
</main>
