<script lang="ts">
	const options = ['CINTA', 'HOROR', 'KELUHAN', 'LAINNYA'];
	let option: string = 'CINTA';

	let username: string = '';
	let mentionRaw: string = '';
	let mention: string[] = mentionRaw.replace('@', '').split(' ');
	let kisah: string = '';
</script>

<section id="form_kisah">
	<h1 class="font-semibold text-xl">Punye kisah ape di Kalimantan Barat?</h1>

	<div class="mt-5">
		<h3 class="font-semibold">Pilih Kategori Kisah</h3>
		<div class="flex items-center gap-2 font-bold mt-1">
			{#each options as opt}
				<button class={option == opt ? 'btn-2' : 'btn-1'} on:click={() => (option = opt)}
					>{opt}</button
				>
			{/each}
		</div>
	</div>
	<div class="mt-5">
		<h3 class="font-semibold">Username Instagram Anda (opsional)</h3>
		<input
			type="text"
			name="mention"
			class="w-full btn-1 outline-none mt-1"
			placeholder="Contoh: @ig_saya9944 (Kosongkan jika rahasia)"
			bind:value={username}
		/>
	</div>
	{#if option == 'CINTA'}
		<div class="mt-5">
			<h3 class="font-semibold">Tag instagram orang nye (opsional)</h3>
			<p class="text-sm">Lebih dari satu? pisahkan pakai spasi</p>
			<input
				type="text"
				name="mention"
				class="w-full btn-1 outline-none mt-1"
				placeholder="Contoh: @cintaku123 @ayang5432 (Kosongkan jika tidak ada/rahasia)"
				bind:value={mentionRaw}
			/>
		</div>
	{/if}
	{#if option == 'HOROR'}
		<div class="mt-5">
			<h3 class="font-semibold">Lokasi (opsional)</h3>
			<input
				type="text"
				name="mention"
				class="w-full btn-1 outline-none mt-1"
				placeholder="Contoh: Gedung *** UNTAN (Kosongkan jika tidak ada/rahasia)"
				bind:value={mentionRaw}
			/>
		</div>
	{/if}
	{#if option == 'KELUHAN'}
		<div class="mt-5">
			<h3 class="font-semibold">Keluhan ke siape? (opsional)</h3>
			<input
				type="text"
				name="mention"
				class="w-full btn-1 outline-none mt-1"
				placeholder="Contoh: Preman di *** (Kosongkan jika tidak ada/rahasia)"
				bind:value={mentionRaw}
			/>
		</div>
	{/if}
	<div class="mt-5">
		<h3 class="font-semibold">Ceritekan kisah e</h3>
		<textarea
			name="kisah"
			rows="10"
			class="w-full btn-1 outline-none mt-1"
			bind:value={kisah}
			placeholder="Contoh: Banyak jalan belobang di area *** udah betaon taon tadak dibetolkan."
		/>
	</div>
	<div class="mt-5">
		<p class="text-xs italic">
			Dengan mengklik tombol dibawah, maka kisah diatas akan otomatis di post ke instagram <a
				href="https://instagram.com/kisahkalbar"
				target="_blank"
				class="text-blue-200">@kisahkalbar</a
			>.
		</p>
		<p class="text-xs italic">
			Jika anda memasukkan username instagram diatas. Maka username instagram anda akan ditampilkan
			pada postingan instagram.
		</p>
		<p class="text-xs italic">
			Jika anda ingin menghapus postingan anda, silahkan DM instagram <a
				href="https://instagram.com/kisahkalbar"
				target="_blank"
				class="text-blue-200">@kisahkalbar</a
			>.
		</p>
		<button class="btn-2 w-full mt-5">Post ke Instagram @kisahkalbar</button>
	</div>
</section>
