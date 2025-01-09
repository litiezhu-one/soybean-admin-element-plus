<script setup lang="tsx">
import { ElTag } from 'element-plus';
import ElCustomCheckTag from '@/components/custom/ElCustomCheckTag.vue';
import { welfareLotteryList } from '@/service/api';
import { useTable } from '@/hooks/common/table';

const typeList: UI.ThemeColor[] = ['success', 'danger', 'info'];
const publicWidth: number = 70;

defineOptions({ name: 'UserManage' });

const getColumnsFormat = (row: any, key: string) => {
  const num_arr = row.drawingNum.split('');
  const val: string = row[key];
  if (val.length > 1) {
    const arr = val.split(',');
    // eslint-disable-next-line no-nested-ternary
    const type = row?.drawingNum ? (num_arr.includes(row[key]) ? typeList[0] : typeList[1]) : typeList[2];
    return (
      <div class={`grid ${key === '试机跨度数' ? 'grid-cols-2' : 'grid-cols-5'} m-x-2 gap-1`}>
        {arr.map((item: string) => (
          <ElCustomCheckTag
            effect="dark"
            type={row?.drawingNum ? (num_arr.includes(item) ? typeList[0] : typeList[1]) : typeList[2]}
            changeType={row?.drawingNum ? type : typeList[1]}
          >
            {item}
          </ElCustomCheckTag>
        ))}
      </div>
    );
  }
  // eslint-disable-next-line no-nested-ternary
  const type = row?.drawingNum ? (num_arr.includes(row[key]) ? typeList[0] : typeList[1]) : typeList[2];
  // eslint-disable-next-line no-nested-ternary
  const changeType = row?.drawingNum ? type : typeList[1];
  return (
    <div class="grid-cols-1 m-x-2 gap-1">
      <ElCustomCheckTag effect="dark" type={type} changeType={changeType}>
        {row[key] ? row[key] : '-'}
      </ElCustomCheckTag>
    </div>
  );
};

const { columns, data, getData, loading, mobilePagination } = useTable({
  apiFn: welfareLotteryList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 100,
    keyword: undefined,
    remark: undefined
  },
  columns: () => [
    { prop: 'drawingPeriods', label: '开奖期数', width: 100, fixed: true },
    {
      prop: 'drawingNum',
      label: '开奖号',
      width: 150,
      fixed: true,
      formatter: row => {
        let num_arr = row.drawingNum.split('');
        let type: UI.ThemeColor = typeList[1];
        if (!row.drawingNum) {
          num_arr = ['-', '-', '-'];
          type = typeList[2];
        }
        return (
          <div class="grid grid-cols-3 m-x-2 gap-1">
            {num_arr.map((item: string) => (
              <ElTag effect="dark" type={type}>
                {item}
              </ElTag>
            ))}
          </div>
        );
      }
    },
    {
      prop: 'drawingTest',
      label: '试机号',
      width: 150,
      fixed: true,
      formatter: row => {
        const num_arr = row.drawingNum.split('');
        let test_arr = row.drawingTest.split('');
        if (!row.drawingTest) {
          test_arr = ['-', '-', '-'];
        }
        return (
          <div class="grid grid-cols-3 m-x-2 gap-1">
            {test_arr.map((item: string) => (
              <ElTag
                effect="dark"
                type={row.drawingTest ? (num_arr.includes(item) ? typeList[1] : typeList[0]) : typeList[2]}
              >
                {item}
              </ElTag>
            ))}
          </div>
        );
      }
    },
    {
      prop: '百位杀数',
      label: '百位杀数',
      width: publicWidth,
      formatter: row => getColumnsFormat(row, '百位杀数')
    },
    {
      prop: '期杀数',
      label: '期杀数',
      width: publicWidth,
      formatter: row => getColumnsFormat(row, '期杀数')
    },
    {
      prop: '期尾杀数',
      label: '期尾杀数',
      width: publicWidth,
      formatter: row => getColumnsFormat(row, '期尾杀数')
    },
    {
      prop: '首尾边距',
      label: '首尾边距',
      width: publicWidth,
      formatter: row => getColumnsFormat(row, '首尾边距')
    },
    {
      prop: '开奖合数',
      label: '开奖合数',
      width: publicWidth,
      formatter: row => getColumnsFormat(row, '开奖合数')
    },
    {
      prop: '试机杀数',
      label: '试机杀数',
      width: publicWidth,
      formatter: row => getColumnsFormat(row, '试机杀数')
    },
    {
      prop: '熟数',
      label: '熟数',
      width: 250,
      formatter: row => getColumnsFormat(row, '熟数')
    },
    {
      prop: '生数',
      label: '生数',
      width: 250,
      formatter: row => getColumnsFormat(row, '生数')
    },
    {
      prop: '试机跨度数',
      label: '试机跨度数',
      width: 100,
      formatter: row => getColumnsFormat(row, '试机跨度数')
    },
    { prop: 'drawingDate', label: '开奖日期', align: 'center' }
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
        <ElTable v-loading="loading" height="100%" border class="sm:h-full" :data="data" row-key="id">
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
