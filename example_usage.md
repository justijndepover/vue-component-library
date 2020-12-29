```vue
<template>
    <x-page loading="loading">
        <x-card>
            <x-card-body>
                <x-form colspan="6">
                    <x-field name="Naam">
                        <x-text v-model="name"></x-text>
                    </x-field>

                    <x-field name="Straat" colspan="4">
                        <x-text v-model="street"></x-text>
                    </x-field>

                    <x-field name="number" colspan="2">
                        <x-text v-model="number"></x-text>
                    </x-field>
                </x-form>
            </x-card-body>

            <x-card-footer>
                <x-button type="danger" size="small" @click="submit">Submit</x-button>
            </x-card-footer>
        </x-card>
    </x-page>
</template>

<script>
import { xPage, xCard, xCardBody, xCardFooter, xForm, xField, xText } from 'vue-component-library';
export default {
    components: { xPage, xCard, xCardBody, xCardFooter, xForm, xField, xText },
    data() {
        return {
            name: { value: '', error: '' },
            street,
            number,
        }
    },
    methods: {
        submit() {
            this.$http.post('/settings', {name: this.name, street: this.street, number: this.number})
                .then(response => {
                    this.$bus.alert('The settings are saved');
                    this.$router.push('overview url');
                })
                .catch(error => {
                    this.setErrors(error);
                });
        }
    }
}
</script>
```