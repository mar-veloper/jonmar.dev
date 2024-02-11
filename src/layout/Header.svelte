<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/assets/logo/logo-cyan-v3.png';
	import classNames from 'classnames';
	import ThemeSwitch from './ThemeSwitch.svelte';
	import routePaths from '$lib/routePaths/index.js';

	let activePath: string;
	let routerPathTyped = routePaths;

	$: paths = Object.keys(routerPathTyped);

	function getPath(pathname: string) {
		const currentPath = pathname.split('/')[1];
		activePath = `/${currentPath}`;
	}

	$: getPath($page.url.pathname);
</script>

<header class="navbar">
	<nav class="mx-auto max-w-screen-xl flex">
		<div class="flex-shrink-0 w-1/4">
			<a href="/">
				<figure class="">
					<img src={Logo} alt="logo" class="w-full" />
				</figure>
			</a>
		</div>
		<ul class="flex justify-between items-center w-3/4">
			{#each paths as path}
				<li
					class={classNames({
						'divider divider-primary w-1/4 transition-all': true,
						'w-full': activePath === routerPathTyped[path]
					})}
				>
					<a
						href={activePath === routerPathTyped[path] ? null : routerPathTyped[path]}
						class={classNames({
							'p-1 border-x-2 hover:border-primary': true,
							'border-y-0 border-x-2 border-primary text-primary cursor-default':
								activePath === routerPathTyped[path]
						})}>{path}</a
					>
				</li>
			{/each}
			<li
				class={classNames({
					'divider divider-primary transition-all': true
				})}
			>
				<ThemeSwitch />
			</li>
		</ul>
	</nav>
</header>
