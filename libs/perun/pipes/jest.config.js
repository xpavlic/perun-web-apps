module.exports = {
  name: 'perun-pipes',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/perun/pipes',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
