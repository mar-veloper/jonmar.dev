<script lang="ts" content="module">
	import CodeLine from './CodeLine.svelte.js';
	interface CodeLineProps {
		prefix: string;
		content: string;
		color?: string | undefined;
		link?: string | undefined;
	}

	export let title: string;
	export let intro: string;
	export let codeLines: CodeLineProps[];

	export let tags: string[] | undefined;
</script>

<div class="mockup-code w-full lg:w-1/2">
	<div class="h-full flex flex-col justify-between gap-5">
		<div>
			<code class="opacity-60 text-2xl text-wrap h-auto"> <h2 class="px-5">{title}</h2></code>
			<code class="text-wrap"
				><p class="px-5 my-5">
					{intro}
				</p></code
			>
			{#each codeLines as codeLine}
				<CodeLine prefix={codeLine.prefix} content={codeLine.content} color={codeLine.color} />
			{/each}
			<div class="mt-8">
				<code>
					<a class="text-primary text-xl pb-1 pl-5 text-left hover:underline" href="/posts"
						>Read the article →</a
					>
				</code>
			</div>
		</div>
		<div class="md:mb-6">
			{#if tags}
				<CodeLine link="" prefix="#" color="info" content={tags.join(', ')} />
			{/if}
		</div>
	</div>
</div>
