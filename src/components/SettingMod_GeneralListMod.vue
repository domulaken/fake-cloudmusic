<template>
  <ul class="common-list">
    <template v-for="(item, index) in optionList">
      <li class="common-unit" :key="index">
        <template v-if="item.type==='radio'">
          <h5>{{ item.name }}：<span>{{ item.shortDescription }}</span></h5>
          <el-radio-group
            v-model="item.valueName">
            <template v-for="(unit, index) in item.description">
              <div :key="index">
                <el-radio
                  :label="unit.text"
                  :value="unit.value">
                  {{ unit.text }}
                </el-radio>
              </div>
            </template>
          </el-radio-group>
        </template>
        <template v-if="item.type==='checkbox'">
          <h5>{{ item.name }}：<span>{{ item.shortDescription }}</span></h5>
          <el-checkbox-group
            v-model="item.valueName">
            <template v-for="(unit, index) in item.description">
              <el-checkbox
                :label="unit.value"
                :key="index">
                {{ unit.text }}
              </el-checkbox>
            </template>
          </el-checkbox-group>
        </template>
        <template v-if="item.type==='select'">
          <h5>{{ item.name }}：<span>{{ item.shortDescription }}</span></h5>
          <el-select
            v-model="item.valueName">
            <template v-for="(unit, index) in item.description">
              <el-option
                :label="unit.text"
                :value="unit.value"
                :key="index">
              </el-option>
            </template>
          </el-select>
        </template>
      </li>
    </template>
  </ul>
</template>
<script>
export default {
  name: 'GeneralListMod',
  props: ['optionList'],
  mounted () {}
}
</script>
