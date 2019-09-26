module.exports = {
  name: 'consolidator',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/consolidator',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
