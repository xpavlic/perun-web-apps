module.exports = {
  name: 'perun-facility-services-config',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/perun/facility-services-config',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
