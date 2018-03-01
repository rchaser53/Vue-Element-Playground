<template>
  <div class="hello">
    <el-tabs type="card" class="fuga" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="hoge" label="User" name="first">User</el-tab-pane>
      <el-tab-pane class="hoge" label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane class="hoge" label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane class="hoge" label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
</template>

<script>
import {
  Tabs,
  TabPane
} from 'element-ui'

export default {
  name: 'HelloWorld',
  components: {
    'el-tabs': Tabs,
    'el-tab-pane': TabPane
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
.fuga {
  display: flex;
}

.hoge {
  display: inline-block;;
  width: 100px;
  height: 30px;
}
</style>
