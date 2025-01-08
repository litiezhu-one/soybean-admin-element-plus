import { h } from 'vue';
import { ElTag } from 'element-plus';
import type { TagProps } from 'element-plus';
import type { CustomNodeData, NodeStatus } from './types';

interface NodeStatusConfig {
  type: string;
  color: string;
  textColor: string;
  base64: string;
  flag64: string;
}

export const nodeStatus: Record<NodeStatus, NodeStatusConfig> = {
  MILESTONE: {
    type: '里程碑',
    color: '#5b5b5b',
    textColor: '',
    base64: '',
    flag64: ''
  },
  NOT_STARTED: {
    type: '未开始',
    color: '#CCCDD0',
    textColor: '#5b5b5b',
    base64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiNDQ0NERDAiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjgyOCAyMy45MDYtMjMuOTA2YzAtMTMuMDU1LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45NDUgNC4wOTUgMjhjMCAxMy4wNzggMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2Ii8+PC9zdmc+`,
    flag64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiNDQ0NERDAiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjg1MSAyMy45MDYtMjMuOTA2YzAtMTMuMDc4LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45MjIgNC4wOTUgMjhjMCAxMy4wNTUgMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2bS05LjA3LTExLjExYy0uNTg2IDAtMS4xMDItLjUxNS0xLjEwMi0xLjA3N1YxOS44MmMwLTEuMDA4LjQ5Mi0xLjc1OCAxLjQ1My0yLjE4Yy44NDQtLjM3NCAxLjU3LS41ODUgMy4zNzUtLjU4NWM0LjI0MiAwIDYuODkgMi4wODYgMTAuODc1IDIuMDg2YzEuOTIyIDAgMi45My0uNDkzIDMuNTQtLjQ5M2MuNzk2IDAgMS40MDYuNDkzIDEuNDA2IDEuMTcydjExLjU1NWMwIDEuMDU1LS40NDYgMS43MzQtMS40NTQgMi4xOGMtLjg2Ny4zOTgtMS42MTcuNjA5LTMuMzc1LjYwOWMtNC4wNzggMC02LjY4LTIuMDYyLTEwLjg3NS0yLjA2MmMtMS40MyAwLTIuMzY3LjI4LTIuNzg5LjQ2OHY3LjE0OWMwIC41ODYtLjQ0NSAxLjA3OC0xLjA1NCAxLjA3OCIvPjwvc3ZnPg==`
  },
  DELAYED: {
    type: '已延期',
    color: '#B81111',
    textColor: '#dccbcb',
    base64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiNCODExMTEiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjgyOCAyMy45MDYtMjMuOTA2YzAtMTMuMDU1LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45NDUgNC4wOTUgMjhjMCAxMy4wNzggMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2Ii8+PC9zdmc+`,
    flag64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiNCODExMTEiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjg1MSAyMy45MDYtMjMuOTA2YzAtMTMuMDc4LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45MjIgNC4wOTUgMjhjMCAxMy4wNTUgMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2bS05LjA3LTExLjExYy0uNTg2IDAtMS4xMDItLjUxNS0xLjEwMi0xLjA3N1YxOS44MmMwLTEuMDA4LjQ5Mi0xLjc1OCAxLjQ1My0yLjE4Yy44NDQtLjM3NCAxLjU3LS41ODUgMy4zNzUtLjU4NWM0LjI0MiAwIDYuODkgMi4wODYgMTAuODc1IDIuMDg2YzEuOTIyIDAgMi45My0uNDkzIDMuNTQtLjQ5M2MuNzk2IDAgMS40MDYuNDkzIDEuNDA2IDEuMTcydjExLjU1NWMwIDEuMDU1LS40NDYgMS43MzQtMS40NTQgMi4xOGMtLjg2Ny4zOTgtMS42MTcuNjA5LTMuMzc1LjYwOWMtNC4wNzggMC02LjY4LTIuMDYyLTEwLjg3NS0yLjA2MmMtMS40MyAwLTIuMzY3LjI4LTIuNzg5LjQ2OHY3LjE0OWMwIC41ODYtLjQ0NSAxLjA3OC0xLjA1NCAxLjA3OCIvPjwvc3ZnPg==`
  },
  PAUSED: {
    type: '已暂停',
    color: '#0E42D2',
    textColor: '#dae0f0',
    base64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiMwRTQyRDIiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjgyOCAyMy45MDYtMjMuOTA2YzAtMTMuMDU1LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45NDUgNC4wOTUgMjhjMCAxMy4wNzggMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2Ii8+PC9zdmc+`,
    flag64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiMwRTQyRDIiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjg1MSAyMy45MDYtMjMuOTA2YzAtMTMuMDc4LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45MjIgNC4wOTUgMjhjMCAxMy4wNTUgMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2bS05LjA3LTExLjExYy0uNTg2IDAtMS4xMDItLjUxNS0xLjEwMi0xLjA3N1YxOS44MmMwLTEuMDA4LjQ5Mi0xLjc1OCAxLjQ1My0yLjE4Yy44NDQtLjM3NCAxLjU3LS41ODUgMy4zNzUtLjU4NWM0LjI0MiAwIDYuODkgMi4wODYgMTAuODc1IDIuMDg2YzEuOTIyIDAgMi45My0uNDkzIDMuNTQtLjQ5M2MuNzk2IDAgMS40MDYuNDkzIDEuNDA2IDEuMTcydjExLjU1NWMwIDEuMDU1LS40NDYgMS43MzQtMS40NTQgMi4xOGMtLjg2Ny4zOTgtMS42MTcuNjA5LTMuMzc1LjYwOWMtNC4wNzggMC02LjY4LTIuMDYyLTEwLjg3NS0yLjA2MmMtMS40MyAwLTIuMzY3LjI4LTIuNzg5LjQ2OHY3LjE0OWMwIC41ODYtLjQ0NSAxLjA3OC0xLjA1NCAxLjA3OCIvPjwvc3ZnPg==`
  },
  IN_PROGRESS: {
    type: '进行中',
    color: '#E1BE0D',
    textColor: '#4f4304',
    base64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiNFMUJFMEQiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjgyOCAyMy45MDYtMjMuOTA2YzAtMTMuMDU1LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45NDUgNC4wOTUgMjhjMCAxMy4wNzggMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2Ii8+PC9zdmc+`,
    flag64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiNFMUJFMEQiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjg1MSAyMy45MDYtMjMuOTA2YzAtMTMuMDc4LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45MjIgNC4wOTUgMjhjMCAxMy4wNTUgMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2bS05LjA3LTExLjExYy0uNTg2IDAtMS4xMDItLjUxNS0xLjEwMi0xLjA3N1YxOS44MmMwLTEuMDA4LjQ5Mi0xLjc1OCAxLjQ1My0yLjE4Yy44NDQtLjM3NCAxLjU3LS41ODUgMy4zNzUtLjU4NWM0LjI0MiAwIDYuODkgMi4wODYgMTAuODc1IDIuMDg2YzEuOTIyIDAgMi45My0uNDkzIDMuNTQtLjQ5M2MuNzk2IDAgMS40MDYuNDkzIDEuNDA2IDEuMTcydjExLjU1NWMwIDEuMDU1LS40NDYgMS43MzQtMS40NTQgMi4xOGMtLjg2Ny4zOTgtMS42MTcuNjA5LTMuMzc1LjYwOWMtNC4wNzggMC02LjY4LTIuMDYyLTEwLjg3NS0yLjA2MmMtMS40MyAwLTIuMzY3LjI4LTIuNzg5LjQ2OHY3LjE0OWMwIC41ODYtLjQ0NSAxLjA3OC0xLjA1NCAxLjA3OCIvPjwvc3ZnPg==`
  },
  COMPLETED: {
    type: '已完成',
    color: '#33C73D',
    textColor: '#084e0c',
    base64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiMzM0M3M0QiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjgyOCAyMy45MDYtMjMuOTA2YzAtMTMuMDU1LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45NDUgNC4wOTUgMjhjMCAxMy4wNzggMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2Ii8+PC9zdmc+`,
    flag64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiMzM0M3M0QiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjg1MSAyMy45MDYtMjMuOTA2YzAtMTMuMDc4LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45MjIgNC4wOTUgMjhjMCAxMy4wNTUgMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2bS05LjA3LTExLjExYy0uNTg2IDAtMS4xMDItLjUxNS0xLjEwMi0xLjA3N1YxOS44MmMwLTEuMDA4LjQ5Mi0xLjc1OCAxLjQ1My0yLjE4Yy44NDQtLjM3NCAxLjU3LS41ODUgMy4zNzUtLjU4NWM0LjI0MiAwIDYuODkgMi4wODYgMTAuODc1IDIuMDg2YzEuOTIyIDAgMi45My0uNDkzIDMuNTQtLjQ5M2MuNzk2IDAgMS40MDYuNDkzIDEuNDA2IDEuMTcydjExLjU1NWMwIDEuMDU1LS40NDYgMS43MzQtMS40NTQgMi4xOGMtLjg2Ny4zOTgtMS42MTcuNjA5LTMuMzc1LjYwOWMtNC4wNzggMC02LjY4LTIuMDYyLTEwLjg3NS0yLjA2MmMtMS40MyAwLTIuMzY3LjI4LTIuNzg5LjQ2OHY3LjE0OWMwIC41ODYtLjQ0NSAxLjA3OC0xLjA1NCAxLjA3OCIvPjwvc3ZnPg==`
  },
  COMPLETED_EARLY: {
    type: '提前完成',
    color: '#CCFF99',
    textColor: '#42681d',
    base64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiNDQ0ZGOTkiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjgyOCAyMy45MDYtMjMuOTA2YzAtMTMuMDU1LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45NDUgNC4wOTUgMjhjMCAxMy4wNzggMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2Ii8+PC9zdmc+`,
    flag64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiNDQ0ZGOTkiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjg1MSAyMy45MDYtMjMuOTA2YzAtMTMuMDc4LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45MjIgNC4wOTUgMjhjMCAxMy4wNTUgMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2bS05LjA3LTExLjExYy0uNTg2IDAtMS4xMDItLjUxNS0xLjEwMi0xLjA3N1YxOS44MmMwLTEuMDA4LjQ5Mi0xLjc1OCAxLjQ1My0yLjE4Yy44NDQtLjM3NCAxLjU3LS41ODUgMy4zNzUtLjU4NWM0LjI0MiAwIDYuODkgMi4wODYgMTAuODc1IDIuMDg2YzEuOTIyIDAgMi45My0uNDkzIDMuNTQtLjQ5M2MuNzk2IDAgMS40MDYuNDkzIDEuNDA2IDEuMTcydjExLjU1NWMwIDEuMDU1LS40NDYgMS43MzQtMS40NTQgMi4xOGMtLjg2Ny4zOTgtMS42MTcuNjA5LTMuMzc1LjYwOWMtNC4wNzggMC02LjY4LTIuMDYyLTEwLjg3NS0yLjA2MmMtMS40MyAwLTIuMzY3LjI4LTIuNzg5LjQ2OHY3LjE0OWMwIC41ODYtLjQ0NSAxLjA3OC0xLjA1NCAxLjA3OCIvPjwvc3ZnPg==`
  },
  COMPLETED_LATE: {
    type: '延期完成',
    color: '#CC6699',
    textColor: '#4b092a',
    base64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiNDQzY2OTkiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjgyOCAyMy45MDYtMjMuOTA2YzAtMTMuMDU1LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45NDUgNC4wOTUgMjhjMCAxMy4wNzggMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2Ii8+PC9zdmc+`,
    flag64: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTYgNTYiPjxwYXRoIGZpbGw9IiNDQzY2OTkiIGQ9Ik0yOCA1MS45MDZjMTMuMDU1IDAgMjMuOTA2LTEwLjg1MSAyMy45MDYtMjMuOTA2YzAtMTMuMDc4LTEwLjg3NS0yMy45MDYtMjMuOTMtMjMuOTA2QzE0Ljg5OSA0LjA5NCA0LjA5NSAxNC45MjIgNC4wOTUgMjhjMCAxMy4wNTUgMTAuODI4IDIzLjkwNiAyMy45MDYgMjMuOTA2bS05LjA3LTExLjExYy0uNTg2IDAtMS4xMDItLjUxNS0xLjEwMi0xLjA3N1YxOS44MmMwLTEuMDA4LjQ5Mi0xLjc1OCAxLjQ1My0yLjE4Yy44NDQtLjM3NCAxLjU3LS41ODUgMy4zNzUtLjU4NWM0LjI0MiAwIDYuODkgMi4wODYgMTAuODc1IDIuMDg2YzEuOTIyIDAgMi45My0uNDkzIDMuNTQtLjQ5M2MuNzk2IDAgMS40MDYuNDkzIDEuNDA2IDEuMTcydjExLjU1NWMwIDEuMDU1LS40NDYgMS43MzQtMS40NTQgMi4xOGMtLjg2Ny4zOTgtMS42MTcuNjA5LTMuMzc1LjYwOWMtNC4wNzggMC02LjY4LTIuMDYyLTEwLjg3NS0yLjA2MmMtMS40MyAwLTIuMzY3LjI4LTIuNzg5LjQ2OHY3LjE0OWMwIC41ODYtLjQ0NSAxLjA3OC0xLjA1NCAxLjA3OCIvPjwvc3ZnPg==`
  }
};

export function getNodeIcon(node: CustomNodeData) {
  if (!node.status) return '';

  const type = node.milestone ? 'flag64' : 'base64';

  return nodeStatus[node.status][type];
}

export function getNodeStatusTag(state: NodeStatus, tagProperty?: TagProps) {
  const { color, type } = nodeStatus[state] || {};

  return h(
    ElTag,
    {
      color,
      size: 'small',
      ...tagProperty
    },
    {
      default: () => type
    }
  );
}
