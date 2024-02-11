<script lang="ts">
	import Timeline from './_components/Timeline/Timeline.svelte';
	import { waysLogo, saltLogo, wenetLogo, daytwoImg } from '$lib/assets/images/index.js';

	const experiences = [
		{
			date: '2022 - Present',
			role: 'Full-stack Developer',
			company: 'Daytwo AS',
			tag: 'Fulltime',
			imgUrl: daytwoImg,
			isFirst: true,
			isImgFull: true,
			link: 'https://daytwo.no'
		},
		{
			date: '2020 - 2022',
			role: 'Software Developer',
			company: 'WAYS AS',
			tag: 'Fulltime',
			imgUrl: waysLogo,
			link: 'https://ways.no'
		},
		{
			date: '2020',
			role: 'Frontend Developer',
			company: 'Wenet AS',
			tag: 'Partime',
			imgUrl: wenetLogo,
			isLast: true,
			link: 'https://wenet.no'
		}
	];

	function isEven(n: number) {
		return n % 2 === 0;
	}
</script>

<div class="md:relative">
	<h1 class="text-[10vw] font-bold xl:text-[140px]">Experience</h1>

	<p
		class="mb-5 md:absolute md:top-[15%] md:w-1/3 md:right-[5%] md:font-semibold md:text-[2vw] xl:text-[30px] xl:w-[500px] xl:right-[-100px]"
	>
		The journey so far has been very tough and challenging, but that what makes the destination even
		worthy. Along the way I have met a lot of interesting, professional, smart and funny people. I
		will always be grateful with them for all the opportunities and experiences I have had so far.
	</p>
</div>

<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
	{#each experiences as experience, i}
		<li class="pb-5">
			<Timeline {...experience} position={isEven(i) ? 'start' : 'end'} index={i} />
		</li>
	{/each}
</ul>
