<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>@kisahkalbar</title>
</svelte:head>

<div class="from-slate-900 to-slate-950 bg-gradient-to-tr text-white">
	<main
		class="max-w-screen-sm min-h-screen mx-auto px-8 py-5 border-slate-900 border-l-2 border-r-2"
	>
		<slot />
	</main>
</div>
