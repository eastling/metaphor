const Base = require('./base.js');

module.exports = class extends Base {
  constructor(...arg) {
    super(...arg);
    this.modelInstance = this.model('metaphor');
  }

  indexAction() {
    return this.display();
  }

  async initAction() {
    const result = await this.modelInstance.init();
    return this.success({ result });
  }

  addAction() {
    const { data } = this.post();
    this.modelInstance.add({ data });
  }

  async getListAction() {
    const result = await this.modelInstance.getList(this.get());
    return this.success(result);
  }
};
