module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: '好啊！走！',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Developer',
    },
    sent: true,
    received: true,
    // location: {
    //   latitude: 48.864601,
    //   longitude: 2.398704
    // },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: '要不要一起遛狗呀～',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
    },
  },
];
