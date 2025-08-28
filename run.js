#!/usr/bin/env node

import {spawnSync} from "node:child_process"

const [, , ...args] = process.argv;
// FIXME windows
const result = spawnSync("target/release/wasm-pack", args, {cwd: process.cwd(), stdio: "inherit"})

if (result.error) {
	console.error(msg);
	process.exit(1);
}

process.exit(result.status);