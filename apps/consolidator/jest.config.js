module.exports = {
  name: 'consolidator',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/consolidator',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
