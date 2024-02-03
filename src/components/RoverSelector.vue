<template>
  <dropdown-container>
    <dropdown-label>Select Rover:</dropdown-label>
    <dropdown-select v-model="selectedRover" @change="roverIsSelected">
      <option value="Curiosity">Curiosity</option>
      <option value="Opportunity">Opportunity</option>
      <option value="Spirit">Spirit</option>
    </dropdown-select>
  </dropdown-container>
</template>

<script>
import vueStyles from "@/styles/roverselector-vue-styles"

export default {
  components: {
    DropdownContainer: vueStyles.DROPDOWN_CONTAINER,
    DropdownSelect: vueStyles.DROPDOWN_SELECT,
    DropdownLabel: vueStyles.DROPDOWN_LABEL,
  },
  data:() => ({
    selectedRover: ''
  }),
  mounted() {
    this.selectedRover = 'Curiosity'
    this.$emit('roverSelected', this.selectedRover.toLowerCase())
  },
  methods: {
    roverIsSelected(){
      console.log(this.selectedRover.toLowerCase())
      this.$emit('roverSelected', this.selectedRover.toLowerCase())
    }
  },
}

</script>