<template>
  <div id="app">
    <el-container id="app-container">
      <el-header class="app-header">
        <user-info-zone></user-info-zone>
      </el-header>
      <el-container class="app-content">
        <router-view></router-view>
      </el-container>
      <el-footer class="app-footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import UserInfoZone from './components/Header.vue'
export default {
  name: 'App',
  data: function () {
    return {visible: false}
  },
  components: {UserInfoZone},
  mounted () {
    // hack一下，强制改变app-content的width
    this.findAppContainerFirstDiv()
  },
  methods: {
    insertSort (arr) {
      for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        let key = arr[i]
        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j]
          j--
        }
        arr[j + 1] = key
      }
      console.log(arr)
    },
    heapSort (arr) {
      function adjustHeap (arr, i, j) {
        let largest = i
        let left = 2 * i + 1
        let right = 2 * i + 2
        if (left < j && arr[largest] < arr[left]) {
          largest = left
        }
        if (right < j && arr[largest] < arr[right]) {
          largest = right
        }
        if (largest !== i) {
          [arr[largest], arr[i]] = [arr[i], arr[largest]]
          adjustHeap(arr, largest, j)
        }
      }
      function buildHeap (arr) {
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
          adjustHeap(arr, i, arr.length)
        }
      }
      buildHeap(arr)
      for (let i = arr.length - 1; i >= 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]]
        adjustHeap(arr, 0, i)
      }
      console.log(arr)
    },
    mergeSort (arr) {
      function merge (left, right) {
        let res = []
        while (left.length > 0 && right.length > 0) {
          if (left[0] < right[0]) {
            res.push(left.shift())
          } else {
            res.push(right.shift())
          }
        }
        return res.concat(left, right)
      }
      if (arr.length <= 1) {
        return arr
      }
      let mid = Math.floor(arr.length / 2)
      let left = arr.slice(0, mid)
      let right = arr.slice(mid)
      return merge(this.mergeSort(left), this.mergeSort(right))
    },
    bubbleSort (arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
          }
        }
      }
      console.log(arr)
    },
    selectSort (arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] > arr[i]) {
            [arr[j], arr[i]] = [arr[i], arr[j]]
          }
        }
      }
      console.log(arr)
    },
    quickSort (arr, left, right) {
      let index = null
      if (arr.length >= 1) {
        index = this.partition2(arr, left, right)
        if (left < index - 1) {
          this.quickSort(arr, left, index - 1)
        }
        if (index < right) {
          this.quickSort(arr, index, right)
        }
      }
      return arr
    },
    partition2 (arr, left, right) {
      let pivot = arr[Math.floor(right + left) / 2 - 1]
      let i = left
      let j = right
      while (i <= j) {
        while (arr[i] < pivot) {
          i++
        }
        while (arr[j] > pivot) {
          j--
        }
        if (i <= j) {
          [arr[i], arr[j]] = [arr[j], arr[i]]
          i++
          j--
        }
      }
      return i
    },
    quickSort2 (arr, left, right) {
      let len = arr.length
      let partitionIndex = null
      left = typeof left !== 'number' ? 0 : left
      right = typeof right !== 'number' ? len - 1 : right
      if (left < right) {
        partitionIndex = this.partition(arr, left, right)
        this.quickSort2(arr, left, partitionIndex - 1)
        this.quickSort2(arr, partitionIndex + 1, right)
      }
      return arr
    },
    partition (arr, left, right) {
      let pivot = left
      let index = pivot + 1
      for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
          [arr[i], arr[index]] = [arr[index], arr[i]]
          index++
        }
      }
      [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]]
      return index - 1
    },
    findAppContainerFirstDiv () {
      let appContainer = document.getElementsByClassName('app-content')[0]
      let div = appContainer.firstChild
      if (div !== undefined) {
        div.style.width = '100%'
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  ul,li{
    list-style: none;
  }
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #app-container {
    display: flex;
    .app-header{
      border-bottom: 1px solid #eee;
      height:70px !important;
      width:100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .app-content {
      display:flex;
      flex-grow: 1;
      section.el-container {
        flex-grow: 1;
        height: 550px;
      }
    }
    .app-footer {
      height:60px;
      background-color: #409EFF;
    }
  }
}
body{
  margin:0;
}
</style>
