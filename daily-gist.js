import "dotenv/config";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Octokit } from "@octokit/rest";
import { readFileSync } from "fs";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

if (!GITHUB_TOKEN) {
  throw Error(".env 파일에서 GITHUB_TOKEN이 설정되지 않았습니다.");
}

const TEMPLATES = {
  README: "README.md",
  CHECKPOINT: "나만의체크포인트.md",
  TIL: "학습정리.md",
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatePath = join(__dirname, "templates");

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

function loadTemplate(name) {
  try {
    return readFileSync(join(templatePath, name), "utf-8");
  } catch (error) {
    throw new Error(`${templatePath} 에서 ${name} 파일을 찾을 수 없습니다.`);
  }
}

function createGistFiles() {
  return {
    [TEMPLATES.README]: {
      content: loadTemplate(TEMPLATES.README),
    },
    [TEMPLATES.CHECKPOINT]: {
      content: loadTemplate(TEMPLATES.CHECKPOINT),
    },
    [TEMPLATES.TIL]: {
      content: loadTemplate(TEMPLATES.TIL),
    },
  };
}

async function createDailyGist() {
  try {
    const files = createGistFiles();

    const response = await octokit.gists.create({
      public: false,
      files,
    });

    console.log("✅ Gist가 성공적으로 생성되었습니다.");
    console.log(`🔗 URL: ${response.data.html_url}`);
  } catch (error) {
    if (error.status === 401) {
      throw Error("Gihub 토큰이 유효하지 않습니다.");
    }

    throw Error(error.message);
  }
}

createDailyGist().catch((error) => {
  console.error("❗️ Error: ", error.message);
});
