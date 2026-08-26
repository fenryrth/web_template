import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, ".agents", "skills");
const targets = [
  path.join(root, ".claude", "skills"),
];

if (!fs.existsSync(source)) {
  console.error("Missing canonical skills directory:", source);
  process.exit(1);
}

function copyDirectory(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(from, to);
    } else if (entry.isFile()) {
      const body = fs.readFileSync(from);
      if (entry.name === "SKILL.md") {
        const header = Buffer.from(
          "<!-- GENERATED from .agents/skills. DO NOT EDIT THIS COPY DIRECTLY. -->\n\n"
        );
        fs.writeFileSync(to, Buffer.concat([header, body]));
      } else {
        fs.copyFileSync(from, to);
      }
    }
  }
}

for (const target of targets) {
  fs.rmSync(target, { recursive: true, force: true });
  copyDirectory(source, target);
  console.log(`Synced skills: ${path.relative(root, source)} -> ${path.relative(root, target)}`);
}
