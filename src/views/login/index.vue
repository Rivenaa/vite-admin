<script setup>
import { User, Lock } from '@element-plus/icons-vue'
</script>

<template>
  <h3>用户登录</h3>
  <el-form ref="formRef" :model="form" label-width="auto">
    <el-form-item label="Activity name" prop="name"
      >A
      <el-input v-model="input" placeholder="请输入" :prefix-icon="User" />
    </el-form-item>
    <el-form-item label="Activity zone" prop="zone"
      >B
      <el-input v-model="input" placeholder="请输入" :prefix-icon="Lock" />
    </el-form-item>
    <el-button>Default</el-button>
  </el-form>
</template>
