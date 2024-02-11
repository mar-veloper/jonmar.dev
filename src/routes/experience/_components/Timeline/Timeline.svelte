<script lang="ts">
	import classNames from 'classnames';
	import CheckIcon from './CheckIcon.svelte';

	export const Position = {
		START: 'start',
		END: 'end'
	} as const;

	export let position: string | undefined = Position.START;
	export let role: string;
	export let date: string;
	export let company: string;
	export let tag: string | undefined;
	export let imgUrl: string | undefined;
	export let isFirst: boolean | undefined = false;
	export let isLast: boolean | undefined = false;
	export let isImgFull: boolean | undefined = false;
	export let link: string | undefined;
</script>

{#if isFirst}
	<hr
		class={classNames({
			'bg-primary': !isFirst,
			'bg-orange-300 opacity-75': isFirst
		})}
	/>
{/if}

<div class="timeline-middle">
	<CheckIcon fill={isFirst ? 'rgb(253, 186, 116)' : 'oklch(0.76172 0.089459 200.027)'} />
</div>

<div class="timeline-{position} opac mb-10 text-{position === 'start' ? 'right' : 'left'} w-full">
	<time class="font-mono text-xl italic">{date}</time>
	<h3 class="text-lg font-bold">{role}</h3>
	<h4
		class={classNames({
			'uppercase font-semibold text-md text-neutral-500 flex gap-1 justify-end': true,
			'flex-row-reverse': position === 'end'
		})}
	>
		<i>{tag}</i>
		•
		<a href={link} target="_blank" rel="noopener" class="text-primary hover:underline">
			{company}</a
		>
	</h4>
	<a href={link} target="_blank" rel="noopener" class="text-primary-500 underline">
		<figure
			class="bg-stone-100 mt-5 flex justify-center items-center border border-none w-full aspect-[16/9] hover:border-primary"
		>
			<img src={imgUrl} alt={role} class="w-{isImgFull ? 'full' : '2/4'}" />
		</figure>
	</a>
</div>

{#if !isLast}
	<hr
		class={classNames({
			'bg-primary': !isFirst,
			'bg-orange-300 opacity-75': isFirst
		})}
	/>
{/if}
