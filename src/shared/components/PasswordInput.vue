<template>
	<div class="w-full relative">
		<input
			:type="passwordVisible ? 'text' : 'password'"
			:id="props.inputId"
			:name="props.name || 'password'"
			:placeholder="props.placeholder || 'Password'"
			:value="props.modelValue"
			@input="handleInput"
			:class="cn('w-full', props.errorCondition && 'border-[red]!')"
			required
		/>
		<button
			type="button"
			@click="passwordVisible = !passwordVisible"
			class="absolute right-3 top-1/2 -translate-y-1/2 text-grey"
		>
			<FontAwesomeIcon v-if="passwordVisible" :icon="faEyeSlash" />
			<FontAwesomeIcon v-else :icon="faEye" />
		</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PasswordInputProps } from './components.types';
import { cn } from '@/utils/cn';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const props = defineProps<PasswordInputProps>();
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const passwordVisible = ref(false);

const handleInput = (e: Event) => {
	const target = e.target;
	if (target instanceof HTMLInputElement) emit('update:modelValue', target.value);
};
</script>
