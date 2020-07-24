<template>
  <div>
    <ul class="layui-nav">
      <li class="layui-nav-item"><a href="/overview">最新活动</a></li>
      <li class="layui-nav-item layui-this">
        <a href="javascript:;">产品</a>
        <dl class="layui-nav-child">
          <dd><a href="">选项1</a></dd>
          <dd><a href="">选项2</a></dd>
          <dd><a href="">选项3</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item"><a href="">大数据</a></li>
      <li class="layui-nav-item">
        <a href="javascript:;">解决方案</a>
        <dl class="layui-nav-child">
          <dd><a href="">移动模块</a></dd>
          <dd><a href="">后台模版</a></dd>
          <dd class="layui-this"><a href="">选中项</a></dd>
          <dd><a href="">电商平台</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item"><a href="">社区</a></li>
    </ul>
    <ul class="layui-nav layui-nav-tree layui-inline" lay-filter="demo" style="margin-right: 10px;">
      <li class="layui-nav-item layui-nav-itemed">
        <a href="javascript:;">默认展开</a>
        <dl class="layui-nav-child">
          <dd><a href="javascript:;">选项一</a></dd>
          <dd><a href="javascript:;">选项二</a></dd>
          <dd><a href="javascript:;">选项三</a></dd>
          <dd><a href="">跳转项</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item">
        <a href="javascript:;">解决方案</a>
        <dl class="layui-nav-child">
          <dd><a href="">移动模块</a></dd>
          <dd><a href="">后台模版</a></dd>
          <dd><a href="">电商平台</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item"><a href="">云市场</a></li>
      <li class="layui-nav-item"><a href="">社区</a></li>
    </ul>
  </div>

</template>

<script>
/*  layui.use(["element"], function() {
    layui.element.render();
  }) */
</script>

<style>
</style>
