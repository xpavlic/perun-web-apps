module.exports = {
  name: 'admin-gui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/admin-gui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
