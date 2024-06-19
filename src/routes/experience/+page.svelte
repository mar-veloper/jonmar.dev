<script lang="ts">
	import Timeline from './_components/Timeline/Timeline.svelte';
	import { waysLogo, wenetLogo, daytwoImg ,storebrandLogo, saltLogo} from '$lib/assets/images/index.js';
	import Heading from '../../components/Heading.svelte';

	const experiences = [
		{
			date: 'July 2024 - Present',
			role: 'In-House Software Developer',
			company: 'Storebrand ASA',
			tag: 'Fulltime',
			imgUrl: storebrandLogo,
			isFirst: true,
			isImgFull: true,
			link: 'https://storebrand.no'
		},
		{
			date: 'May 2022 - June 2024',
			role: 'Full-stack Developer',
			company: 'Daytwo AS',
			tag: 'Fulltime',
			imgUrl: daytwoImg,
			isImgFull: true,
			link: 'https://daytwo.no'
		},
		{
			date: 'February 2021 - April 2022',
			role: 'Software Developer',
			company: 'WAYS AS',
			tag: 'Fulltime',
			imgUrl: waysLogo,
			link: 'https://ways.no'
		},
		{
			date: 'September 2020 - January 2021',
			role: 'Full-stack JavaScript Consultant',
			company: 'School of applied technology',
			tag: 'Fulltime',
			imgUrl: saltLogo,
			link: 'https://salt.dev'
		},
		{
			date: 'April 2020 - August 2021',
			role: 'Frontend Developer',
			company: 'WAYS AS',
			tag: 'Partime',
			imgUrl: waysLogo,
			link: 'https://ways.no'
		},
		{
			date: 'January 2020 - August 2020',
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

<Heading title="Experience">
	The journey so far has been very tough and challenging, but that's what makes the destination even
	more worthy. Along the way, I have met a lot of interesting, professional, smart, and funny
	people. I will always be grateful to them for all the opportunities and experiences I have had so
	far.
</Heading>

<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
	{#each experiences as experience, i}
		<li class="pb-5">
			<Timeline {...experience} position={isEven(i) ? 'start' : 'end'} index={i} />
		</li>
	{/each}
</ul>
