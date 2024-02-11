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
			date: '2021 - 2022',
			role: 'Software Developer',
			company: 'WAYS AS',
			tag: 'Fulltime',
			imgUrl: waysLogo,
			link: 'https://ways.no'
		},
		{
			date: '2020 - 2021',
			role: 'Full-stack JavaScript Consultant',
			company: 'School of Applied Technology',
			tag: 'Fulltime',
			imgUrl: saltLogo,
			link: 'https://www.salt.study/our-hubs/oslo'
		},
		{
			date: ' 2020 - 2020',
			role: 'Front Developer & Designer',
			company: 'WAYS AS',
			tag: 'Partime',
			imgUrl: waysLogo,
			link: 'https://ways.no'
		},
		{
			date: '2020 - 2020',
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

<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
	{#each experiences as experience, i}
		<li>
			<Timeline {...experience} position={isEven(i) ? 'start' : 'end'} />
		</li>
	{/each}
</ul>
