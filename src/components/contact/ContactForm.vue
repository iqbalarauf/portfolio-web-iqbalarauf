<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';
export default {
	name: 'ContactUs',
	data() {
		return {
			name: '',
			email: '',
			subject: '',
			message: ''
		}
	},
	methods: {
		sendEmail(e) {
			try {
				emailjs.sendForm('service_0aa57hi', 'template_28xgy56', e.target,
					'YOUR_USER_ID', {
					name: this.name,
					email: this.email,
					subject: this.subject,
					message: this.message
				})

			} catch (error) {
				console.log({ error })
			}
			// Reset form field
			this.name = ''
			this.email = ''
			this.subject = ''
			this.message = ''
		},
	},
	components: { Button, FormInput, FormTextarea }
};

import emailjs from 'emailjs-com'


</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
				Formulir Kontak
			</p>
			<form action="mailto:iqbalarauf@outlook.co.id" class="font-general-regular space-y-7">
				<FormInput label="Nama Lengkap" inputIdentifier="name" />
				<FormInput label="Email" inputIdentifier="email" inputType="email" />
				<FormInput label="Subyek" inputIdentifier="subject" />
				<FormTextarea label="Pesan" textareaIdentifier="message" />

				<div>
					<Button title="Kirim Pesan"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit" aria-label="Send Message" />
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
