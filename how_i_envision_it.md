<!-- classic dropdown -->
<x-dropdown label="Account">
    <x-dropdown-item icon="user">Gebruikers</x-dropdown-item>
    <x-dropdown-item icon="logout">Uitloggen</x-dropdown-item>
</x-dropdown>

<!-- dropdown with avatar -->
<x-avatar :src="user.avatar" :fallback="user.initials" for="dropdown"> <!-- for should point to the id -->
<x-dropdown id="dropdown"> <!-- No label is passed, so nothing renders -->
    <x-dropdown-item icon="user">Gebruikers</x-dropdown-item>
    <x-dropdown-item icon="logout">Uitloggen</x-dropdown-item>
</x-dropdown>

<!-- Some date inputs -->
<x-date label="Verjaardag" icon="calendar" />
<x-time label="Openingsuren" icon="clock" />
<x-datetime label="Wanneer mag nieuwsbericht online?" icon="calendar" />
<x-daterange label="Selecteer een range" />

<!-- Select component, renders custom list -->
<x-select searchable>
    <x-option value="1">Optie 1</x-option>
    <x-option value="2">Optie 2</x-option>
</x-select>

<!-- Files -->
<x-file label="Laad hier uw cv op" v-model="file" />
<x-files label="Alle documentatie" v-model="files" />

<!-- simple radio + checkboxes -->
<x-label>Kies uw waarde in de lijst met radio buttons</x-label>
<x-radio label="optie 1" />
<x-radio label="optie 2" />
<x-radio label="optie 3" />
<x-radio label="optie 4" />

<x-label>Kies uw waarden in de lijst met checkboxen</x-label>
<x-checkbox label="optie 1" />
<x-checkbox label="optie 2" />
<x-checkbox label="optie 3" />
<x-checkbox label="optie 4" />

<!-- tabs -->
<x-tabs>

<!-- buttons -->
<!-- appearance should change to -> variant -->
<x-button variant="flat">Save</x-button>
