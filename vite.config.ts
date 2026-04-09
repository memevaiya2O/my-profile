import { defineConfig } from 'vite';
import pkg from 'vite-plugin-obfuscator';

// CommonJS মডিউল থেকে প্লাগইনটি বের করে আনা হচ্ছে
const obfuscator = (pkg as any).viteObfuscator || pkg;

export default defineConfig({
  plugins: [
    obfuscator({
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 1,
      debugProtection: true,
      debugProtectionInterval: 1000,
      disableConsoleOutput: true,
      identifierNamesGenerator: 'hexadecimal',
      numbersToExpressions: true,
      renameGlobals: true,
      selfDefending: true,
      splitStrings: true,
      splitStringsChunkLength: 2,
      stringArray: true,
      stringArrayEncoding: ['rc4'],
      stringArrayThreshold: 1,
      unicodeEscapeSequence: true
    }),
  ],
  build: {
    assetsInlineLimit: 100000000,
  }
});
