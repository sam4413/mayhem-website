// runStart.js
const { spawn } = require('child_process');

const child = spawn('npm', ['run', 'dev', '-p 5497'], {
  stdio: 'inherit', // Pipe child's stdout/stderr directly to this process
  shell: true       // Important on Windows to ensure `npm` is recognized
});

child.on('close', (code) => {
  console.log(`Next.js process exited with code ${code}`);
});
