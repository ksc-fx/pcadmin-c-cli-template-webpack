module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "pcadmin 组件"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "pcadminbase": {
      "type": "confirm",
      "message": "Need pcadmin-base package?"
    }
  },
  "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n"
};
