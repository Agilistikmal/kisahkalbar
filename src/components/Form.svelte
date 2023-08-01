<script lang="ts">
	const options = ['CINTA', 'HOROR', 'KELUHAN', 'LAINNYA'];
	let category: string = 'CINTA';
	let from: string = '';
	let mention: string = '';
	let kisah_pendek: string = '';

	let loading: boolean = false;
	let success: boolean = false;

	async function handlePost() {
		loading = true;
		const post = await fetch('/api/post', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/Json'
			},
			body: JSON.stringify({ from, mention, kisah_pendek, category })
		});
		if (post.status == 200) {
			success = true;
			setTimeout(() => (success = false), 30000);
		}
		loading = false;
	}
</script>

<section id="form_kisah">
	<h1 class="font-semibold text-xl">Punye kisah ape di Kalimantan Barat?</h1>
	<div class="mt-5">
		<h3 class="font-semibold">Pilih Kategori Kisah</h3>
		<div class="flex items-center gap-2 font-bold mt-1 flex-wrap">
			{#each options as opt}
				<button class={category == opt ? 'btn-2' : 'btn-1'} on:click={() => (category = opt)}
					>{opt}</button
				>
			{/each}
		</div>
	</div>
	<form method="post" on:submit|preventDefault={handlePost}>
		<div class="mt-5">
			<h3 class="font-semibold">Username Twitter Anda (opsional)</h3>
			<input
				type="text"
				name="username"
				class="w-full btn-1 outline-none mt-1"
				placeholder="Contoh: @ig_saya9944 (Kosongkan jika rahasia)"
				bind:value={from}
			/>
		</div>
		{#if category == 'CINTA'}
			<div class="mt-5">
				<h3 class="font-semibold">Tag twitter orang nye (opsional)</h3>
				<input
					type="text"
					name="mention"
					class="w-full btn-1 outline-none mt-1"
					placeholder="Contoh: @cintaku123 @ayang5432 (Kosongkan jika tidak ada/rahasia)"
					bind:value={mention}
				/>
			</div>
		{/if}
		{#if category == 'HOROR'}
			<div class="mt-5">
				<h3 class="font-semibold">Lokasi (opsional)</h3>
				<input
					type="text"
					name="mention"
					class="w-full btn-1 outline-none mt-1"
					placeholder="Contoh: Gedung *** UNTAN (Kosongkan jika tidak ada/rahasia)"
					bind:value={mention}
				/>
			</div>
		{/if}
		{#if category == 'KELUHAN'}
			<div class="mt-5">
				<h3 class="font-semibold">Keluhan ke siape? (opsional)</h3>
				<input
					type="text"
					name="mention"
					class="w-full btn-1 outline-none mt-1"
					placeholder="Contoh: Preman di *** (Kosongkan jika tidak ada/rahasia)"
					bind:value={mention}
				/>
			</div>
		{/if}
		<div class="mt-5">
			<h3 class="font-semibold">
				Kisah Pendek <span class="text-xs">({kisah_pendek.length}/250 character)</span>
			</h3>
			<span class="text-xs">*Text ini akan di tampilkan pada caption.</span>
			<textarea
				name="kisah_pendek"
				rows="2"
				class="w-full btn-1 outline-none mt-1"
				bind:value={kisah_pendek}
				placeholder="Contoh: Jalan Rusak Kawasan ***"
				maxlength="250"
				required
			/>
		</div>
		<div class="mt-5">
			<p class="text-xs italic">
				Dengan mengklik tombol dibawah, maka kisah diatas akan otomatis di post ke twitter <a
					href="https://twitter.com/kisahkalbar"
					target="_blank"
					class="text-blue-200">@kisahkalbar</a
				>.
			</p>
			<p class="text-xs italic">
				Jika anda memasukkan from twitter diatas. Maka from twitter anda akan ditampilkan pada
				postingan twitter.
			</p>
			<p class="text-xs italic">
				Jika anda ingin menghapus postingan anda, silahkan DM twitter <a
					href="https://twitter.com/kisahkalbar"
					target="_blank"
					class="text-blue-200">@kisahkalbar</a
				>.
			</p>
			{#if success}
				<div class="bg-green-500 rounded-lg px-5 py-2 mt-5">
					<h1 class="font-bold text-slate-900">Berhasil memposting ke Twitter</h1>
				</div>
			{/if}
			<button class="btn-2 w-full mt-5 {loading && 'opacity-50'}" disabled={loading || success}
				>{loading
					? 'Mohon tunggu...'
					: success
					? 'Berhasil! Tunggu 30 detik untuk mengirim lagi.'
					: 'Post ke Twitter @kisahkalbar'}</button
			>
		</div>
	</form>
</section>
