module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['chore', 'docs', 'feat', 'fix', 'refactor', 'style', 'test'],
        ],
        'header-max-length': [
            2,
            'always',
            150,
        ],
    },
};
