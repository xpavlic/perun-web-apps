module.exports = {
  name: 'general',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/general',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
