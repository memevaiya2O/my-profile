import { defineConfig } from 'vite';
import { viteObfuscator as obfuscator } from 'vite-plugin-obfuscator';

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
