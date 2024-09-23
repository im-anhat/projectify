module.exports = {
  apps: [
    {
      name: "projectify",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
