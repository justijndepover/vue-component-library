```vue
<template>
    <o-page loading="loading">
        <o-card>
            <o-card-body>
                <o-form colspan="6">
                    <o-field name="Naam">
                        <o-text v-model="name"></o-text>
                    </o-field>

                    <o-field name="Straat" colspan="4">
                        <o-text v-model="street"></o-text>
                    </o-field>

                    <o-field name="number" colspan="2">
                        <o-text v-model="number"></o-text>
                    </o-field>
                </o-form>
            </o-card-body>

            <o-card-footer>
                <o-button type="danger" size="small" @click="submit">Submit</o-button>
            </o-card-footer>
        </o-card>
    </o-page>
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