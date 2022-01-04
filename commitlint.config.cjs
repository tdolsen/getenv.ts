module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {},
	ignores: [(commit) => /^chore\(release\)\:/.test(commit)],
};
