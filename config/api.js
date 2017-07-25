const prefix = '/reader/api/0'
const apiList = {
  prefix,
  'token': {
    api: `${prefix}/token`,
    type: '1'
  },
  'save-user-pref': {
    api: `${prefix}/save-user-pref`,
    type: '2'
  },
  'user-info': {
    api: `${prefix}/user-info`,
    type: '1'
  },
  'preference/list': {
    api: `${prefix}/preference/list`,
    type: '1'
  },
  'stream/list': {
    api: `${prefix}/preference/stream/list`,
    type: '1'
  },
  'set': {
    api: `${prefix}/preference/stream/set`,
    type: '2'
  },
  'tag-list': {
    api: '/tag/list',
    type: '1'
  },
  'subscription-list': {
    api: '/subscription/list',
    type: '1'
  },
  'mark-all-as-read': {
    api: `${prefix}/mark-all-as-read`,
    type: '2'
  },
  'mark-all-as-read-undo': {
    api: `${prefix}/mark-all-as-read-undo`,
    type: '2'
  },
  'quickadd': {
    api: `${prefix}/subscription/quickadd`,
    type: '2'
  },
  'edit': {
    api: `${prefix}/subscription/edit`,
    type: '2'
  },
  'unread-count': {
    api: `/unread-count`,
    type: '1'
  },
  'edit-tag': {
    api: `${prefix}/edit-tag`,
    type: '2'
  },
  'rename-tag': {
    api: `${prefix}/rename-tag`,
    type: '2'
  },
  'disable-tag': {
    api: `${prefix}/disable-tag`,
    type: '2'
  },
  'atom': {
    api: '/reader/atom',
    type: '1'
  },
  'stream/contents': {
    api: `/stream/contents`,
    type: '1'
  },
  'items/contents': {
    api: `${prefix}/stream/items/contents`,
    type: '1'
  },
  'ids': {
    api: `${prefix}/stream/items/ids`,
    type: '1'
  },
}

export default apiList