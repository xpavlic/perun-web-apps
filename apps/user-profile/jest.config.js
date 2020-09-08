module.exports = {
  name: 'user-profile-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/users-page',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
