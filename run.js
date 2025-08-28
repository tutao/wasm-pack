#!/usr/bin/env node

import {spawnSync} from "node:child_process"
import path, {dirname} from "node:path";
import {fileURLToPath} from "node:url";

const fileDir = dirname(fileURLToPath(import.meta.url))

const [, , ...args] = process.argv;

// FIXME windows
const result = spawnSync(path.join(fileDir, "target/release/wasm-pack"), args, {cwd: process.cwd(), stdio: "inherit"})

if (result.error) {
	console.error(result.error);
	process.exit(1);
}

process.exit(result.status);