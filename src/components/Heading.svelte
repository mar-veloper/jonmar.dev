<script lang="ts">
	export let title: string;
</script>

<div class="md:relative">
	<h1 class="text-[10vw] font-bold xl:text-[140px]">{title}</h1>

	<p
		class="mb-5 md:absolute md:top-[15%] md:w-1/3 md:right-[5%] md:font-semibold md:text-[2vw] xl:w-[400px] xl:right-0 2xl:text-[30px] 2xl:w-[500px] 2xl:right-[-100px]"
	>
		<slot />
	</p>
</div>
