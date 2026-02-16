<template>
	<div class="flex flex-col gap-20 items-center">
		<h1 class="text-6xl font-bold">Login</h1>

		<div class="flex flex-col w-full max-w-100 px-4 gap-10 text-2xl">
			<form @submit="handleLogin" class="flex flex-col gap-4">
				<input type="email" v-model="username" placeholder="E-mail" required />

				<PasswordInput v-model="password" />

				<button
					type="submit"
					:class="
						cn(
							'bg-cobalt text-light p-2 w-full rounded-xl hover:bg-cobalt-hover',
							'transition active:scale-95',
						)
					"
				>
					Login
				</button>
			</form>
			<p v-if="error" class="error-message">{{ error }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import api from '@/api/api';
import type { LoginBody } from '@/api/api.types';
import PasswordInput from '@/shared/components/PasswordInput.vue';
import { cn } from '@/utils/cn';
import { ref } from 'vue';

interface LoginProps {
	verifyAuthentication: () => Promise<void>;
}

const props = defineProps<LoginProps>();

const username = ref<string>('');
const password = ref<string>('');
const error = ref<string | null>(null);

const handleLogin = async (e: Event) => {
	if (e) e.preventDefault();

	try {
		const body: LoginBody = {
			username: username.value,
			password: password.value,
			database: '',
		};

		const { data } = await api.post('/auth/login', body);
		console.log(data);

		props.verifyAuthentication();
	} catch (err) {
		password.value = '';

		if (err instanceof Error) {
			error.value = err.message;
		}

		console.error(err);
	}
};
</script>
