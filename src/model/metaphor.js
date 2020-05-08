module.exports = class extends think.Model {
  async init() {
    const { data } = require('./data.js');
    for (const item of data) {
      try {
        await this.add(item);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    }
    return true;
  }

  async getList(data) {
    const query = {};
    for (const key in data) {
      if (data[key]) {
        query[key] = data[key];
      }
    }
    for (const item in query) {
      if (item === 'content') {
        const temp = query['content'];
        query['content'] = ['like', `%${temp}%`];
      }
    }
    const list = await this.where(query).select();
    return list;
  }
};
