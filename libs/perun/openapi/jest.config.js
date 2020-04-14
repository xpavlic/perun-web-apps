module.exports = {
  name: 'perun-openapi',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/perun/openapi',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
