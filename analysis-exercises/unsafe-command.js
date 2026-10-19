import http from 'node:http';
import { exec } from 'node:child_process';

// Static-analysis exercise only.
// Do not import, execute, or deploy this file.
export const unsafeServer = http.createServer((req, res) => {
  const input = new URL(req.url, 'http://localhost')
    .searchParams.get('command');

  exec(input, (error, stdout) => {
    res.statusCode = error ? 500 : 200;
    res.end(stdout);
  });
});