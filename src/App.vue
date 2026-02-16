<template>
	<div
		class="w-full min-h-screen flex flex-col items-center gap-10 p-10 bg-light"
	>
		<Login v-if="!authenticated" :verifyAuthentication="verifyAuthentication" />
		<Dashboard v-else />
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from './api/api';
import type { User } from './shared/types';
import Login from './features/login/Login.vue';
import Dashboard from './features/dashboard/Dashboard.vue';
import type { VerifyAuthResponse } from './api/api.types';

const authenticated = ref(false);
const user = ref<User | null>(null);

const verifyAuthentication = async () => {
	try {
		const { data }: { data: VerifyAuthResponse } =
			await api.get('/auth/verify');

		authenticated.value = data.authenticated;
		user.value = data.user;
	} catch (err) {
		authenticated.value = false;
		console.error('Error verifying authentication:', err);
	}
};

onMounted(async () => verifyAuthentication());
</script>
