<script lang="ts">
	export let prefix: string;
	export let content: string;
	export let color: string | undefined = 'neutral';
	export let link: string | undefined;
</script>

<div class="pl-12">
	<span class="text-{color} opacity-50 absolute left-5">{prefix ?? '>'}</span>
	<code class="text-{color} opacity-75 h-auto">
		{#if link}
			<a href={link} class="text-info">{content}</a>
		{:else}
			{content}
		{/if}
	</code>
</div>
