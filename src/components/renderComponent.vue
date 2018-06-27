<script lang="tsx">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class FilterItem extends Vue {
  render (h, context) {
    return (
      <div>这条是jsx
      大师大师
      111231231231212{context}
      </div>
    )
  }
}
</script>
