module.exports = class extends think.Controller {
  async __before() {
    this.setCorsHeader();

    if (this.ctx.method === 'OPTIONS') {
      return this.success();
    }
  }

  setCorsHeader() {
    this.header('Access-Control-Allow-Origin', '*');
    this.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization,  x-forwarded-for'
    );
    this.header(
      'Access-Control-Request-Method',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    this.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    this.header('Access-Control-Allow-Credentials', 'true');
  }
};
