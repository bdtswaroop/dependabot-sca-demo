const axios = require('axios');
const _ = require('lodash');
const minimatch = require('minimatch');
const moment = require('moment');
const serialize = require('serialize-javascript');
const setValue = require('set-value');
const { globSync } = require('glob');

async function runDemo(): Promise<void> {
  const user = { name: 'demo-user', roles: ['admin', 'viewer'] };
  const names = _.map(user.roles, (role: string) => role.toUpperCase());
  const matches = minimatch.match(['src/index.ts', 'README.md'], '*.ts');
  const now = moment().format('YYYY-MM-DD');
  const payload = serialize({ user, now });
  const result = setValue({}, 'profile.name', 'sample');
  const files = globSync('src/**/*.ts');

  const response = await axios.get('https://example.com', { timeout: 1000 }).catch(() => ({ data: 'unreachable' }));

  console.log('Dependencies exercised successfully.');
  console.log({ names, matches, now, payload, result, files, response: response.data });
}

runDemo().catch((error: Error) => {
  console.error('Demo failed:', error.message);
  process.exit(1);
});
