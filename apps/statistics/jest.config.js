module.exports = {
  name: 'statistics',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/statistics',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
