<template>
	<div>
		<h1 class="text-6xl font-bold">Vue Dashboard</h1>

		<div class="bg-white w-500 h-250 rounded-lg shadow-lg"></div>
	</div>
</template>

<script setup lang="ts">
import api from '@/api/api';
import { getAxiosError } from '@/utils/getAxiosError';
import { isAxiosError } from 'axios';
import { ref, onMounted } from 'vue';

onMounted(async () => {
	try {
		const { data } = await api.get('/schedule?weekOf=2026-02-16');
		console.log(data);
	} catch (err) {
		if (isAxiosError(err)) {
			const errorMessage = getAxiosError(err);
			console.error('Error fetching schedule:', errorMessage);
		} else {
			console.error(err);
		}
	}
});
</script>
