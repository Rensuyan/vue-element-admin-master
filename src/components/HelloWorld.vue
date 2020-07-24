<template>
  <div class="hello">
    <FormFile :author="msg"  @pwdChanged="pwdChanged"/>
      <!-- 这是父元素插入的信息：
      <span class="iconfont" style="font-size: 20px;">hhh</span> -->
    </FormFile>
  </div>
</template>

<script>
import FormFile from '@/components/FormFile'
//import {func1,func2} from '@/js/common.js'
import * as funcs from '@/js/common.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: {
        sim: '18260059581',
        pwd: 'dddd789'
      }
    }
  },
  methods:{
    pwdChanged (){
      console.log(funcs.func1())
      console.log(funcs.func2())
    }
  },
  components: {
    FormFile
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
