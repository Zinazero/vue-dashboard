<template>
	<div class="flex flex-col gap-20 items-center">
		<h1 class="text-6xl font-bold">Vue Dashboard</h1>
		<div class="flex gap-10">
			<!--  -->
			<div class="bg-white rounded-lg shadow-lg p-4">
				<ul class="text-green text-lg">
					<li v-for="(value, key) in scheduleExample" :key="key">
						{{ key }}: {{ value }}
					</li>
				</ul>
			</div>

			<!-- Schedule -->
			<div class="bg-white w-350 h-250 rounded-lg shadow-lg">
				<table>
					<thead>
						<tr>
							<th>Staff</th>
							<th v-for="day in DAYS" :key="day">
								{{ capitalizeWord(day) }}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="employee in schedule" :key="employee.employeeId">
							<td>{{ employee.name }}</td>
							<td>{{ employee.s_monday }}</td>
							<td>{{ employee.s_tuesday }}</td>
							<td>{{ employee.s_wednesday }}</td>
							<td>{{ employee.s_thursday }}</td>
							<td>{{ employee.s_friday }}</td>
							<td>{{ employee.s_saturday }}</td>
							<td>{{ employee.s_sunday }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import api from '@/api/api';
import type { Employee } from '@/shared/types';
import { DAYS } from '@/shared/types/days.domain';
import { capitalizeWord } from '@/utils/capitalizeWord';
import { getAxiosError } from '@/utils/getAxiosError';
import { isAxiosError } from 'axios';
import { ref, onMounted } from 'vue';

const scheduleExample = ref<Employee | null>(null);
const schedule = ref<Employee[]>([]);

onMounted(async () => {
	try {
		const { data } = await api.get('/schedule?weekOf=2025-03-03');
		console.log(data);

		if (data.schedule[0]) scheduleExample.value = data.schedule[0];
		schedule.value = data.schedule;
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
