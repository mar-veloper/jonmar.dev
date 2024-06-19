<script lang="ts">
	import Heading from '../../components/Heading.svelte.js';
	import PostCard from './_components/PostCard.svelte.js';
</script>

<Heading title="Post"
	>I feel like, writing is a good way to express my thoughts, share my experiences and at the same
	time record what I have learned.</Heading
>

<div class="flex flex-col md:flex-row gap-5">
	<div class="mockup-code w-full lg:w-1/2">
		<div class="h-full flex flex-col justify-between gap-5">
			<div>
				<code class="opacity-50 text-2xl text-wrap pl- h-auto">
					<h2 class="pl-5">Free and easy server setup (Part 1)</h2></code
				>
				<code class="text-wrap"
					><p class="pl-5 my-5">
						A perfect way to deploy your portfolio and side projects for free and easy setup.
					</p></code
				>
				<pre data-prefix="" class="text-success"><code></code></pre>
				<pre data-prefix="$"><code>Prerequisites:</code></pre>
				<pre data-prefix=">" class="text-warning"><code>Setup Orcle Cloud account...</code></pre>
				<pre data-prefix=">" class="text-warning"><code>Setup Cloudflare account...</code></pre>
				<pre data-prefix=">" class="text-success"><code>Done!</code></pre>
				<div class="mt-8">
					<code>
						<a class="text-primary pl-5 text-left underline" href="/posts">Read the article</a>
					</code>
				</div>
			</div>
			<div class="h-auto">
				<pre data-prefix="#" class="h-auto text-info opacity-75">server, vps, nginx, docker
            </pre>
			</div>
		</div>
	</div>
	<PostCard
		title="Free and easy server setup (Part 1)"
		intro="A perfect way to deploy your portfolio and side projects for free and easy setup."
		codeLines={[
			{ prefix: '$', content: 'Prerequisites:' },
			{ prefix: '>', content: 'Setup Orcle Cloud account...', color: 'neutral' },
			{ prefix: '>', content: 'Setup Cloudflare account...', color: 'warning' },
			{
				prefix: '>',
				content: 'Setup Cloudflare account...',
				link: '',
				color: 'warning'
			},
			{ prefix: '>', content: 'Done!', color: 'success' }
		]}
		tags={['server', 'vps', 'nginx', 'docker']}
	/>
</div>
