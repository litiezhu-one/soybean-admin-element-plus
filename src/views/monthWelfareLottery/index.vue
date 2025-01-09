<script setup lang="tsx">
import { ElBadge, ElProgress } from 'element-plus';
import { welfareLottery3dRespDtoList } from '@/service/api';
import { useTable } from '@/hooks/common/table';

const publicWidth: number = 70;

defineOptions({ name: 'UserManage' });

const getFormatter = (row: any, key: string) => {
  // 保留两位小数
  const total = Number(((row[key] / row.开奖期数) * 100).toFixed(2));
  return (
    <ElProgress
      class="mx-4"
      text-inside={true}
      stroke-width="26"
      percentage={total}
      status={total > 60 ? 'success' : 'exception'}
    />
  );
};

const { columns, data, getData, loading, mobilePagination } = useTable({
  apiFn: welfareLottery3dRespDtoList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 100,
    month: 1
  },
  columns: () => [
    { prop: 'yearMonth', label: '统计年月' },
    { prop: '开奖期数', label: '开奖数', width: 100 },
    { prop: '百位次数', label: '百位概率', formatter: row => getFormatter(row, '百位次数') },
    { prop: '期次数', label: '期概率', formatter: row => getFormatter(row, '期次数') },
    { prop: '期尾次数', label: '期尾概率', formatter: row => getFormatter(row, '期尾次数') },
    { prop: '首尾边距次数', label: '首尾边距概率', formatter: row => getFormatter(row, '首尾边距次数') },
    { prop: '开奖合数次数', label: '开奖合数概率', formatter: row => getFormatter(row, '开奖合数次数') },
    { prop: '试机次数', label: '试机概率', formatter: row => getFormatter(row, '试机次数') },
  ]
});
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <!--    <LotterySearch v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />-->
    <ElCard class="sm:flex-1-hidden card-wrapper" body-class="ht50">
      <template #header>
        <div class="flex items-center justify-between">
          <p>开奖列表</p>
          <TableHeaderOperation :show-delete="false" :show-add="false" :loading="loading" @refresh="getData" />
        </div>
      </template>
      <div class="h-[calc(100%-50px)]">
        <ElTable
          v-loading="loading"
          height="100%"
          border
          class="sm:h-full"
          :data="data"
          row-key="id"
        >
          <ElTableColumn v-for="col in columns" :key="col.prop" v-bind="col" />
        </ElTable>
      </div>
      <div class="mt-20px flex justify-end">
        <ElPagination
          v-if="mobilePagination.total"
          layout="total,prev,pager,next,sizes"
          v-bind="mobilePagination"
          @current-change="mobilePagination['current-change']"
          @size-change="mobilePagination['size-change']"
        />
      </div>
    </ElCard>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-card) {
  .ht50 {
    height: calc(100% - 50px);
  }
}
</style>
